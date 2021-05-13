import AuthenticationPage from '../component/AuthenticationPage';

const addAuthPage = () => (
    <AuthenticationPage />
);

export default {
    'Pages/login/Page': {
        function: addAuthPage
    }
};
