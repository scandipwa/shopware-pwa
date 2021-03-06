import { getSeoUrlBySeoPathInfo } from '../api/SeoUrl.request';
import NotFoundPage from '../component/NotFoundPage';
import SeoUrlEntityPage from '../component/SeoUrlEntityPage';

const addRenderSeoUrlEntityPage = ([props]) => {
    const {
        seoUrl: {
            routeName
        } = {},
        isNotFound
    } = props;

    if (isNotFound) {
        return <NotFoundPage />;
    }

    return (
        <SeoUrlEntityPage
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

const addGetSeoUrlProps = async (args, callback) => {
    const [{ res, resolvedUrl }] = args;

    const seoPathInfo = resolvedUrl.substring(1).split('?')[0];

    const seoUrl = await getSeoUrlConsideringSlashes(seoPathInfo);

    if (!seoUrl) {
        // eslint-disable-next-line no-param-reassign
        res.statusCode = 404;
        // res.end();
        // TODO: handle the error if seoUrl is null
        return { props: { isNotFound: true } };
    }

    const { props } = await callback(...args);

    return { props: { ...props, seoUrl } };
};

export default {
    'Pages/[[...seoPathInfo]]/Page': {
        function: addRenderSeoUrlEntityPage
    },
    'Pages/[[...seoPathInfo]]/getServerSideProps': {
        function: addGetSeoUrlProps
    }
};
