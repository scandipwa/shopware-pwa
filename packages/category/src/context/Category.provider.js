/* eslint-disable react/destructuring-assignment */
import PropTypes from 'prop-types';
import { PureComponent } from 'react';

import CategoryPageContext from './CategoryPage.context';

/** @namespace Category/Context/Category/Provider/CategoryProvider */
export class CategoryProvider extends PureComponent {
    static propTypes = {
        children: PropTypes.node.isRequired,
        page: PropTypes.shape({}).isRequired
    };

    getContextValue() {
        const { page } = this.props;
        return { page };
    }

    render() {
        const { children } = this.props;

        return (
            <CategoryPageContext.Provider value={ this.getContextValue() }>
                { children }
            </CategoryPageContext.Provider>
        );
    }
}

export default CategoryProvider;
