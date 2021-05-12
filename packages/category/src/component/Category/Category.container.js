import { HigherOrderComponent, withHOC } from '@scandipwa/framework/src/util/HOC';

import CategoryProvider from '../../context/Category.provider';
import CategoryComponent from './Category.component';

/** @namespace Category/Component/Category/Container/CategoryContainer */
export class CategoryContainer extends HigherOrderComponent {
    render() {
        const { category } = this.props;

        return (
            <CategoryProvider category={ category }>
                { super.render() }
            </CategoryProvider>
        );
    }
}

export default withHOC(CategoryContainer, CategoryComponent);
