import Registration from '../component/RegistrationForm';

const addRegisterPage = ([props]) => (
    // eslint-disable-next-line @scandipwa/scandipwa-guidelines/jsx-no-props-destruction
    <Registration { ...props } />
);

export default {
    'Pages/register/Page': {
        function: addRegisterPage
    }
};
