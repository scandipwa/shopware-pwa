import { HigherOrderComponent, withHOC } from '@scandipwa/framework/src/util/HOC';

import CategoryProvider from '../../context/Category.provider';
import CategoryComponent from './Category.component';

/** @namespace Category/Component/Category/Container/CategoryContainer */
export class CategoryContainer extends HigherOrderComponent {
    containerProps = () => {
        const { category } = this.props;

        return { category };
    };

    render() {
        const { category } = this.props;

        return (
            <CategoryProvider value={ category }>
                { super.render() }
            </CategoryProvider>
        );
    }
}

export default withHOC(CategoryContainer, CategoryComponent);
