import { createSortedMap } from '@sweet/framework/src/util/SortedMap';
import PropTypes from 'prop-types';
import { PureComponent } from 'react';

/** @namespace Framework/Component/App/Component/AppComponent */
export class AppComponent extends PureComponent {
    static propTypes = {
        children: PropTypes.node.isRequired
    };

    contextProviders = createSortedMap({});

    renderContextProviders() {
        const { children } = this.props;

        return Array.from(this.contextProviders.getSortedMap().values()).reduce(
            (acc, { item: renderer }) => renderer({ children: acc }),
            children
        );
    }

    render() {
        return this.renderContextProviders();
    }
}

export default AppComponent;
