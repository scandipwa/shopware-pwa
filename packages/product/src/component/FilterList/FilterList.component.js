// import { createSortedRenderMap } from '@scandipwa/framework/src/util/SortedMap';
import PropTypes from 'prop-types';
import { PureComponent } from 'react';

import RangeFilter from '../RangeFilter';
import { RANGE_FILTER_TYPE } from '../RangeFilter/RangeFilter.config';
import SelectFilter from '../SelectFilter';
import { SELECT_FILTER_TYPE } from '../SelectFilter/SelectFilter.config';

/** @namespace Product/Component/FilterList/Component/FilterListComponent */
export class FilterListComponent extends PureComponent {
    static propTypes = {
        allFilters: PropTypes.arrayOf(PropTypes.shape({
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
        })).isRequired
    };

    filterTypeComponentMap = {
        [SELECT_FILTER_TYPE]: SelectFilter,
        [RANGE_FILTER_TYPE]: RangeFilter
    };

    renderFilterRangeType() {
        return 'this is range';
    }

    renderFilter = (filter) => {
        const { type, name } = filter;
        const Component = this.filterTypeComponentMap[type];

        return (
            <Component
              filter={ filter }
              key={ name }
            />
        );
    };

    renderContent() {
        const { allFilters } = this.props;
        return allFilters.map(this.renderFilter);
    }

    render() {
        return this.renderContent();
    }
}

export default FilterListComponent;
