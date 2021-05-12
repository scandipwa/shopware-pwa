import { getLandingById } from '@scandipwa/landing/src/api/Landing.request';

import { LANDING_ENTITY_TYPE } from '../component/LandingPage/LandingPage.config';

const addCategoryEntityProps = async (args, callback) => {
    const { props: originalProps } = await callback(...args);

    if (
        !originalProps.seoUrl
        || originalProps.seoUrl.routeName !== LANDING_ENTITY_TYPE
    ) {
        return { props: originalProps };
    }

    const landing = await getLandingById(originalProps.seoUrl.foreignKey);

    return {
        props: {
            ...originalProps,
            landing
        }
    };
};

export default {
    'Pages/[[...seoPathInfo]]/getServerSideProps': {
        function: {
            implementation: addCategoryEntityProps,
            position: 10000
        }
    }
};
