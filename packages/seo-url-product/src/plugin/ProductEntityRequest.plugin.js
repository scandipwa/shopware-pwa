import { getProductById } from '@scandipwa/product/src/api/Product.request';

import { PRODUCT_ENTITY_TYPE } from '../component/ProductPage/ProductPage.config';

const addProductEntityProps = async (args, callback) => {
    const { props: originalProps } = await callback(...args);

    if (
        !originalProps.seoUrl
        || originalProps.seoUrl.routeName !== PRODUCT_ENTITY_TYPE
    ) {
        return { props: originalProps };
    }

    const product = await getProductById(originalProps.seoUrl.foreignKey);

    return {
        props: {
            ...originalProps,
            product
        }
    };
};

export default {
    'Pages/[[...seoPathInfo]]/getServerSideProps': {
        function: {
            implementation: addProductEntityProps,
            position: 10000
        }
    }
};
