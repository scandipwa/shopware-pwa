import { createSortedRenderMap } from '@scandipwa/framework/src/util/SortedMap';
import { PureComponent } from 'react';

/** @namespace Landing/Component/Landing/Component/LandingComponent */
export class LandingComponent extends PureComponent {
    content = createSortedRenderMap({});

    renderContent() {
        return this.content.render();
    }

    render() {
        return this.renderContent();
    }
}

export default LandingComponent;
