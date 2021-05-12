import PropTypes from 'prop-types';
import { createElement, Fragment, PureComponent } from 'react';

import { getClassNameFromCmsEntity, getStylesFromCmsEntity } from '../../util/cmsStyle';
import CmsEntity from '../CmsEntity';
import CmsSectionDefault from '../CmsSectionDefault';
import { CMS_DEFAULT_SECTION_KEY } from '../CmsSectionDefault/CmsSectionDefault.config';
import CmsSectionSidebar from '../CmsSectionSidebar';
import { CMS_SIDEBAR_SECTION_KEY } from '../CmsSectionSidebar/CmsSectionSidebar.config';
import CmsSlot from '../CmsSlot';

/**
 * @augments {PureComponent<{sections: import('../../api/Cms.type').CmsSection[]}>}
 * @namespace Cms/Component/CmsContentFactory/ContentFactory/Component/ContentFactoryComponent
 */
export class ContentFactoryComponent extends PureComponent {
    static propTypes = {
        sections: PropTypes.arrayOf(PropTypes.shape({})).isRequired
    };

    sectionTypeComponentMap = {
        [CMS_DEFAULT_SECTION_KEY]: CmsSectionDefault,
        [CMS_SIDEBAR_SECTION_KEY]: CmsSectionSidebar
    };

    blockTypeComponentMap = {};

    slotTypeComponentMap = {};

    renderEntity(component, entity, children = null) {
        const style = getStylesFromCmsEntity(entity);
        const className = getClassNameFromCmsEntity(entity);

        return createElement(
            component,
            {
                style,
                className,
                entity
            },
            children
        );
    }

    renderSlot = (slot) => {
        const { type, _uniqueIdentifier } = slot;
        const Component = this.slotTypeComponentMap[type] || CmsSlot;

        return (
            <Fragment key={ _uniqueIdentifier }>
                <Component
                  slot={ slot }
                />
            </Fragment>
        );
    };

    renderBlock = (block) => {
        const { type, _uniqueIdentifier, slots } = block;
        const component = this.blockTypeComponentMap[type] || CmsEntity;
        const children = slots.map(this.renderSlot);

        return (
            <Fragment key={ _uniqueIdentifier }>
                { this.renderEntity(component, block, children) }
            </Fragment>
        );
    };

    renderSection = (section) => {
        const { type, _uniqueIdentifier, blocks } = section;
        const component = this.sectionTypeComponentMap[type] || CmsEntity;
        const children = blocks.map(this.renderBlock);

        return (
            <Fragment key={ _uniqueIdentifier }>
                { this.renderEntity(component, section, children) }
            </Fragment>
        );
    };

    renderSections() {
        const { sections } = this.props;
        return sections.map(this.renderSection);
    }

    render() {
        return this.renderSections();
    }
}

export default ContentFactoryComponent;
