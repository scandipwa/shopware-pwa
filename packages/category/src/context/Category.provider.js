/* eslint-disable react/destructuring-assignment */
import PropTypes from 'prop-types';

import { ContextProvider, withProvider } from '../../../framework/src/util/Context';
import CategoryContext from './Category.context';

/** @namespace Category/Context/Category/Provider/CategoryProvider */
export class CategoryProvider extends ContextProvider {
    static propTypes = {
        ...ContextProvider.propTypes,
        category: PropTypes.shape({}).isRequired
    };

    getContextValue() {
        const { category } = this.props;
        return {
            ...super.getContextValue(),
            category
        };
    }
}

export default withProvider(CategoryProvider, CategoryContext.Provider);
