import { getTranslatedField } from '@scandipwa/framework/src/util/GetTranslatedField';
import { createSortedRenderMap } from '@scandipwa/framework/src/util/SortedMap';
import { Breadcrumb } from '@virtual-module/ui';
import { PureComponent } from 'react';

import BreadcrumbContext from '../../context/Breadcrumb.context';
import { BREADCRUMB_KEY } from './Breadcrumb.config';

/** @namespace Breadcrumb/Component/Breadcrumb/Component/BreadcrumbComponent */
export class BreadcrumbComponent extends PureComponent {
    static contextType = BreadcrumbContext;

    content = createSortedRenderMap({
        [BREADCRUMB_KEY]: this.renderBreadCrumbs.bind(this)
    });

    renderBreadCrumbs() {
        /**
         * @type {React.ContextType<typeof BreadcrumbContext>}
         */
        const { breadcrumbCategories } = this.context;

        /**
         * @type {import('@virtual-module/ui').BreadcrumbItem[]}
         */
        const breadcrumbs = breadcrumbCategories.map((category) => ({
            label: getTranslatedField(category, 'name'),
            href: category.seoUrls ? `/${category.seoUrls[0].seoPathInfo}` : null
        }));

        return (
            <Breadcrumb breadcrumbs={ breadcrumbs } />
        );
    }

    renderContent() {
        return this.content.render();
    }

    render() {
        return this.renderContent();
    }
}

export default BreadcrumbComponent;
