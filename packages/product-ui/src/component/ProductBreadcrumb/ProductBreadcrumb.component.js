/* eslint-disable react/jsx-one-expression-per-line */
/* eslint-disable @scandipwa/scandipwa-guidelines/only-render-in-component */
import ProductContext from '@scandipwa/product/src/context/Product.context';
import { PureComponent } from 'react';

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
    renderBreadCrumb = (breadcrumb, i) => (
        <li key={ i } style={ { marginRight: '0.5rem' } }> &gt; { breadcrumb }</li>
    );

    renderBreadCrumbs() {
        const { product: { seoCategory: { breadcrumb } } } = this.getContextValue();

        return (
            <div>
                <ul style={ { display: 'flex', listStyleType: 'none', padding: 0 } }>{ breadcrumb.map(this.renderBreadCrumb) }</ul>
            </div>
        );
    }

    render() {
        return this.renderBreadCrumbs();
    }
}

export default ProductBreadcrumbComponent;
