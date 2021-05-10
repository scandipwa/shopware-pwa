const addRenderCmsPage = ([props]) => (
    'test page...'
);

const addGetCmsServerSideProps = ([{ resolvedUrl }]) => {
    const path = resolvedUrl.substring(2);
    // request CMS page
    return { props: {} };
};

export default {
    'Pages/p/[...handle]/Page': {
        function: addRenderCmsPage
    },
    'Pages/p/[...handle]/getServerSideProps': {
        function: addGetCmsServerSideProps
    }
};
