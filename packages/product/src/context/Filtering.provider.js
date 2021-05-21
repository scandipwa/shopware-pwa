/* eslint-disable react/destructuring-assignment */
import { withRouter } from 'next/router';

import { ContextProvider, withProvider } from '../../../framework/src/util/Context';
import { DEFAULT_LIMIT, DEFAULT_SORT } from '../api/Product.request';
import FilteringContext from './Filtering.context';

export const PAGE_PARAM_KEY = 'page';
export const LIMIT_PARAM_KEY = 'limit';
export const PROPERTIES_PARAM_KEY = 'properties';
export const MANUFACTURER_PARAM_KEY = 'manufacturer';
export const MIN_PRICE_PARAM_KEY = 'min-price';
export const MAX_PRICE_PARAM_KEY = 'max-price';
export const SORT_PARAM_KEY = 'order';

/** @namespace Product/Context/Filtering/Provider/FilteringProvider */
export class FilteringProvider extends ContextProvider {
    __construct(props) {
        super.__construct(props);

        this.supportedProperties = {
            [PAGE_PARAM_KEY]: {
                default: 1,
                get: () => (
                    parseInt(this.getSearchParam(PAGE_PARAM_KEY), 10)
                    || this.supportedProperties[PAGE_PARAM_KEY].default
                ),
                beforeSet: () => {},
                set: (value, isReplace) => this.setSearchParam(PAGE_PARAM_KEY, value, isReplace)
            },
            [LIMIT_PARAM_KEY]: {
                default: DEFAULT_LIMIT,
                get: () => (
                    parseInt(this.getSearchParam(LIMIT_PARAM_KEY), 10)
                    || this.supportedProperties[LIMIT_PARAM_KEY].default
                ),
                // reset page on filter
                beforeSet: (isReplace) => this._setProperty(PAGE_PARAM_KEY, 1, isReplace),
                set: (value, isReplace) => this.setSearchParam(LIMIT_PARAM_KEY, value, isReplace)
            },
            [MIN_PRICE_PARAM_KEY]: {
                default: 0,
                get: () => (
                    parseFloat(this.getSearchParam(MIN_PRICE_PARAM_KEY))
                    || this.supportedProperties[MIN_PRICE_PARAM_KEY].default
                ),
                // reset page on filter
                beforeSet: (isReplace) => this._setProperty(PAGE_PARAM_KEY, 1, isReplace),
                set: (value, isReplace) => this.setSearchParam(MIN_PRICE_PARAM_KEY, value, isReplace)
            },
            [MAX_PRICE_PARAM_KEY]: {
                default: 0,
                get: () => (
                    parseFloat(this.getSearchParam(MAX_PRICE_PARAM_KEY))
                    || this.supportedProperties[MAX_PRICE_PARAM_KEY].default
                ),
                // reset page on filter
                beforeSet: (isReplace) => this._setProperty(PAGE_PARAM_KEY, 1, isReplace),
                set: (value, isReplace) => this.setSearchParam(MAX_PRICE_PARAM_KEY, value, isReplace)
            },
            [PROPERTIES_PARAM_KEY]: {
                default: [],
                get: () => {
                    try {
                        return this.getSearchParam(PROPERTIES_PARAM_KEY).split('|').filter(Boolean);
                    } catch (e) {
                        return this.supportedProperties[PROPERTIES_PARAM_KEY].default;
                    }
                },
                // reset page on filter
                beforeSet: (isReplace) => this._setProperty(PAGE_PARAM_KEY, 1, isReplace),
                set: (value, isReplace) => this.setSearchParam(PROPERTIES_PARAM_KEY, value.join('|'), isReplace)
            },
            [MANUFACTURER_PARAM_KEY]: {
                default: [],
                get: () => {
                    try {
                        return this.getSearchParam(MANUFACTURER_PARAM_KEY).split('|').filter(Boolean);
                    } catch (e) {
                        return this.supportedProperties[MANUFACTURER_PARAM_KEY].default;
                    }
                },
                // reset page on filter
                beforeSet: (isReplace) => this._setProperty(PAGE_PARAM_KEY, 1, isReplace),
                set: (value, isReplace) => this.setSearchParam(MANUFACTURER_PARAM_KEY, value.join('|'), isReplace)
            },
            [SORT_PARAM_KEY]: {
                default: DEFAULT_SORT,
                get: () => (
                    this.getSearchParam(SORT_PARAM_KEY)
                    || this.supportedProperties[SORT_PARAM_KEY].default
                ),
                // reset page on filter
                beforeSet: (isReplace) => this._setProperty(PAGE_PARAM_KEY, 1, isReplace),
                set: (value, isReplace) => this.setSearchParam(SORT_PARAM_KEY, value, isReplace)
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

    removeSearchParam(key, isReplace = false) {
        const { router } = this.props;

        const {
            // eslint-disable-next-line no-unused-vars
            [key]: _,
            ...otherQuery
        } = router.query;

        const newUrl = {
            pathname: router.pathname,
            query: otherQuery
        };

        if (isReplace) {
            return router.replace(newUrl, undefined, { shallow: true });
        }

        return router.push(newUrl, undefined, { shallow: true });
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

    async _setProperty(key, newValue, isReplace = false) {
        // always call before set routine
        const beforeState = await this.supportedProperties[key].beforeSet() || {};

        const currentValue = this.supportedProperties[key].get();
        const defaultValue = this.supportedProperties[key].default;

        const cVJ = JSON.stringify(currentValue);
        const dVJ = JSON.stringify(defaultValue);
        const nVJ = JSON.stringify(newValue);

        if (nVJ === dVJ) {
            if (cVJ === dVJ) {
                // if trying to set default value
                // while the current value is already a default value
                // just ingore the request
                return { ...beforeState };
            }

            await this.removeSearchParam(key, isReplace);
            return { ...beforeState, [key]: newValue };
        }

        await this.supportedProperties[key].set(newValue, isReplace);
        return { ...beforeState, [key]: newValue };
    }

    async setProperty(...args) {
        const newState = await this._setProperty(...args);
        this.setState(newState);
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
