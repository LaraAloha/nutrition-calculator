export type Config = {
    limits: {
        meal: number
    }
    defaultValues: {
        meals: MealData[]
    }
    uiText: UiText
}
export type UiText = {
    suffix: string
    total: string
}

export type MealData = {
    name: string
    description: string
    comments: string
    defaultValue: number
}

export type Indexable = {
    [key: string]: any
}

export type FieldType = {
    name: string
    value: number
    isActive: boolean
}
  