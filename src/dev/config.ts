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
                defaultValue: 500,
                comments: ''
            },
            {
                name: 'lunch',
                description: '',
                defaultValue: 500,
                comments: ''
            },
            {
                name: 'dinner',
                description: '',
                defaultValue: 1000,
                comments: ''
            },
        ],
    },
    uiText: {
        suffix: 'kcal',
        total: 'Total consumption: ',
    }
}