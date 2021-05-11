/* eslint-disable react/destructuring-assignment */
import PropTypes from 'prop-types';

import { ContextProvider, withProvider } from '../../../framework/src/util/Context';
import { DEFAULT_LIMIT } from '../api/Product.request';
import FilteringContext from './Filtering.context';

/** @namespace Product/Context/Filtering/Provider/FilteringProvider */
export class FilteringProvider extends ContextProvider {
    static propTypes = {
        ...ContextProvider.propTypes,
        filters: PropTypes.shape({}).isRequired
    };

    state = {
        filter: [],
        postFilter: [],
        sort: [],
        aggregations: [],
        limit: DEFAULT_LIMIT
    };

    onHistoryChange() {
        const searchParams = new URLSearchParams(window.location.search);

        this.setState({

        });
    }

    componentDidMount() {

    }

    getContextValue() {
        const { filters } = this.props;
        return {
            ...super.getContextValue(),
            filters
        };
    }
}

export default withProvider(FilteringProvider, FilteringContext.Provider);
