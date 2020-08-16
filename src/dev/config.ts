import { Config } from '../store/types'

export const config: Config = {
    limits: {
        meal: 5000,
    },
    defaultValues: {
        breakfast: 700,
        lunch: 600,
        dinner: 1200
    },
    uiText: {
        suffix: 'kcal',
        meals: [
            {
                name: 'breakfast',
                description: '',
                comments: ''
            },
            {
                name: 'lunch',
                description: '',
                comments: ''
            },
            {
                name: 'dinner',
                description: '',
                comments: ''
            },
        ]
    }
}