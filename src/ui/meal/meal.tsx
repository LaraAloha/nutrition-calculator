import React from 'react'
import NumberFormat, { NumberFormatValues } from 'react-number-format'
import { allowedLimits } from '../../helpers/allowed-limits'
import { formatThousands } from '../../helpers/format-thousands'
import { NBSP } from '../../store/constants'
import './meal.css'
import { MealData, MealType } from '../../store/types';

type Props = {
    changeValue: (value: NumberFormatValues, fieldName: string) => void
    onRemove: (fieldName: string) => void
    maxLimit: number
    currentNutritionData: MealType
    fieldData: MealData
    suffix: string
}

export default class Meal extends React.Component<Props, {}> {
    public render(): React.ReactElement {
        const {
            changeValue,
            maxLimit,
            currentNutritionData,
            fieldData,
            suffix,
            onRemove
        } = this.props
        const fieldName = fieldData.name
        const changeMeal = (fieldName: string) => (
            value: NumberFormatValues,
        ) => changeValue(value, fieldName)

        const remove = () => onRemove(fieldData.name)
        return (
            <div key={fieldData.name} className="root_meal">
                <span className="text">{fieldData.name}</span>
                <NumberFormat
                    className="field_meal"
                    thousandSeparator={NBSP}
                    allowNegative={false}
                    value={formatThousands(currentNutritionData.value)}
                    isAllowed={allowedLimits(maxLimit)}
                    onValueChange={changeMeal(fieldName)}
                    suffix={NBSP + suffix}
                />
                <button onClick={remove} className="remove"></button>
            </div>

        )
    }

}
