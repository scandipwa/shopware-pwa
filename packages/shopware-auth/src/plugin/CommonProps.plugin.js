import { fetchCountries, fetchSalutations } from '../api/Config.request';

const addCountries = async (args, callback) => {
    const { props } = await callback(...args);

    const countries = await fetchCountries();

    return {
        props: {
            ...props,
            countries
        }
    };
};

const addSalutations = async (args, callback) => {
    const { props } = await callback(...args);

    const salutations = await fetchSalutations();

    return {
        props: {
            ...props,
            salutations
        }
    };
};

export default {
    'Pages/getCommonServerSideProps': {
        function: [addCountries, addSalutations]
    }
};
