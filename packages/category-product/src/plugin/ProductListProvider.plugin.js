import CategoryContext from '@scandipwa/category/src/context/Category.context';
import { withContexts } from '@scandipwa/framework/src/util/Context';
import { ProductListProvider } from '@scandipwa/product/src/context/ProductList.provider';

import { getCategoryProducts } from '../api/CategoryProduct.request';

const requestCategoryProductsIfPossible = (args, callback, instance) => {
    const { CategoryContext: { category: { id } } } = instance.props;

    if (!id) {
        return callback(...args);
    }

    const { selectedFilters } = instance.context;
    return getCategoryProducts(id, selectedFilters);
};

const addCategoryContextIfProductListProvider = (args, callback) => {
    const [originalProps] = args;
    const result = callback(...args);

    if (result.type === ProductListProvider) {
        return withContexts(
            (props) => callback({
                ...originalProps,
                ...props
            }),
            CategoryContext
        )(...args);
    }

    return result;
};

export default {
    'Product/Context/ProductList/Provider/ProductListProvider': {
        'member-function': {
            _requestProductList: requestCategoryProductsIfPossible
        }
    },
    'Framework/Util/Context/withProvider/HOC': {
        function: addCategoryContextIfProductListProvider
    }
};
