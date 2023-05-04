export type ProductType = {
    id: string
    name: string
    unit_amount: number | null
    image: string
    quantity?: number | 1
    description: string | null   
    metadata: MetaDataType
}

type MetaDataType = {
    features: string
}