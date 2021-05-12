/* eslint-disable react/destructuring-assignment */
import { compareObjects } from '@scandipwa/framework/src/util/CompareObjects';

import { ContextProvider, withProvider } from '../../../framework/src/util/Context';
import { DEFAULT_LIMIT } from '../api/Product.request';
import FilteringContext from './Filtering.context';

/** @namespace Product/Context/Filtering/Provider/FilteringProvider */
export class FilteringProvider extends ContextProvider {
    state = {
        filter: [],
        postFilter: [],
        sort: [],
        aggregations: [],
        limit: DEFAULT_LIMIT,
        page: 1
    };

    onHistoryChange() {
        const {
            filter,
            postFilter,
            sort,
            aggregations,
            limit,
            page
        } = this.state;
        const searchParams = new URLSearchParams(window.location.search.slice(1));
        const updatedFilterState = {};

        // TODO make a convertions with a objects from parsed strings

        if (compareObjects(searchParams.get('filter'), filter).isNotEqual()) {
            updatedFilterState.filter = searchParams.get('filter');
        }

        if (compareObjects(searchParams.get('postFilter'), postFilter).isNotEqual()) {
            updatedFilterState.postFilter = searchParams.get('postFilter');
        }

        if (compareObjects(searchParams.get('sort'), sort).isNotEqual()) {
            updatedFilterState.sort = searchParams.get('sort');
        }

        if (compareObjects(searchParams.get('aggregations'), aggregations).isNotEqual()) {
            updatedFilterState.aggregations = searchParams.get('aggregations');
        }

        if (parseInt(searchParams.get('page'), 10) !== page) {
            updatedFilterState.page = parseInt(searchParams.get('page'), 10);
        }

        if (parseInt(searchParams.get('limit'), 10) !== limit) {
            updatedFilterState.limit = parseInt(searchParams.get('limit'), 10);
        }

        this.setState(updatedFilterState);
    }

    componentDidMount() {
        window.addEventListener('popstate', this.onHistoryChange);
    }

    componentWillUnmount() {
        window.removeEventListener('popstate', this.onHistoryChange);
    }

    getContextValue() {
        return {
            ...super.getContextValue(),
            ...this.state
        };
    }
}

export default withProvider(FilteringProvider, FilteringContext.Provider);
