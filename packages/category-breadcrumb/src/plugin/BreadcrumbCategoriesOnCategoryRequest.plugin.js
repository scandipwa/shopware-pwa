import { getCategoryById } from '@scandipwa/category/src/api/Category.request';
import NextPageContext from '@scandipwa/framework/src/context/NextPage.context';
import { arrayCompare } from '@scandipwa/framework/src/util/Compare';

const getIsCurrentBreadcrumbCategoriesMatchingCategoryBreadcrumbCategories = ({ state, context }) => {
    /**
     * @type {React.ContextType<typeof NextPageContext>}
     */
    const {
        props: {
            category: {
                id,
                path: seoCategoryPath
            }
        }
    } = context;
    const { breadcrumbCategories } = state;

    const breadcrumbCategoryIds = seoCategoryPath
        .split('|')
        .filter(Boolean);

    breadcrumbCategoryIds.push(id);

    const storedCategoryIds = breadcrumbCategories.map(({ id }) => id);

    return arrayCompare(storedCategoryIds, breadcrumbCategoryIds);
};

const requestCategoryProductsIfPossible = async (args, callback, instance) => {
    callback(...args);

    const { context, state } = instance;

    if (!context.props.category) {
        return;
    }

    if (!getIsCurrentBreadcrumbCategoriesMatchingCategoryBreadcrumbCategories({ state, context })) {
        instance.requestBreadcrumbCategories();
    }
};

const requestCategoryBreadcrumbCategories = async (args, callback, instance) => {
    const originalResult = await callback(...args);

    if (originalResult && originalResult.length > 0) {
        return originalResult;
    }

    const {
        props: {
            category: {
                path: seoCategoryPath
            },
            category
        }
    } = instance.context;

    const breadcrumbCategories = seoCategoryPath
        .split('|')
        .filter(Boolean);

    const categories = await Promise.all(breadcrumbCategories.map((categoryId) => getCategoryById(categoryId)));

    categories.push(category);

    return categories;
};

export const addBreadcrumbCategoriesServerSideProps = async (args, callback) => {
    const { props: originalProps } = await callback(...args);

    if (!originalProps.category) {
        return { props: originalProps };
    }

    const {
        path: seoCategoryPath
    } = originalProps.category;

    const breadcrumbCategoryIds = seoCategoryPath
        .split('|')
        .filter(Boolean);

    const breadcrumbCategories = await Promise.all(
        breadcrumbCategoryIds.map(
            (categoryId) => getCategoryById(categoryId)
        )
    );

    const copyOfCategory = { ...originalProps.category };

    // remove url to original category since we already on it
    copyOfCategory.seoUrls = null;

    breadcrumbCategories.push(copyOfCategory);

    return {
        props: {
            ...originalProps,
            breadcrumbCategories
        }
    };
};

export default {
    'Breadcrumb/Context/Breadcrumb/Provider/BreadcrumbProvider': {
        'member-function': {
            componentDidMount: requestCategoryProductsIfPossible,
            componentDidUpdate: requestCategoryProductsIfPossible,
            _requestBreadcrumbCategories: requestCategoryBreadcrumbCategories
        }
    },
    'Pages/[[...seoPathInfo]]/getServerSideProps': {
        function: {
            implementation: addBreadcrumbCategoriesServerSideProps,
            position: 11000 // we expect that product props already injected by other plugin
        }
    }
};
