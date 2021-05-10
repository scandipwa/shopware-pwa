import Layout from '../component/Layout';

const LAYOUT_POSITION = -1;
const LAYOUT_KEY = 'LAYOUT_KEY';

const renderLayout = (member) => {
    member.addItem(
        ({ children }) => (
            <Layout>
                { children }
            </Layout>
        ),
        LAYOUT_KEY,
        LAYOUT_POSITION
    );

    return member;
};

export default {
    'Sweet/Framework/Component/App/Component/AppComponent': {
        'member-property': {
            contextProviders: renderLayout
        }
    }
};
