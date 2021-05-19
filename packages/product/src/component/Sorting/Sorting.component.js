import { InputSelect } from '@virtual-module/ui';
import PropTypes from 'prop-types';
import { PureComponent } from 'react';

/** @namespace Product/Component/Sorting/Component/SortingComponent */
export class SortingComponent extends PureComponent {
    static propTypes = {
        currentSort: PropTypes.string.isRequired,
        onSortingChangeChange: PropTypes.func.isRequired,
        sortingOptions: PropTypes.arrayOf(PropTypes.shape({
            value: PropTypes.string,
            label: PropTypes.string
        })).isRequired
    };

    renderContent() {
        const {
            currentSort,
            sortingOptions,
            onSortingChangeChange
        } = this.props;

        return (
            <InputSelect
              value={ currentSort }
              options={ sortingOptions }
              onChange={ onSortingChangeChange }
            />
        );
    }

    render() {
        return this.renderContent();
    }
}

export default SortingComponent;
