import { getCategoryById } from '@scandipwa/category/src/api/Category.request';

import { CATEGORY_ENTITY_TYPE } from '../component/CategoryPage/CategoryPage.config';

const addCategoryEntityProps = async (args, callback) => {
    const { props: originalProps } = await callback(...args);

    if (
        !originalProps.seoUrl
        || originalProps.seoUrl.routeName !== CATEGORY_ENTITY_TYPE
    ) {
        return originalProps;
    }

    const category = await getCategoryById(originalProps.seoUrl.foreignKey);

    return {
        props: {
            ...originalProps,
            category
        }
    };
};

export default {
    'Pages/[[...seoPathInfo]]/getServerSideProps': {
        function: {
            implementation: addCategoryEntityProps,
            position: 10000
        }
    }
};
