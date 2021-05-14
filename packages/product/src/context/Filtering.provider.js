/* eslint-disable react/destructuring-assignment */
import { withRouter } from 'next/router';

import { ContextProvider, withProvider } from '../../../framework/src/util/Context';
import { DEFAULT_LIMIT } from '../api/Product.request';
import FilteringContext from './Filtering.context';

export const PAGE_PARAM_KEY = 'page';
export const LIMIT_PARAM_KEY = 'limit';
export const PROPERTIES_PARAM_KEY = 'properties';
export const MANUFACTURER_PARAM_KEY = 'manufacturer';
export const MIN_PRICE_PARAM_KEY = 'min-price';
export const MAX_PRICE_PARAM_KEY = 'max-price';

/** @namespace Product/Context/Filtering/Provider/FilteringProvider */
export class FilteringProvider extends ContextProvider {
    __construct(props) {
        super.__construct(props);

        this.supportedProperties = {
            [PAGE_PARAM_KEY]: {
                get: () => parseInt(this.getSearchParam(PAGE_PARAM_KEY), 10) || 1,
                set: (value, isReplace) => this.setSearchParam(PAGE_PARAM_KEY, value, isReplace)
            },
            [LIMIT_PARAM_KEY]: {
                get: () => parseInt(this.getSearchParam(LIMIT_PARAM_KEY), 10) || DEFAULT_LIMIT,
                set: (value, isReplace) => this.setSearchParam(LIMIT_PARAM_KEY, value, isReplace)
            },
            [MIN_PRICE_PARAM_KEY]: {
                get: () => parseFloat(this.getSearchParam(MIN_PRICE_PARAM_KEY)) || 0,
                set: (value, isReplace) => this.setSearchParam(MIN_PRICE_PARAM_KEY, value, isReplace)
            },
            [MAX_PRICE_PARAM_KEY]: {
                get: () => parseFloat(this.getSearchParam(MAX_PRICE_PARAM_KEY)) || 0,
                set: (value, isReplace) => this.setSearchParam(MAX_PRICE_PARAM_KEY, value, isReplace)
            },
            [PROPERTIES_PARAM_KEY]: {
                get: () => {
                    try {
                        return this.getSearchParam(PROPERTIES_PARAM_KEY).split('|').filter(Boolean);
                    } catch (e) {
                        return [];
                    }
                },
                set: (value, isReplace) => this.setSearchParam(PROPERTIES_PARAM_KEY, value.join('|'), isReplace)
            },
            [MANUFACTURER_PARAM_KEY]: {
                get: () => {
                    try {
                        return this.getSearchParam(MANUFACTURER_PARAM_KEY).split('|').filter(Boolean);
                    } catch (e) {
                        return [];
                    }
                },
                set: (value, isReplace) => this.setSearchParam(MANUFACTURER_PARAM_KEY, value.join('|'), isReplace)
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

    setSearchParam(key, value, isReplace = false) {
        const { router } = this.props;

        const newUrl = {
            pathname: router.pathname,
            query: {
                ...router.query,
                [key]: value
            }
        };

        if (isReplace) {
            return router.replace(newUrl, undefined, { shallow: true });
        }

        return router.push(newUrl, undefined, { shallow: true });
    }

    async setProperty(key, value, isReplace = false) {
        await this.supportedProperties[key].set(value, isReplace);
        await this.setState({ [key]: value });
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

    onHistoryChange() {
        this.setState(this.getCurrentStateFromUrl());
    }

    getSelectedFilters() {
        return Object.keys(this.supportedProperties || {}).reduce(
            (acc, key) => ({
                ...acc,
                [key]: this.state[key]
            }),
            {}
        );
    }

    getContextValue() {
        return {
            ...super.getContextValue(),
            setProperty: this.setProperty.bind(this),
            selectedFilters: this.getSelectedFilters()
        };
    }
}

export default withProvider(
    withRouter(FilteringProvider),
    FilteringContext.Provider
);
