import Category from '@scandipwa/category/src/component/Category';
import NextPageContext from '@scandipwa/framework/src/context/NextPage.context';
import { PureComponent } from 'react';

/** @namespace SeoUrlCategory/Component/CategoryPage/Component/CategoryPageComponent */
export class CategoryPageComponent extends PureComponent {
    static contextType = NextPageContext;

    render() {
        const { props: { category } } = this.context;

        return (
            <Category
              categry={ category }
            />
        );
    }
}

export default CategoryPageComponent;
