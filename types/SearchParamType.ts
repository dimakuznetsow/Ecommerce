type Params = {
    id: string,
}

type SearchParams = {
    name: string
    unit_amount: number | null
    image: string
    quantity?: number | 1
    description: string | null
    features: string
}

export type SearchParamType = {
    params: Params,
    searchParams: SearchParams
}