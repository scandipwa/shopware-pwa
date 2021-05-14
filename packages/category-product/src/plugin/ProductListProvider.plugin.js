import CategoryContext from '@scandipwa/category/src/context/Category.context';
import { withContexts } from '@scandipwa/framework/src/util/Context';
import { ProductListProvider } from '@scandipwa/product/src/context/ProductList.provider';

import { getCategoryProducts } from '../api/CategoryProduct.request';

const requestCategoryProductsIfPossible = (args, callback, instance) => {
    // const { CategoryContext: { category: { id } } } = instance.props;
    console.log(instance.props);
    const id = 0;

    if (!id) {
        return callback(...args);
    }

    const { selectedFilters } = this.context;
    return getCategoryProducts(id, selectedFilters);
};

const addCategoryContextIfProductListProvider = (args, callback) => {
    const [ProviderComponent, ContextProvider] = args;

    console.log('>', ProviderComponent, '>', ProductListProvider);

    if (ProviderComponent === ProductListProvider) {
        return callback(
            withContexts(ProviderComponent, CategoryContext),
            ContextProvider
        );
    }

    return callback(
        ProviderComponent,
        ContextProvider
    );
};

export default {
    'Product/Context/ProductList/Provider/ProductListProvider': {
        'member-function': {
            _requestProductList: requestCategoryProductsIfPossible
        }
    },
    'Framework/Util/Context/withProvider': {
        function: addCategoryContextIfProductListProvider
    }
};
