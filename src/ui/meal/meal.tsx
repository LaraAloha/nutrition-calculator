import React from 'react'
import NumberFormat, { NumberFormatValues } from 'react-number-format'
import { allowedLimits } from '../../helpers/allowed-limits'
import { formatThousands } from '../../helpers/format-thousands'
import { NBSP } from '../../store/constants'
import './meal.css'

type Props = {
    changeValue: (value: NumberFormatValues, mealName: string) => void
    maxLimit: number
    nutritionValues: number
    mealName: string
}

export default class Meal extends React.Component<Props, {}> {
    public render(): React.ReactElement {
        const {
            changeValue,
            maxLimit,
            nutritionValues,
            mealName
        } = this.props
        const changeMeal =
            (value: NumberFormatValues) =>
                changeValue(value, mealName)
        return (
            <div className="root">
                <NumberFormat
                    className="field_meal"
                    thousandSeparator={NBSP}
                    allowNegative={false}
                    value={formatThousands(nutritionValues)}
                    // isAllowed={allowedLimits(maxLimit)}
                    onValueChange={changeMeal}
                />
            </div>

        )
    }

}
