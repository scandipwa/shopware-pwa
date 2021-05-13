/* eslint-disable max-lines */
import { CmsPage } from '@scandipwa/cms/src/api/Cms.type';
import {
    ApiBase,
    ApiBaseWithDate,
    CustomFieldsBase,
    Extensions,
    TranslatableFields,
    TranslatedFields
} from '@scandipwa/types';

export interface Price {
  net: number
  gross: number
  linked: boolean
  listPrice?: string
  currencyId: string
}

export interface CheapestPrice {
  parent_id: string
  variant_id: string
  rule_id?: string
  is_ranged: string
  price: Record<string, Price>
  min_purchase: string
  unit_id?: string
  purchase_unit?: string
  reference_unit?: string
}

export interface CheapestPriceContainer {
  value: Record<string, CheapestPrice>
  apiAlias: string
}

export interface Thumbnail extends ApiBaseWithDate {
  width: number
  height: number
  url: string
  mediaId: string
  customFields?: string
  _uniqueIdentifier: string
  versionId?: string
  extensions: Extensions
  id: string
}

export interface TaxRule {
  taxRate: number
  percentage: number
  apiAlias: string
}

export interface CalculatedTax {
  tax: number
  taxRate: number
  price: number
  apiAlias: string
}

export interface CalculatedCheapestPrice {
  hasRange: boolean
  unitPrice: number
  quantity: number
  totalPrice: number
  calculatedTaxes: CalculatedTax[]
  taxRules: TaxRule[]
  referencePrice?: string
  listPrice?: string
  apiAlias: string
}

export interface CalculatedPrice extends ApiBase {
  unitPrice: number
  quantity: number
  totalPrice: number
  calculatedTaxes: CalculatedTax[]
  taxRules: TaxRule[]
  referencePrice?: string
  listPrice?: string
}

export interface DeliveryTime {
  name: string
  min: number
  max: number
  unit: string
  customFields?: string
  _uniqueIdentifier: string
  versionId?: SVGStringList
  createdAt: string
  updatedAt: string
  extensions: Extensions
  id: string
  apiAlias: string
  translated: TranslatedFields<Extract<keyof DeliveryTime, TranslatableFields>>
}

export interface Tax extends ApiBase {
  taxRate: number
  name: string
  position: number
  customFields?: string
  _uniqueIdentifier: string
  versionId?: string
  translated: string[]
  createdAt: string
  updatedAt: string
  extensions: Extensions
  id: string
}

export interface MetaData {
  type: number
  width: number
  height: number
}

export interface Media extends ApiBaseWithDate {
  id: string
  mimeType: string
  fileExtension: string
  fileSize: number
  title?: string
  metaData: MetaData
  uploadedAt?: string
  alt?: string
  url: string
  fileName: string
  translations?: string
  thumbnails: Thumbnail[]
  hasFile: boolean
  private: boolean
  customFields?: string
  _uniqueIdentifier: string
  versionId?: string
  translated: TranslatedFields<Extract<keyof Media, TranslatableFields>>
  extensions: Extensions
}

export interface Cover extends ApiBaseWithDate {
  id: string
  productId: string
  mediaId: string
  position: number
  media: Media
  customFields?: string
  _uniqueIdentifier: string
  versionId: string
  translated: string[]
  extensions: Extensions
  productVersionId: string
}

export interface SeoUrls extends ApiBaseWithDate, CustomFieldsBase {
  id: string
  salesChannelId: string
  languageId: string
  foreignKey: string
  routeName: string
  pathInfo: string
  seoPathInfo: string
  isCanonical?: boolean
  isModified?: boolean
  isDeleted?: boolean
  url?: string
}

export interface SeoCategory extends ApiBaseWithDate, CustomFieldsBase {
  parentId: string
  mediaId: string
  name: string
  breadcrumb: string[]
  path: string
  level: number
  active: boolean
  childCount: number
  displayNestedProducts: boolean
  parent?: SeoCategory
  children?: SeoCategory
  translations?: string[]
  media?: Media
  afterCategoryId: string
  cmsPageId: string
  cmsPage?: CmsPage
  linkType?: string
  linkNewTab?: string
  internalLink?: string
  externalLink?: string
  visible: boolean
  type: string
  productAssignmentType: string
  description: string
  metaTitle?: string
  metaDescription?: string
  keywords?: string
  seoUrls?: string
  _uniqueIdentifier: string
  versionId: string
  translated: TranslatedFields<SeoCategory>
  extensions: Extensions
  id: string
  parentVersionId: string
  afterCategoryVersionId: string
  cmsPageVersionId: string
}
export interface Product extends ApiBaseWithDate {
  calculatedPrices: string[]
  calculatedPrice: CalculatedPrice
  sortedProperties: string[]
  calculatedCheapestPrice: CalculatedCheapestPrice
  isNew: boolean
  calculatedMaxPurchase: number
  seoCategory?: SeoCategory
  parentId?: string
  childCount: number
  taxId: string
  manufacturerId: string
  unitId?: string
  active: boolean
  displayGroup: string
  manufacturerNumber?: string
  ean?: string
  sales: number
  productNumber: string
  stock: number
  availableStock: number
  available: boolean
  deliveryTimeId: string
  deliveryTime: DeliveryTime
  restockTime: number
  isCloseout: boolean
  purchaseSteps: number
  maxPurchase?: string
  minPurchase: number
  purchaseUnit?: string
  referenceUnit?: string
  shippingFree: boolean
  markAsTopseller: boolean
  weight?: string
  width?: string
  height?: string
  length?: string
  releaseDate?: string
  categoryTree: string[]
  optionIds?: string
  propertyIds?: string
  name: string
  keywords?: string
  description: string
  metaDescription?: string
  metaTitle: string
  packUnit?: string
  packUnitPlural?: string
  mainVariantId?: string
  tax: Tax
  manufacturer?: string
  unit?: string
  coverId: string
  cover: Cover
  parent?: string
  children?: string
  cmsPageId: string
  cmsPage?: CmsPage
  translations?: string
  categories?: string
  properties?: string
  options?: string
  configuratorSettings?: string
  categoriesRo?: string
  blacklistIds?: string
  whitelistIds?: string
  customFields: string[]
  productReviews?: string
  ratingAverage?: string
  mainCategories?: string
  seoUrls?: SeoUrls
  crossSellings?: string
  canonicalProductId?: string
  canonicalProduct?: string
  cheapestPriceContainer: CheapestPriceContainer
  streams?: string
  _uniqueIdentifier: string
  versionId: string
  translated: TranslatedFields<Product>
  extensions: Extensions
  id: string
  parentVersionId: string
  productManufacturerVersionId: string
  productMediaVersionId?: string
  cmsPageVersionId: string
}

export interface ProductsResult {
  total: number
  aggregations: Record<string, unknown>[]
  page: number
  limit: number
  entity: string
  elements: Product[]
}
