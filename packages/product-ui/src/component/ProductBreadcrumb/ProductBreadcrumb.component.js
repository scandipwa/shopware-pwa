/* eslint-disable @scandipwa/scandipwa-guidelines/jsx-no-conditional,react/jsx-one-expression-per-line, @scandipwa/scandipwa-guidelines/only-render-in-component */
import { API_ENDPOINT } from '@scandipwa/framework/src/util/Client';
import ProductContext from '@scandipwa/product/src/context/Product.context';
import Link from 'next/link';
import { PureComponent } from 'react';

// TODO: breadcrumbs should come from a different module

/** @namespace Productui/Component/ProductBreadcrumb/Component/ProductBreadcrumbComponent */
export class ProductBreadcrumbComponent extends PureComponent {
    static contextType = ProductContext;

    /**
     * @returns {React.ContextType<typeof ProductContext>}
     */
    getContextValue() {
        return this.context;
    }

    /**
     * @param {string} breadcrumb
     */
    getBreadcrumbUrl(breadcrumb) {
        // TODO: move this to container ???
        const { pathname } = new URL(breadcrumb.replace(/\s/i, '-'), API_ENDPOINT);

        return pathname;
    }

    /**
     * @param {string} breadcrumb
     */
    renderBreadCrumb = (breadcrumb, i) => (
        <Link
          key={ i }
          href={ this.getBreadcrumbUrl(breadcrumb) }
        >
            { breadcrumb }
        </Link>
    );

    renderBreadCrumbs() {
        const { product: { product: { seoCategory: { breadcrumb } } } } = this.getContextValue();

        const filteredBreadCrumbs = breadcrumb.filter((bc) => {
            // TODO: move this to container ???
            const navigationUrls = ['home', 'main navigation'];

            if (navigationUrls.includes(bc.toLowerCase().trim())) {
                return false;
            }

            return true;
        });

        return filteredBreadCrumbs.map(this.renderBreadCrumb);
    }

    render() {
        return this.renderBreadCrumbs();
    }
}

export default ProductBreadcrumbComponent;
