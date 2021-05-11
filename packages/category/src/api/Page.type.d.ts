/* eslint-disable no-use-before-define */
import { CategoryType } from './Category.type';

export interface Thumbnail {
    id: string
    width: number
    height: number
    url: string
    mediaId: string
    customFields?: Record<string, unknown>
    createdAt: string
    updatedAt?: string
}

export interface Media {
    id: string
    mimeType: string
    fileExtension: string
    fileSize: number
    title?: string
    metaData: {
        type: number
        width: number
        height: number
    }
    updatedAt: string
    alt?: string
    url: string
    fileName?: string
    translations?: Record<string, unknown>
    thumbnails: Thumbnail[]
    hasFile: boolean
    private: boolean
    customFields?: Record<string, unknown>
    translated: Record<string, { value?: string, source: string }>
    createdAt: string
    updatedAt?: string
}

export interface CmsMedia {
    media: Media
    mediaId: string
    url?: string
    newTab?: boolean
    apiAlias: string
}

export interface SlotBase {
    slot: string
    block?: CmsBlock
    blockId: string
    config: Record<string, { value?: string, source: string }>
    fieldConfig: {
        name: string
        source: string
        value?: string
        apiAlias: string
    }[]
    translations?: string[]
    customFields?: Record<string, unknown>
}

export interface SlotImage extends SlotBase {
    type: 'image'
    data: CmsMedia
}

export interface CmsText {
    content: string
}

export interface SlotText extends SlotBase {
    type: 'text'
    data: CmsText
}

export type CmsSlot = SlotImage | SlotText

export interface CmsBlock {
    type: 'string'
    slots: CmsSlot[]
    sectionId: string
    position: number
    name?: string
    // .. style props
    sectionPosition: string
    translated: string[]
    createdAt: string
    updatedAt: string
}

export interface CmsSection {
    position: number
    type: string
    name?: string
    blocks: CmsBlock[]
    pageId: string
    page?: CmsPage
    // ... style props

    translated: string[]
    createdAt: string
    updatedAt: string
}

export interface CmsPage {
    id: string
    name: string
    type: string
    entity?: string
    sections: CmsSection[]
    translations?: Record<string, unknown>
    products?: Record<string, unknown>
    translated: Record<string, unknown>
    createdAt: string
    updatedAt: string
}

export interface PwaPageResult {
    category: CategoryType
    cmsPage: CmsPage
    breadcrumbs: string[]
    resourceType: string
    resourceIdentifier: string
    canonicalPathInfo: string
    apiAlias: string
}
