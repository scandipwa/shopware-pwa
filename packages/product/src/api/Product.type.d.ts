export interface Product {
    id: string
    active: boolean
    name: string
    parent?: Product
    children?: Product
    description: string
    metaTitle: string
    tax?: Record<string, unknown> // type this
    cover?: Record<string, unknown> // type this
    translated: Record<string, unknown>
    cmsPageVersionId: string
    productManufacturerVersionId: string
}

export interface ProductsResult {
    total: number
    aggregations: Record<string, unknown>[]
    page: number
    limit: number
    entity: string
    elements: Product[]
}
