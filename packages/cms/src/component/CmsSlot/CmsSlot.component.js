/* eslint-disable react/prop-types */
import PropTypes from 'prop-types';
import { PureComponent } from 'react';

/**
 * @augments {PureComponent<{slot: import('../../api/Cms.type').CmsSlot}>}
 * @namespace Cms/Component/CmsSlot/Component/CmsSlotComponent */
export class CmsSlotComponent extends PureComponent {
    static propTypes = {
        slot: PropTypes.shape({}).isRequired
    };

    renderContent() {
        const { slot: { type, apiAlias } } = this.props;
        return `This ${ apiAlias } of type ${ type } is not supported.`;
    }

    render() {
        return this.renderContent();
    }
}

export default CmsSlotComponent;
