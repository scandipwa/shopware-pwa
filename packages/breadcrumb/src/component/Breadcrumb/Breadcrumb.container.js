import { HigherOrderComponent, withHOC } from '@scandipwa/framework/src/util/HOC';

import BreadcrumbProvider from '../../context/Breadcrumb.provider';
import BreadcrumbComponent from './Breadcrumb.component';

/** @namespace Breadcrumb/Component/Breadcrumb/Container/BreadcrumbContainer */
export class BreadcrumbContainer extends HigherOrderComponent {
    render() {
        return (
            <BreadcrumbProvider>
                { super.render() }
            </BreadcrumbProvider>
        );
    }
}

export default withHOC(BreadcrumbContainer, BreadcrumbComponent);
