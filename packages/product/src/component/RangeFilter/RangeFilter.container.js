import { HigherOrderComponent, withHOC } from '@scandipwa/framework/src/util/HOC';

import FilteringContext from '../../context/Filtering.context';
import { MAX_PRICE_PARAM_KEY, MIN_PRICE_PARAM_KEY } from '../../context/Filtering.provider';
import RangeFilterComponent from './RangeFilter.component';

/** @namespace Product/Component/RangeFilter/Container/RangeFilterContainer */
export class RangeFilterContainer extends HigherOrderComponent {
    static contextType = FilteringContext;

    async onMinChange(e) {
        const { filter: { onChange } } = this.props;
        onChange(MIN_PRICE_PARAM_KEY, e.target.value || 0);
    }

    async onMaxChange(e) {
        const { filter: { onChange } } = this.props;
        onChange(MAX_PRICE_PARAM_KEY, e.target.value || 0);
    }

    containerFunctions = ({
        onMinChange: this.onMinChange.bind(this),
        onMaxChange: this.onMaxChange.bind(this)
    });

    containerProps = () => {
        const { filter } = this.props;
        const [min, max] = filter.options;

        return {
            min,
            max,
            filter
        };
    };
}

export default withHOC(RangeFilterContainer, RangeFilterComponent);
