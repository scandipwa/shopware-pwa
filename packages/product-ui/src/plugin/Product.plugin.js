import ProductMedia from '../component/ProductMedia';
import { PRODUCT_MEDIA_KEY } from '../component/ProductMedia/ProductMedia.config';
import ProductPrice from '../component/ProductPrice';
import { PRODUCT_PRICE_KEY } from '../component/ProductPrice/ProductPrice.config';
import ProductTitle from '../component/ProductTitle';
import { PRODUCT_TITLE_KEY } from '../component/ProductTitle/ProductTitle.config';

const renderProductUi = (member) => {
    member.addItem(
        () => <ProductTitle />,
        PRODUCT_TITLE_KEY
    );

    member.addItem(
        () => <ProductMedia />,
        PRODUCT_MEDIA_KEY
    );

    member.addItem(
        () => <ProductPrice />,
        PRODUCT_PRICE_KEY
    );

    return member;
};

export default {
    'Product/Component/Product/Component/ProductComponent': {
        'member-property': {
            content: renderProductUi
        }
    }
};
