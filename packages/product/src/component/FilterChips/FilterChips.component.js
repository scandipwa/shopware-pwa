import { Chip } from '@virtual-module/ui';
import PropTypes from 'prop-types';
import { PureComponent } from 'react';

/** @namespace Product/Component/FilterChips/Component/FilterChipsComponent */
export class FilterChipsComponent extends PureComponent {
    static propTypes = {
        selectedFilters: PropTypes.arrayOf(PropTypes.shape({
            label: PropTypes.string,
            onClick: PropTypes.func
        })).isRequired
    };

    renderChip = ({ key, label, onClick }) => (
        <Chip
          key={ key }
          onClick={ onClick }
          label={ label }
        />
    );

    renderContent() {
        const { selectedFilters } = this.props;
        return selectedFilters.map(this.renderChip);
    }

    render() {
        return this.renderContent();
    }
}

export default FilterChipsComponent;
