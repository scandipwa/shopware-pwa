/* eslint-disable react/destructuring-assignment */
import NextPageContext from '@scandipwa/framework/src/context/NextPage.context';

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
                breadcrumbCategories: breadcrumbCategoriesFromServer = []
            }
        } = this.context;

        const {
            breadcrumbCategories
        } = this.state;

        if (breadcrumbCategories.length === 0 && breadcrumbCategoriesFromServer.length > 0) {
            this.setState({
                breadcrumbCategories: breadcrumbCategoriesFromServer
            });
        }
    }

    async _requestBreadcrumbCategories() {
        return [];
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
