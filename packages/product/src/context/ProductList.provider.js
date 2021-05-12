/* eslint-disable react/destructuring-assignment */
import { ContextProvider, withProvider } from '../../../framework/src/util/Context';
import { getProducts } from '../api/Product.request';
import FilteringContext from './Filtering.context';
import ProductListContext from './ProductList.context';

/** @namespace Product/Context/ProductList/Provider/ProductListProvider */
export class ProductListProvider extends ContextProvider {
    static contextType = FilteringContext;

    state = {
        products: [],
        isLoading: false
    };

    async requestProductList() {
        /**
         * @type {React.ContextType<typeof FilteringContext>}
         */
        // eslint-disable-next-line prefer-destructuring
        const {
            aggregations,
            limit,
            page
        } = this.context;

        this.setState({ isLoading: true });

        const productsResult = await getProducts({
            page,
            limit,
            aggregations
        });

        this.setState({ productsResult });
    }

    componentDidUpdate(prevProps, prevState) {
        // TODO: implement if filters or URL changed ???
    }

    getProducts() {
        const { products: { elements } } = this.state;
        return elements;
    }

    getAggregations() {
        const { products: { aggregations } } = this.state;
        return aggregations;
    }

    getContextValue() {
        const { isLoading } = this.state;

        return {
            ...super.getContextValue(),
            isLoading,
            products: this.getProducts()
        };
    }
}

export default withProvider(ProductListProvider, ProductListContext.Provider);
