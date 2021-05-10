import { createSortedRenderMap } from '@scandipwa/framework/src/util/SortedMap';
import { PureComponent } from 'react';

/** @namespace Layout/Component/Header/Component/HeaderComponent */
export class HeaderComponent extends PureComponent {
    content = createSortedRenderMap({});

    renderContent() {
        return this.content.render();
    }

    render() {
        return (
            <header>
                { this.renderContent() }
            </header>
        );
    }
}

export default HeaderComponent;
