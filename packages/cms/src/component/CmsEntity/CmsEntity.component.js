/* eslint-disable react/prop-types */
import PropTypes from 'prop-types';
import { PureComponent } from 'react';

/**
 * @augments {PureComponent<{entity: import('../../api/Cms.type').CmsEntity}>}
 * @namespace Cms/Component/CmsEntity/Component/CmsEntityComponent
 */
export class CmsEntityComponent extends PureComponent {
    static propTypes = {
        entity: PropTypes.shape({}).isRequired,
        className: PropTypes.string,
        style: PropTypes.shape({}),
        children: PropTypes.node
    };

    static defaultProps = {
        style: {},
        className: '',
        children: null
    };

    renderContent() {
        const {
            entity: { type, apiAlias },
            children
        } = this.props;

        return (
            <>
                { `This ${ apiAlias } of type ${ type } is not supported.` }
                { children }
            </>
        );
    }

    render() {
        const { style, className } = this.props;

        return (
            <div style={ style } className={ className }>
                { this.renderContent() }
            </div>
        );
    }
}

export default CmsEntityComponent;
