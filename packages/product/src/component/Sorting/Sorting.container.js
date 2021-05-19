import { withContexts } from '@scandipwa/framework/src/util/Context';
import { HigherOrderComponent, withHOC } from '@scandipwa/framework/src/util/HOC';

import FilteringContext from '../../context/Filtering.context';
import { SORT_PARAM_KEY } from '../../context/Filtering.provider';
import ProductListContext from '../../context/ProductList.context';
import SortingComponent from './Sorting.component';

/** @namespace Product/Component/Sorting/Container/SortingContainer */
export class SortingContainer extends HigherOrderComponent {
    // TODO: retrive options, add select handlers
    onSortingChangeChange(e) {
        const {
            [FilteringContext.displayName]: {
                setProperty
            }
        } = this.props;

        setProperty(SORT_PARAM_KEY, e.target.value);
    }

    getSortingOptions() {
        const {
            [ProductListContext.displayName]: {
                sortings
            }
        } = this.props;

        return sortings
            .sort(({ priority: A }, { priority: B }) => B - A)
            .map((sorting) => ({
                label: sorting.translated.label,
                value: sorting.key
            }));
    }

    getCurrentSort() {
        const {
            [FilteringContext.displayName]: {
                selectedFilters: {
                    [SORT_PARAM_KEY]: currentSort
                }
            }
        } = this.props;

        return currentSort;
    }

    containerFunctions = {
        onSortingChangeChange: this.onSortingChangeChange.bind(this)
    };

    containerProps = () => ({
        sortingOptions: this.getSortingOptions(),
        currentSort: this.getCurrentSort()
    });
}

export default withHOC(
    withContexts(
        SortingContainer,
        [
            FilteringContext,
            ProductListContext
        ]
    ),
    SortingComponent
);
