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
        aggregations: {},
        // sort: [],
        price: {},
        loading: false
    };

    async requestProductList() {
        /**
         * @type {React.ContextType<typeof FilteringContext>}
         */
        // eslint-disable-next-line prefer-destructuring
        const {
            aggregations,
            sort,
            filter,
            limit,
            page,
            postFilter
        } = this.context;

        this.setState({ loading: true });

        const productsResult = await getProducts({
            aggregations,
            sort,
            limit,
            page,
            filter,
            postFilter
        });

        this.setState({
            products: productsResult.elements,
            aggregations: productsResult.aggregations,
            // sort: productsResult.sort ???
            loading: false
        });
    }

    componentDidMount() {
        this.requestProductList();
    }

    componentDidUpdate(prevProps, prevState) {
        const { loading, products } = this.state;
        const { loading: prevLoading } = prevState;
        if (!loading && !prevLoading && products.length === 0) {
            this.requestProductList();
        }
    }

    getContextValue() {
        const { products, loading, aggregations } = this.state;
        return {
            ...super.getContextValue(),
            products,
            loading,
            aggregations
        };
    }
}

export default withProvider(ProductListProvider, ProductListContext.Provider);
