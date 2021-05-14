import {
    ApiBase,
    ApiBaseWithDate,
    CustomFieldsBase,
    Extensions
} from '@scandipwa/types';

export interface SeoUrl extends ApiBaseWithDate, CustomFieldsBase {
  id: string;
  salesChannelId: string;
  languageId: string;
  routeName: string;
  foreignKey: string;
  pathInfo: string;
  seoPathInfo: string;
  isCanonical: boolean;
  isModified: boolean;
  isDeleted: boolean;
  isValid?: boolean;
  url?: string;
  error?: any; // TODO add error type
  _uniqueIdentifier: string;
  versionId?: string;
  extensions: Extensions;
}

export interface SeoUrlResult extends ApiBase {
    entity: string;
    total: number;
    aggregations: Aggregations[];
    page: number;
    limit?: number;
    elements: SeoUrl[];
}
