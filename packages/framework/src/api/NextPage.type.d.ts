import { ProductContextType } from '@scandipwa/product/src/api/Product.type';
import { SeoUrl } from '@scandipwa/seo-url/src/api/SeoUrl.type';

export interface NextPageContextType {
    product?: ProductContextType
    seoUrl?: SeoUrl
}
