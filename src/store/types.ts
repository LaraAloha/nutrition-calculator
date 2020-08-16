export type Config = {
    limits: any
    defaultValues: DefaultValues
    uiText: Uitext
}
export type Uitext = {
    titles: {
        news: string
        tweets: string
        btn: string
    }
}

export type DefaultValues = {
    googleAccesKey: string
    sid: string
    searchRequest: string
    newsAmount: number
}

export type NewsDataset = {
    title: string
    htmlTitle: string
    formattedUrl: string
    snippet: string
    imageobject: { [key: string]: string }[]
}
