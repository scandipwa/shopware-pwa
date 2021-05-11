import CategoryPage from '../component/CategoryPage';
import { CATEGORY_ENTITY_TYPE } from '../component/CategoryPage/CategoryPage.config';

const addCategoryPage = (member) => {
    // eslint-disable-next-line no-param-reassign
    member[CATEGORY_ENTITY_TYPE] = CategoryPage;
    return member;
};

export default {
    'SeoUrl/Component/SeoUrlEntityPage/Component/SeoUrlEntityPageComponent': {
        'member-property': {
            routeNameComponentMap: addCategoryPage
        }
    }
};
