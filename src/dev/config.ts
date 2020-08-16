import { Config } from '../store/types'

export const config: Config = {
    limits: {
        meal: 5000,
    },
    defaultValues: {
        meals: [
            {
                name: 'breakfast',
                description: '',
                defaultValue: 700,
                comments: ''
            },
            {
                name: 'lunch',
                description: '',
                defaultValue: 600,
                comments: ''
            },
            {
                name: 'dinner',
                description: '',
                defaultValue: 1200,
                comments: ''
            },
        ],
    },
    uiText: {
        suffix: 'kcal',
    }
}