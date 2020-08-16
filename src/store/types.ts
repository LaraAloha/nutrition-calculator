export type Config = {
    limits: {
        meal: number
    }
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
    breakfast: number
    lunch: number
    dinner: number
}

export type NewsDataset = {
    title: string
    htmlTitle: string
    formattedUrl: string
    snippet: string
    imageobject: { [key: string]: string }[]
}
