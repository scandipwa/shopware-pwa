/* eslint-disable react/destructuring-assignment */
import { compareObjects } from '@scandipwa/framework/src/util/CompareObjects';
import { withRouter } from 'next/router';

import { ContextProvider, withProvider } from '../../../framework/src/util/Context';
import { DEFAULT_LIMIT } from '../api/Product.request';
import FilteringContext from './Filtering.context';

export const PAGE_PARAM_KEY = 'page';
export const LIMIT_PARAM_KEY = 'limit';
export const AGGREGATION_PARAM_KEY = 'aggregations';

/** @namespace Product/Context/Filtering/Provider/FilteringProvider */
export class FilteringProvider extends ContextProvider {
    __construct(props) {
        super.__construct(props);

        this.supportedProperties = {
            [PAGE_PARAM_KEY]: {
                get: () => parseInt(this.getSearchParam(PAGE_PARAM_KEY), 10) || 1,
                set: (value) => this.setSearchParam(PAGE_PARAM_KEY, value)
            },
            [LIMIT_PARAM_KEY]: {
                get: () => parseInt(this.getSearchParam(LIMIT_PARAM_KEY), 10) || DEFAULT_LIMIT,
                set: (value) => this.setSearchParam(LIMIT_PARAM_KEY, value)
            },
            [AGGREGATION_PARAM_KEY]: {
                get: () => {
                    try {
                        return JSON.parse(this.getSearchParam(LIMIT_PARAM_KEY));
                    } catch (e) {
                        return [];
                    }
                },
                set: (value) => this.setSearchParam(AGGREGATION_PARAM_KEY, JSON.stringify(value))
            }
        };

        this.state = this.getCurrentStateFromUrl();
    }

    /**
     * 1. We have a setter (setProperty)
     * 2. Once called, just update URL params
     * 3. Listen for URL change, update the state
     * 4. State updated => update the context
     */

    getSearchParam(key) {
        const { router } = this.props;
        return router.query[key];
    }

    setSearchParam(key, value) {
        const { router } = this.props;
        router.query[key] = value;
        router.push(router);
    }

    setProperty(key, value) {
        this.supportedProperties[key].set(value);
    }

    getCurrentStateFromUrl() {
        return Object.entries(this.supportedProperties || {}).reduce(
            (acc, [key, value]) => ({
                ...acc,
                [key]: value.get()
            }),
            {}
        );
    }

    componentDidUpdate() {
        // TODO: track the URL change => onHistoryChange
    }

    onHistoryChange() {
        this.setState(this.getCurrentStateFromUrl());
    }

    getContextValue() {
        const {
            aggregations,
            limit,
            page
        } = this.state;

        return {
            ...super.getContextValue(),
            setProperty: this.setProperty.bind(this),
            aggregations,
            limit,
            page
        };
    }
}

export default withProvider(
    withRouter(FilteringProvider),
    FilteringContext.Provider
);
