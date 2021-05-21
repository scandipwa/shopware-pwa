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
        const { pathname } = new URL(breadcrumb.replace(/\s/i, '-'), API_ENDPOINT);

        return pathname;
    }

    /**
     * @param {string} breadcrumb
     */
    renderBreadCrumb = (breadcrumb, i) => (
            <li key={ i } style={ { marginRight: '0.5rem' } }>
                { i === 0 ? '' : '/' } <Link href={ this.getBreadcrumbUrl(breadcrumb) }>{ breadcrumb }</Link>
            </li>
    );

    renderBreadCrumbs() {
        const { product: { product: { seoCategory: { breadcrumb } } } } = this.getContextValue();

        const filteredBreadCrumbs = breadcrumb.filter((bc) => {
            const navigationUrls = ['home', 'main navigation'];

            if (navigationUrls.includes(bc.toLowerCase().trim())) {
                return false;
            }

            return true;
        });

        return (
            <div>
                <ul style={ { display: 'flex', listStyleType: 'none', padding: 0 } }>
                    { filteredBreadCrumbs.map(this.renderBreadCrumb) }
                </ul>
            </div>
        );
    }

    render() {
        return this.renderBreadCrumbs();
    }
}

export default ProductBreadcrumbComponent;
