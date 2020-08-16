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
        titles: {
            news: 'Breaking news',
            tweets: 'what they think',
            btn: 'surf more',
        }
    }
}