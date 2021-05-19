/* eslint-disable @scandipwa/scandipwa-guidelines/jsx-no-conditional,react/jsx-one-expression-per-line, @scandipwa/scandipwa-guidelines/only-render-in-component */
import BreadcrumbContext from '@scandipwa/breadcrumb/src/context/Breadcrumb.context';
import { getTranslatedField } from '@scandipwa/framework/src/util/GetTranslatedField';
import { Breadcrumb } from '@virtual-module/ui';
import { PureComponent } from 'react';

/** @namespace ProductBreadcrumb/Component/ProductBreadcrumb/Component/ProductBreadcrumbComponent */
export class ProductBreadcrumbComponent extends PureComponent {
    static contextType = BreadcrumbContext;

    /**
     * @returns {React.ContextType<typeof BreadcrumbContext>}
     */
    getContextValue() {
        return this.context;
    }

    renderBreadCrumbs() {
        const { breadcrumbCategories } = this.getContextValue();

        /**
         * @type {import('@virtual-module/ui').BreadcrumbItem[]}
         */
        const breadcrumbs = breadcrumbCategories.map((category) => ({
            label: getTranslatedField(category, 'name'),
            href: category.seoUrls ? category.seoUrls[0].seoPathInfo : null
        }));

        return (
            <Breadcrumb breadcrumbs={ breadcrumbs } />
        );
    }

    render() {
        return this.renderBreadCrumbs();
    }
}

export default ProductBreadcrumbComponent;
