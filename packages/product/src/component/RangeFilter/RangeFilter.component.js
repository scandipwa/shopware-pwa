import { Accordion, InputText } from '@virtual-module/ui';
import PropTypes from 'prop-types';
import { PureComponent } from 'react';

/** @namespace Product/Component/RangeFilter/Component/RangeFilterComponent */
export class RangeFilterComponent extends PureComponent {
    static propTypes = {
        filter: PropTypes.shape({
            label: PropTypes.string,
            name: PropTypes.string,
            onChange: PropTypes.func,
            type: PropTypes.string,
            options: PropTypes.arrayOf(PropTypes.shape({
                value: PropTypes.oneOfType([
                    PropTypes.string,
                    PropTypes.number
                ]),
                label: PropTypes.string,
                isSelected: PropTypes.bool
            }))
        }).isRequired,
        min: PropTypes.shape({
            value: PropTypes.oneOfType([
                PropTypes.string,
                PropTypes.number
            ]),
            label: PropTypes.string,
            isSelected: PropTypes.bool
        }).isRequired,
        max: PropTypes.shape({
            value: PropTypes.oneOfType([
                PropTypes.string,
                PropTypes.number
            ]),
            label: PropTypes.string,
            isSelected: PropTypes.bool
        }).isRequired,
        onMinChange: PropTypes.func.isRequired,
        onMaxChange: PropTypes.func.isRequired
    };

    renderMin() {
        const {
            min: {
                label,
                value
            },
            onMinChange
        } = this.props;

        return (
            <InputText
              placeholder={ label }
              value={ value }
              onChange={ onMinChange }
            />
        );
    }

    renderMax() {
        const {
            max: {
                label,
                value
            },
            onMaxChange
        } = this.props;

        return (
            <InputText
              placeholder={ label }
              value={ value }
              onChange={ onMaxChange }
            />
        );
    }

    renderDetails() {
        return (
            <>
                { this.renderMin() }
                { this.renderMax() }
            </>
        );
    }

    renderSummary() {
        const { filter: { label } } = this.props;
        return label;
    }

    renderContent() {
        return (
            <Accordion
              details={ this.renderDetails() }
              summary={ this.renderSummary() }
            />
        );
    }

    render() {
        return this.renderContent();
    }
}

export default RangeFilterComponent;
