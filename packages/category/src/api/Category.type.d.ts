import { CmsPage, Media } from './Page.type';

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
    parent?: Category
    children?: Category
    translations?: string
    media?: Media
    afterCategoryId?: string
    customFields: Record<string, unknown>
    cmsPageId: string
    cmsPage?: CmsPage
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
    apiAlias: 'category'
}
