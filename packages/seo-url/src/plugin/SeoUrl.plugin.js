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

const getSeoUrlConsideringSlashes = async (seoPathInfo) => {
    const currentUrl = await getSeoUrlBySeoPathInfo(seoPathInfo);

    if (currentUrl) {
        return currentUrl;
    }

    if (seoPathInfo.endsWith('/')) {
        // try without a slash
        return getSeoUrlBySeoPathInfo(
            seoPathInfo.substring(0, seoPathInfo.length() - 1)
        );
    }

    // try with a slash
    return getSeoUrlBySeoPathInfo(
        `${seoPathInfo }/`
    );
};

const addGetSeoUrlProps = async ([{ res, resolvedUrl }]) => {
    const seoPathInfo = resolvedUrl.substring(1);

    const seoUrl = await getSeoUrlConsideringSlashes(seoPathInfo);

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
