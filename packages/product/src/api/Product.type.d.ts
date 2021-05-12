/* eslint-disable max-lines */

export interface ForeignKeys {
  apiAlias: string
  swagCustomizedProductsTemplateId?: string
  swagCustomizedProductsTemplateVersionId?: string
}

export interface Extensions3 {
  foreignKeys: ForeignKeys
  swagCustomizedProductsTemplate?: string
}

export interface Translated3 {
  metaDescription?: string
  name: string
  keywords?: string
  description: string
  metaTitle: string
  packUnit?: string
  packUnitPlural?: string
  customFields: string[]
}

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
export interface Translated2 {
  alt?: string
  title?: string
  customFields: string[]
}

export interface Internalmappingstorage {
  apiAlias: string
}

export interface Extensions2 {
  foreignKeys: Internalmappingstorage
}
export interface Thumbnail {
  width: number
  height: number
  url: string
  mediaId: string
  customFields?: string
  _uniqueIdentifier: string
  versionId?: string
  translated: string[]
  createdAt: string
  updatedAt: string
  extensions: Extensions2
  id: string
  apiAlias: string
}

export interface Extensions {
  internal_mapping_storage: Internalmappingstorage
  foreignKeys: Internalmappingstorage
}

export interface Translated {
  name: string
  customFields: string[]
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

export interface CalculatedPrice {
  unitPrice: number
  quantity: number
  totalPrice: number
  calculatedTaxes: CalculatedTax[]
  taxRules: TaxRule[]
  referencePrice?: string
  listPrice?: string
  apiAlias: string
}

export interface DeliveryTime {
  name: string
  min: number
  max: number
  unit: string
  customFields?: string
  _uniqueIdentifier: string
  versionId?: string
  translated: Translated
  createdAt: string
  updatedAt: string
  extensions: Extensions
  id: string
  apiAlias: string
}
export interface Tax {
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
  apiAlias: string
}

export interface MetaData {
  type: number
  width: number
  height: number
}

export interface Media {
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
  translated: Translated2
  createdAt: string
  updatedAt: string
  extensions: Extensions
  id: string
  apiAlias: string
}

export interface Cover {
  productId: string
  mediaId: string
  position: number
  media: Media
  customFields?: string
  _uniqueIdentifier: string
  versionId: string
  translated: string[]
  createdAt: string
  updatedAt?: string
  extensions: Extensions2
  id: string
  productVersionId: string
  apiAlias: string
}

export interface Product {
  calculatedPrices: string[]
  calculatedPrice: CalculatedPrice
  sortedProperties: string[]
  calculatedCheapestPrice: CalculatedCheapestPrice
  isNew: boolean
  calculatedMaxPurchase: number
  seoCategory?: string
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
  cover: Cover
  parent?: string
  children?: string
  media?: string
  cmsPageId?: string
  cmsPage?: string
  translations?: string
  categories?: string
  properties?: string
  options?: string
  configuratorSettings?: string
  categoriesRo?: string
  coverId: string
  blacklistIds?: string
  whitelistIds?: string
  customFields: string[]
  productReviews?: string
  ratingAverage?: string
  mainCategories?: string
  seoUrls?: string
  crossSellings?: string
  canonicalProductId?: string
  canonicalProduct?: string
  cheapestPriceContainer: CheapestPriceContainer
  streams?: string
  _uniqueIdentifier: string
  versionId: string
  translated: Translated3
  createdAt: string
  updatedAt?: string
  extensions: Extensions3
  id: string
  parentVersionId: string
  productManufacturerVersionId: string
  productMediaVersionId?: string
  cmsPageVersionId: string
  apiAlias: string
}

export interface ProductsResult {
  total: number
  aggregations: Record<string, unknown>[]
  page: number
  limit: number
  entity: string
  elements: Product[]
}
