import LandingPage from '../component/LandingPage';
import { LANDING_ENTITY_TYPE } from '../component/LandingPage/LandingPage.config';

const addLandingPage = (member) => {
    // eslint-disable-next-line no-param-reassign
    member[LANDING_ENTITY_TYPE] = LandingPage;
    return member;
};

export default {
    'SeoUrl/Component/SeoUrlEntityPage/Component/SeoUrlEntityPageComponent': {
        'member-property': {
            routeNameComponentMap: addLandingPage
        }
    }
};
