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
    state = {
        // filter: [],
        // postFilter: [],
        // sort: [],
        aggregations: [],
        limit: DEFAULT_LIMIT,
        page: 1
    };

    __construct(props) {
        super.__construct(props);

        this.onHistoryChange();
    }

    supportedProperties = {
        set [PAGE_PARAM_KEY](value) {
            return this.setSearchParam(PAGE_PARAM_KEY, value);
        },
        get [PAGE_PARAM_KEY]() {
            return parseInt(this.getSearchParam(PAGE_PARAM_KEY), 10);
        },
        set [LIMIT_PARAM_KEY](value) {
            return this.setSearchParam(LIMIT_PARAM_KEY, value);
        },
        get [LIMIT_PARAM_KEY]() {
            return parseInt(this.getSearchParam(LIMIT_PARAM_KEY), 10);
        },
        set [AGGREGATION_PARAM_KEY](value) {
            return this.setSearchParam(AGGREGATION_PARAM_KEY, JSON.stringify(value));
        },
        get [AGGREGATION_PARAM_KEY]() {
            return JSON.parse(this.getSearchParam(LIMIT_PARAM_KEY));
        }
    };

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
        this.supportedProperties[key] = value;
    }

    onHistoryChange() {
        console.log(this.supportedProperties);
    }

    getContextValue() {
        const {
            aggregations,
            limit,
            page
        } = this.state;

        return {
            ...super.getContextValue(),
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
