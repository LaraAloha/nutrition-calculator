export type Config = {
    limits: {
        meal: number
    }
    defaultValues: DefaultValues
    uiText: Uitext
}
export type Uitext = {
    suffix: string
    meals: MealData[]
}

export type MealData = {
    name: string
    description: string
    comments: string
}

export type DefaultValues = {
    breakfast: number
    lunch: number
    dinner: number
}

export type Indexable = {
    [key: string]: any
}
