import { withContexts } from '@scandipwa/framework/src/util/Context';
import { HigherOrderComponent, withHOC } from '@scandipwa/framework/src/util/HOC';

import FilteringContext from '../../context/Filtering.context';
import { SORT_PARAM_KEY } from '../../context/Filtering.provider';
import ProductListContext from '../../context/ProductList.context';
import SortingComponent from './Sorting.component';

/** @namespace Product/Component/Sorting/Container/SortingContainer */
export class SortingContainer extends HigherOrderComponent {
    // TODO: retrive options, add select handlers
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
