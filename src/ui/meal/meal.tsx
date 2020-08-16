import React from 'react'
import NumberFormat, { NumberFormatValues } from 'react-number-format'
import { allowedLimits } from '../../helpers/allowed-limits'
import { formatThousands } from '../../helpers/format-thousands'
import { NBSP } from '../../store/constants'
import './meal.css'
import { MealData } from '../../store/types';

type Props = {
    changeValue: (value: NumberFormatValues, fieldName: string) => void
    maxLimit: number
    nutritionValues: number
    fieldData: MealData
    suffix: string
}

export default class Meal extends React.Component<Props, {}> {

    public render(): React.ReactElement {
        const {
            changeValue,
            maxLimit,
            nutritionValues,
            fieldData,
            suffix
        } = this.props
        const changeMeal =
            (value: NumberFormatValues) =>
                changeValue(value, fieldData.name)
        return (
            <div className="root_meal">
                <span className="text">{fieldData.name}</span>
                <NumberFormat
                    className="field_meal"
                    thousandSeparator={NBSP}
                    allowNegative={false}
                    value={formatThousands(nutritionValues)}
                    // isAllowed={allowedLimits(maxLimit)}
                    onValueChange={changeMeal}
                    suffix={NBSP + suffix}
                />
                <div className="remove"></div>
            </div>

        )
    }

}
