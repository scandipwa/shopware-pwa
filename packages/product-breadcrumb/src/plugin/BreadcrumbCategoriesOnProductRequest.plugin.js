import { getCategoryById } from '@scandipwa/category/src/api/Category.request';

// eslint-disable-next-line @scandipwa/scandipwa-guidelines/use-namespace
export const addBreadcrumbCategoriesProps = async (args, callback) => {
    const { props: originalProps } = await callback(...args);

    if (!originalProps.product) {
        return { props: originalProps };
    }

    const {
        product: {
            seoCategory: {
                path: seoCategoryPath
            } = {}
        } = {}
    } = originalProps.product;

    const breadcrumbCategoryIds = seoCategoryPath
        .split('|')
        .filter(Boolean);

    const breadcrumbCategories = await Promise.all(
        breadcrumbCategoryIds.map(
            (categoryId) => getCategoryById(categoryId)
        )
    );

    return {
        props: {
            ...originalProps,
            breadcrumbCategories
        }
    };
};

export default {
    'Pages/[[...seoPathInfo]]/getServerSideProps': {
        function: {
            implementation: addBreadcrumbCategoriesProps,
            position: 11000
        }
    }
};
