import PropTypes from 'prop-types';
import { PureComponent } from 'react';

/** @namespace Cms/Component/SeoUrlEntityPage/Component/SeoUrlEntityPageComponent */
export class SeoUrlEntityPageComponent extends PureComponent {
    static propTypes = {
        routeName: PropTypes.string.isRequired,
        foreignKey: PropTypes.string.isRequired
    };

    routeNameComponentMap = {
        // - `frontend.detail.page` => product
        // - `frontend.navigation.page` => category
        // - `frontend.landing.page` => landing-page
    };

    renderDefaultPage() {
        const { routeName } = this.props;
        return `No entity page implementation found for ${ routeName } type.`;
    }

    render() {
        const { routeName, foreignKey } = this.props;
        const EntityPage = this.routeNameComponentMap[routeName];

        if (!EntityPage) {
            return this.renderDefaultPage();
        }

        return (
            <EntityPage id={ foreignKey } />
        );
    }
}

export default SeoUrlEntityPageComponent;
