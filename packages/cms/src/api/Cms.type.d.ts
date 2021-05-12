/* eslint-disable no-use-before-define */

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
    type: string
    apiAlias: string
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

export interface CmsEntityInterface {
    type: string
    apiAlias: string
    translated: string[]
    createdAt: string
    updatedAt: string
    name?: string
    backgroundColor?: string,
    backgroundImage?: string
    marginBottom?: string
    marginLeft?: string
    marginRight?: string
    marginTop?: string
}

export type CmsSlot = SlotImage | SlotText

export interface CmsBlock extends CmsEntityInterface {
    slots: CmsSlot[]
    sectionId: string
    position: number
    sectionPosition: string
}

export interface CmsSection extends CmsEntityInterface {
    position: number
    blocks: CmsBlock[]
    pageId: string
    page?: CmsPage
}

export type CmsEntity = CmsSection | CmsBlock;

export interface CmsPage {
    id: string
    name: string
    type: string
    entity?: string
    sections: CmsSection[]
    translations?: Record<string, unknown>
    // products?: Record<string, unknown>
    translated: Record<string, unknown>
    createdAt: string
    updatedAt: string
}
