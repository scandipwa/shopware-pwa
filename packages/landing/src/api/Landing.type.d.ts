/* eslint-disable no-use-before-define */
import { CmsPage } from '@scandipwa/category/src/api/Page.type';

interface ForeignKeys extends Record<string, unknown> {
  apiAlias: string;
}

interface Extensions {
  foreignKeys: ForeignKeys;
  swagCmsExtensionsScrollNavigationPageSettings?: SwagCmsExtensionsScrollNavigationPageSettings;
}

interface SwagCmsExtensionsScrollNavigationPageSettings {
  _uniqueIdentifier: string;
  versionId?: string;
  translated: string[];
  createdAt: string;
  updatedAt?: string;
  extensions: Extensions;
  id: string;
  active: boolean;
  duration: number;
  easing: string;
  bouncy: boolean;
  easingDegree: number;
  cmsPageId?: string;
  cmsPageVersionId: string;
  cmsPage?: CmsPage;
  apiAlias: string;
}

export interface Landing {
  active: boolean
  translations?: string
  cmsPageId: string
  cmsPage: CmsPage
  name: string
  metaTitle?: string
  metaDescription?: string
  keywords?: string
  url: string
  customFields?: string
  slotConfig: string[]
  seoUrls?: string
  _uniqueIdentifier: string
  versionId: string
  translated: Translated7
  createdAt: string
  updatedAt: string
  extensions: Extensions
  id: string
  cmsPageVersionId: string
  apiAlias: string
}
