import { getCategoryById } from '@scandipwa/category/src/api/Category.request';
import NextPageContext from '@scandipwa/framework/src/context/NextPage.context';
import { arrayCompare } from '@scandipwa/framework/src/util/Compare';

const getIsCurrentBreadcrumbCategoriesMatchingProductBreadcrumbCategories = ({ state, context }) => {
    /**
     * @type {React.ContextType<typeof NextPageContext>}
     */
    const {
        props: {
            product: {
                product: {
                    seoCategory: {
                        path: seoCategoryPath
                    } = {}
                } = {}
            } = {}
        }
    } = context;
    const { breadcrumbCategories } = state;

    const breadcrumbCategoryIds = seoCategoryPath
        .split('|')
        .filter(Boolean);

    const storedCategoryIds = breadcrumbCategories.map(({ id }) => id);

    return arrayCompare(storedCategoryIds, breadcrumbCategoryIds);
};

const requestCategoryProductsIfPossible = async (args, callback, instance) => {
    callback(...args);

    const { context, state } = instance;

    if (!getIsCurrentBreadcrumbCategoriesMatchingProductBreadcrumbCategories({ state, context })) {
        instance.requestBreadcrumbCategories();
    }
};

const requestProductBreadcrumbCategories = async (args, callback, instance) => {
    await callback(...args);
    const {
        props: {
            product: {
                product: {
                    seoCategory: {
                        path: seoCategoryPath
                    } = {}
                } = {}
            } = {}
        }
    } = instance.context;

    const breadcrumbCategories = seoCategoryPath
        .split('|')
        .filter(Boolean);

    return Promise.all(breadcrumbCategories.map((categoryId) => getCategoryById(categoryId)));
};

export const addBreadcrumbCategoriesServerSideProps = async (args, callback) => {
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
    'Breadcrumb/Context/Breadcrumb/Provider/BreadcrumbProvider': {
        'member-function': {
            componentDidMount: requestCategoryProductsIfPossible,
            componentDidUpdate: requestCategoryProductsIfPossible,
            _requestBreadcrumbCategories: requestProductBreadcrumbCategories
        }
    },
    'Pages/[[...seoPathInfo]]/getServerSideProps': {
        function: {
            implementation: addBreadcrumbCategoriesServerSideProps,
            position: 11000 // we expect that product props already injected by other plugin
        }
    }
};
