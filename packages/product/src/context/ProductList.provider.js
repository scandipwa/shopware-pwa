/* eslint-disable react/destructuring-assignment */
// TODO: remove CategoryContext from here, it should come from a different module!
import { arrayCompare } from '@scandipwa/framework/src/util/Compare';

import { ContextProvider, withProvider } from '../../../framework/src/util/Context';
import { getProducts } from '../api/Product.request';
import FilteringContext from './Filtering.context';
import {
    LIMIT_PARAM_KEY,
    MANUFACTURER_PARAM_KEY,
    MAX_PRICE_PARAM_KEY,
    MIN_PRICE_PARAM_KEY,
    PAGE_PARAM_KEY,
    PROPERTIES_PARAM_KEY
} from './Filtering.provider';
import ProductListContext from './ProductList.context';

/** @namespace Product/Context/ProductList/Provider/ProductListProvider */
export class ProductListProvider extends ContextProvider {
    static contextType = FilteringContext;

    getDefaultProductsResult() {
        return {
            elements: [],
            aggregations: {}
        };
    }

    __construct(props) {
        super.__construct(props);

        const { productsResult } = this.props;
        const isMatching = this.getIsCurrentFilterMatchingProductsResult(productsResult);

        if (!isMatching) {
            this.state = {
                productsResult: this.getDefaultProductsResult(),
                isLoading: true
            };

            return;
        }

        this.state = {
            productsResult: productsResult || {},
            isLoading: !productsResult
        };
    }

    getIsCurrentFilterMatchingProductsResult(productsResult) {
        const { selectedFilters } = this.context;

        const {
            currentFilters,
            page,
            limit
        } = productsResult;

        return (
            arrayCompare(selectedFilters.manufacturer, currentFilters.manufacturer)
            && arrayCompare(selectedFilters.properties, currentFilters.properties)
            && selectedFilters.page === page
            && selectedFilters.limit === limit
            && selectedFilters['min-price'] === currentFilters.price.min
            && selectedFilters['max-price'] === currentFilters.price.max
        );
    }

    componentDidMount() {
        const { productsResult } = this.props;
        const isMatching = this.getIsCurrentFilterMatchingProductsResult(productsResult);

        if (isMatching) {
            this.synchronizeUrlWithProductsResult(productsResult);
            return;
        }

        this.requestProductList();
    }

    componentDidUpdate() {
        const { productsResult, isLoading } = this.state;

        if (
            !isLoading
            && productsResult
            && !this.getIsCurrentFilterMatchingProductsResult(productsResult)
        ) {
            this.requestProductList();
        }
    }

    async synchronizeUrlWithProductsResult(productsResult) {
        const { setProperty } = this.context;

        await setProperty(LIMIT_PARAM_KEY, productsResult.limit, true);
        await setProperty(PAGE_PARAM_KEY, productsResult.page, true);
        await setProperty(PROPERTIES_PARAM_KEY, productsResult.currentFilters.properties, true);
        await setProperty(MANUFACTURER_PARAM_KEY, productsResult.currentFilters.manufacturer, true);
        await setProperty(MIN_PRICE_PARAM_KEY, productsResult.currentFilters.price.min, true);
        await setProperty(MAX_PRICE_PARAM_KEY, productsResult.currentFilters.price.max, true);
    }

    _requestProductList() {
        const { selectedFilters } = this.context;
        return getProducts(selectedFilters);
    }

    async requestProductList() {
        this.setState({ isLoading: true });
        const productsResult = await this._requestProductList();
        this.setState({ productsResult, isLoading: false });
    }

    getProducts() {
        const { productsResult: { elements } } = this.state;
        return elements;
    }

    getAggregations() {
        const { productsResult: { aggregations } } = this.state;
        return aggregations;
    }

    getCurrentPage() {
        const { productsResult: { page } } = this.state;
        return page;
    }

    getTotalPages() {
        const { productsResult: { total, limit } } = this.state;
        return Math.ceil(total / limit);
    }

    getContextValue() {
        const { isLoading } = this.state;

        return {
            ...super.getContextValue(),
            isLoading,
            currentPage: this.getCurrentPage(),
            totalPages: this.getTotalPages(),
            products: this.getProducts(),
            aggregations: this.getAggregations()
        };
    }
}

export default withProvider(
    ProductListProvider,
    ProductListContext.Provider
);
