export interface ApiBase {
    apiAlias: string
  }

export interface ApiBaseWithDate extends ApiBase {
    createdAt: string
    updatedAt?: string
  }

export interface CustomFieldsBase {
    customFields?: string[]
  }

export type TranslatableFields = 'fileName' |
    'name' |
    'title' |
    'alt' |
    'shortName' |
    'description' |
    'keywords' |
    'metaTitle' |
    'metaDescription' |
    'packUnitPlural' |
    'packUnit' |
    'linkNewTab' |
    'linkType' |
    'internalLink' |
    'externalLink' |
    'breadcrumb'

export interface ForeignKeys extends ApiBase {
    swagCustomizedProductsTemplateId?: string
    swagCustomizedProductsTemplateVersionId?: string
    swagCustomizedProductsTemplate?: string
  }

export type TranslatedFields<T> = CustomFieldsBase & {
  [P in Extract<keyof T, TranslatableFields>]?: T[P]
}

export interface Extensions {
  internal_mapping_storage: ApiBase
  foreignKeys: ForeignKeys
}
