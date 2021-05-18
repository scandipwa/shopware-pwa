import { Accordion, InputCheckbox } from '@virtual-module/ui';
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
        }).isRequired
    };

    renderOption = (option) => {
        const { value, label, isSelected } = option;
        const { filter: { onChange } } = this.props;

        return (
            <InputCheckbox
              key={ value }
              label={ label }
              // eslint-disable-next-line react/jsx-no-bind
              onChange={ () => onChange(value) }
              checked={ isSelected }
            />
        );
    };

    renderDetails() {
        const { filter: { options } } = this.props;
        return options.map(this.renderOption);
    }

    // izdomat kur ir etikas dilema, iespejamiba ???

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

export default SelectFilterComponent;
