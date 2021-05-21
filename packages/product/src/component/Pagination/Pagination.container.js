import { withContexts } from '@scandipwa/framework/src/util/Context';
import { HigherOrderComponent, withHOC } from '@scandipwa/framework/src/util/HOC';

import FilteringContext from '../../context/Filtering.context';
import { PAGE_PARAM_KEY } from '../../context/Filtering.provider';
import ProductListContext from '../../context/ProductList.context';
import PaginationComponent from './Pagination.component';

/** @namespace Product/Component/Pagination/Container/PaginationContainer */
export class PaginationContainer extends HigherOrderComponent {
    onPageChangeChange(_, page) {
        const {
            [FilteringContext.displayName]: {
                setProperty
            }
        } = this.props;

        setProperty(PAGE_PARAM_KEY, page);
    }

    containerProps = () => {
        const {
            [FilteringContext.displayName]: {
                selectedFilters: {
                    page
                }
            },
            [ProductListContext.displayName]: {
                totalPages
            }
        } = this.props;

        return {
            total: totalPages,
            current: page
        };
    };

    containerFunctions = ({
        onChange: this.onPageChangeChange.bind(this)
    });
}

export default withHOC(
    withContexts(
        PaginationContainer,
        [
            FilteringContext,
            ProductListContext
        ]
    ),
    PaginationComponent
);
