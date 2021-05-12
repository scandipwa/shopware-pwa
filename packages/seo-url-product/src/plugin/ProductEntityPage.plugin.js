import ProductPage from '../component/ProductPage';
import { PRODUCT_ENTITY_TYPE } from '../component/ProductPage/ProductPage.config';

const addProductPage = (member) => {
    // eslint-disable-next-line no-param-reassign
    member[PRODUCT_ENTITY_TYPE] = ProductPage;
    return member;
};

export default {
    'SeoUrl/Component/SeoUrlEntityPage/Component/SeoUrlEntityPageComponent': {
        'member-property': {
            routeNameComponentMap: addProductPage
        }
    }
};
