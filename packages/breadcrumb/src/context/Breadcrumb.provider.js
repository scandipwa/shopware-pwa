/* eslint-disable react/destructuring-assignment */
import NextPageContext from '@scandipwa/framework/src/context/NextPage.context';
import { arrayCompare } from '@scandipwa/framework/src/util/Compare';

import { getCategoryById } from '../../../category/src/api/Category.request';
import { ContextProvider, withProvider } from '../../../framework/src/util/Context';
import BreadcrumbContext from './Breadcrumb.context';

/**
 * @namespace Breadcrumb/Context/Breadcrumb/Provider/BreadcrumbProvider
 */
export class BreadcrumbProvider extends ContextProvider {
    static contextType = NextPageContext;

    state = {
        breadcrumbCategories: [],
        isLoading: false
    };

    componentDidMount() {
        /**
         * @type {React.ContextType<typeof NextPageContext>}
         */
        const {
            props: {
                product: {
                    product: {
                        seoCategory
                    } = {}
                } = {},
                breadcrumbCategories: breadcrumbCategoriesFromServer
            }
        } = this.context;

        const {
            breadcrumbCategories
        } = this.state;

        if (breadcrumbCategories.length === 0 && breadcrumbCategoriesFromServer.length > 0) {
            this.setState({
                breadcrumbCategories: breadcrumbCategoriesFromServer
            });

            return;
        }

        if (seoCategory && breadcrumbCategories.length === 0) {
            this.requestBreadcrumbCategories();
        }
    }

    componentDidUpdate() {
        if (!this.getIsCurrentBreadcrumbCategoriesMatchingProductBreadcrumbCategories()) {
            this.requestBreadcrumbCategories();
        }
    }

    getIsCurrentBreadcrumbCategoriesMatchingProductBreadcrumbCategories() {
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
        } = this.context;
        const { breadcrumbCategories } = this.state;

        const breadcrumbCategoryIds = seoCategoryPath
            .split('|')
            .filter(Boolean);

        const storedCategoryIds = breadcrumbCategories.map(({ id }) => id);

        return arrayCompare(storedCategoryIds, breadcrumbCategoryIds);
    }

    _requestBreadcrumbCategories() {
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
        } = this.context;

        const breadcrumbCategories = seoCategoryPath
            .split('|')
            .filter(Boolean);

        return Promise.all(breadcrumbCategories.map((categoryId) => getCategoryById(categoryId)));
    }

    async requestBreadcrumbCategories() {
        this.setState({ isLoading: true });
        try {
            const breadcrumbCategories = await this._requestBreadcrumbCategories();
            this.setState({
                breadcrumbCategories,
                isLoading: false
            });
        } catch (e) {
            // TODO handle error
            this.setState({ isLoading: false });
        }
    }

    getContextValue() {
        const { isLoading, breadcrumbCategories } = this.state;

        return {
            ...super.getContextValue(),
            isLoading,
            breadcrumbCategories
        };
    }
}

export default withProvider(
    BreadcrumbProvider,
    BreadcrumbContext.Provider
);
