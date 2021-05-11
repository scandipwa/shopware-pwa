import { getSeoUrlBySeoPathInfo } from '../api/SeoUrl.request';
import NotFoundPage from '../component/NotFoundPage';
import SeoUrlEntityPage from '../component/SeoUrlEntityPage';

const addRenderSeoUrlEntityPage = ([{
    seoUrl: {
        routeName,
        foreignKey
    } = {},
    isNotFound
}]) => {
    if (isNotFound) {
        return <NotFoundPage />;
    }

    return (
    <SeoUrlEntityPage
      foreignKey={ foreignKey }
      routeName={ routeName }
    />
    );
};

const addGetSeoUrlProps = async ([{ res, resolvedUrl }]) => {
    const seoPathInfo = resolvedUrl.substring(1);
    const seoUrl = await getSeoUrlBySeoPathInfo(seoPathInfo);

    if (!seoUrl) {
        // eslint-disable-next-line no-param-reassign
        res.statusCode = 404;
        // res.end();
        // TODO: handle the error if seoUrl is null
        return { props: { isNotFound: true } };
    }

    return { props: { seoUrl } };
};

export default {
    'Pages/[[...seoPathInfo]]/Page': {
        function: addRenderSeoUrlEntityPage
    },
    'Pages/[[...seoPathInfo]]/getServerSideProps': {
        function: addGetSeoUrlProps
    }
};
