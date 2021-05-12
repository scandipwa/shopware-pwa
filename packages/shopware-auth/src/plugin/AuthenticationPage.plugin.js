import AuthenticationPage from '../component/AuthenticationPage';

const addAuthPage = ([props]) => (
    // eslint-disable-next-line @scandipwa/scandipwa-guidelines/jsx-no-props-destruction
    <AuthenticationPage { ...props } />
);

export default {
    'Pages/login/Page': {
        function: addAuthPage
    }
};
