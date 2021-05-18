/* eslint-disable @scandipwa/scandipwa-guidelines/jsx-no-conditional,react/jsx-one-expression-per-line, @scandipwa/scandipwa-guidelines/only-render-in-component */
import BreadcrumbContext from '@scandipwa/breadcrumb/src/context/Breadcrumb.context';
import { getTranslatedField } from '@scandipwa/framework/src/util/GetTranslatedField';
import Link from 'next/link';
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

    /**
     * @param {import('@scandipwa/category/src/api/Category.type').Category} breadcrumbCategory
     */
    getBreadcrumbUrl(breadcrumbCategory) {
        const { seoPathInfo } = breadcrumbCategory.seoUrls[0];

        return seoPathInfo;
    }

    /**
     * @param {import('@scandipwa/category/src/api/Category.type').Category} breadcrumbCategory
     */
    renderBreadCrumbLink(breadcrumbCategory) {
        return (
            <Link
              href={ this.getBreadcrumbUrl(breadcrumbCategory) }
            >
                { getTranslatedField(breadcrumbCategory, 'name') }
            </Link>
        );
    }

    /**
     * @param {import('@scandipwa/category/src/api/Category.type').Category} breadcrumbCategory
     */
    renderBreadCrumb = (breadcrumbCategory, i) => (
            <li key={ i } style={ { marginRight: '0.5rem' } }>
                { i === 0 ? '' : '/' } { this.renderBreadCrumbLink(breadcrumbCategory) }
            </li>
    );

    renderBreadCrumbs() {
        const { breadcrumbCategories } = this.getContextValue();

        const filteredBreadCrumbs = breadcrumbCategories.filter((category) => {
            if (!category.seoUrls) {
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
