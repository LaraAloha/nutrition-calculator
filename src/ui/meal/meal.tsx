import React from 'react'
import NumberFormat, { NumberFormatValues } from 'react-number-format'
import { allowedLimits } from '../../helpers/allowed-limits'
import { formatThousands } from '../../helpers/format-thousands'
import { NBSP } from '../../store/constants'
import './meal.css'
import { DefaultValues } from '../../store/types'

type Props = {
    changeValue: (value: NumberFormatValues, mealName: string) => void
    maxLimit: number
    suffix: string
    nutritionValues: number  // todo NumberFormatValues -> num
    mealName: string
}

export default class Meal extends React.Component<Props, {}> {
    public render(): React.ReactElement {
        const {
            changeValue,
            maxLimit,
            suffix,
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
                    value={formatThousands(nutritionValues) + suffix}
                    isAllowed={allowedLimits(maxLimit)}
                    onValueChange={changeMeal}
                />
            </div>

        )
    }

}
