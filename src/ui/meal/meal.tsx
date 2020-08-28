import React from 'react'
import NumberFormat, { NumberFormatValues } from 'react-number-format'
import { allowedLimits } from '../../helpers/allowed-limits'
import { formatThousands } from '../../helpers/format-thousands'
import { NBSP } from '../../store/constants'
import './meal.css'
import {  FieldType } from '../../store/types';

type Props = {
    changeValue: (value: NumberFormatValues, fieldName: string) => void
    toggleField: (fieldName: string) => void
    maxLimit: number
    currentNutritionData: FieldType
    suffix: string
}

export default class Meal extends React.Component<Props, {}> {
    public render(): React.ReactElement {
        const {
            changeValue,
            maxLimit,
            currentNutritionData,
            suffix,
            toggleField
        } = this.props
        const fieldName = currentNutritionData.name
        const changeMeal = (fieldName: string) => (
            value: NumberFormatValues,
        ) => changeValue(value, fieldName)
        const remove = () => toggleField(fieldName)
        return (
            <div key={fieldName} className="root_meal">
                <div className={currentNutritionData.isActive ? "active" : "disabled"}>
                    <span className="text">{fieldName}</span>
                    <NumberFormat
                        className="field_meal"
                        thousandSeparator={NBSP}
                        allowNegative={false}
                        value={formatThousands(currentNutritionData.value)}
                        isAllowed={allowedLimits(maxLimit)}
                        onValueChange={changeMeal(fieldName)}
                        suffix={NBSP + suffix}
                    />
                </div>
                <button onClick={remove} className={currentNutritionData.isActive ? "remove" : "return"}
                ></button>

            </div>
        )
    }

}
