export interface Category {
    id: string
    parentId?: string
    mediaId?: string
    name: string
    breadcrumb: string[]
    path?: string
    level: number
    active: boolean
    childCount: number
    displayNestedProducts: boolean
    parent?: CategoryType
    children?: CategoryType
    translations?: string
    media: Record<string, unknown> // separate type https://shopware.stoplight.io/docs/store-api/storeapi.json/paths/~1category/post
    afterCategoryId?: string
    customFields: Record<string, unknown>
    cmsPageId: string
    cmsPage?: string
    externalLink?: string
    visible: boolean
    type: string
    productAssignmentType: string
    description?: string
    metaTitle?: string
    metaDescription?: string
    keywords?: string
    seoUrls?: Record<string, unknown>
    versionId: string
    translated: {
        breadcrumb: string[]
        name: string
        customFields: []
        slotConfig?: string
        externalLink?: string
        description?: string
        metaTitle?: string
        metaDescription?: string
        keywords?: string[]
    }
    createdAt: string
    updatedAt: null
    extensions: Record<string, unknown>
    parentVersionId?: string
    afterCategoryVersionId?: string
    apiAlias: string
}
