import PropTypes from 'prop-types';
import { Fragment, PureComponent } from 'react';

/**
 * @augments {PureComponent<{sections: import('../../api/Cms.type').CmsSection[]}>}
 * @namespace Cms/Component/CmsContentFactory/ContentFactory/Component/ContentFactoryComponent
 */
export class ContentFactoryComponent extends PureComponent {
    static propTypes = {
        sections: PropTypes.arrayOf(PropTypes.shape({})).isRequired
    };

    sectionTypeRenderMap = {};

    blockTypeRenderMap = {};

    elementTypeRenderMap = {};

    renderFallback({ type }) {
        return `This ${ type } is not supported.`;
    }

    renderElement = (element) => {
        const { type, _uniqueIdentifier } = element;
        const elementRender = this.elementTypeRenderMap[type] || this.renderFallback;

        return (
            <Fragment key={ _uniqueIdentifier }>
                { elementRender(element) }
            </Fragment>
        );
    };

    renderBlock = (block) => {
        const { type, _uniqueIdentifier, elements } = block;
        const blockRender = this.blockTypeRenderMap[type] || this.renderFallback;
        const children = elements.map(this.renderElement);

        return (
            <Fragment key={ _uniqueIdentifier }>
                { blockRender(block, children) }
            </Fragment>
        );
    };

    renderSection = (section) => {
        const { type, _uniqueIdentifier, blocks } = section;
        const sectionRenderer = this.sectionTypeRenderMap[type] || this.renderFallback;
        const children = blocks.map(this.renderBlock);

        return (
            <Fragment key={ _uniqueIdentifier }>
                { sectionRenderer(section, children) }
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
