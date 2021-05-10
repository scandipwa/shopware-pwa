import { createSortedRenderMap } from '@scandipwa/framework/src/util/SortedMap';
import { PureComponent } from 'react';

/** @namespace Scandipwa/Homepage/Component/Footer/Component/FooterComponent */
export class FooterComponent extends PureComponent {
    content = createSortedRenderMap({});

    renderContent() {
        return this.content.render();
    }

    render() {
        return (
            <footer>
                { this.renderContent() }
            </footer>
        );
    }
}

export default FooterComponent;
