import React from 'react';
import { NumberFormatValues } from 'react-number-format'
import { NBSP } from '../../store/constants'
import Meal from '../meal/meal'
import { config } from '../../dev/config';
import './app.css';
import { MealData, FieldType } from '../../store/types';

type State = {
  fields: FieldType[]
}

const getDefaultDataByName = (fieldName: string): MealData => {
  return config.defaultValues.meals.find((field: MealData) => {
    return field.name === fieldName
  }) as MealData
}

const getFieldsNames = () => {
  return config.defaultValues.meals.map((field: MealData) => {
    return field.name
  })
}

const getDefaults = (): FieldType[] => {
  return getFieldsNames().map((name: string) => {
    return {
      name,
      value: getDefaultDataByName(name).defaultValue,
      isActive: true
    }
  })
}

export default class App extends React.Component<{}, State> {
  public state: State = {
    fields: getDefaults()
  }

  public render(): React.ReactElement {
    const allFields = this.state.fields.map((field: FieldType) => {
      return field.name
    })
    const sum = this.getSum()
    return (
      <div className="root">
        {this.drawAllFields(allFields)}
        <div className="result">
          {config.uiText.total + sum + NBSP + config.uiText.suffix}
        </div>
      </div>
    )
  }

  private drawAllFields = (allFields: string[]): React.ReactElement[] => {
    return allFields.map((fieldName: string) => {
      return (
        <div key={fieldName}>
          {this.renderMeal(fieldName)}
        </div>
      )
    })
  }

  private getSum = (): number => {
    return this.state.fields.reduce(
      (accumulator: number, field: FieldType): number => {
        return accumulator + field.value
      },
      0,
    )
  }

  private renderMeal = (fieldName: string): React.ReactElement | undefined => {
    const fieldIndex = this.getIndexByField(fieldName)
    if (fieldIndex !== undefined) {
      return <Meal
        changeValue={this.changeValue}
        maxLimit={config.limits.meal}
        currentNutritionData={this.state.fields[fieldIndex]}
        suffix={config.uiText.suffix}
        toggleField={this.toggleField}
      />
    }
  }


  private changeValue = (value: NumberFormatValues, fieldName: string): void => {
    const newFields = [
      ...this.state.fields
    ]
    const fieldIndex = this.getIndexByField(fieldName)
    if (fieldIndex !== undefined) {
      newFields[fieldIndex].value = value.floatValue || 0
      this.setState({
        fields: newFields
      })
    }
  }

  private toggleField = (fieldName: string): void => {
    const updatedFields = [
      ...this.state.fields
    ]
    const fieldIndex = this.getIndexByField(fieldName)
    if (fieldIndex !== undefined) {
      updatedFields[fieldIndex].isActive = !updatedFields[fieldIndex].isActive
      this.setState({
        fields: updatedFields
      })
    }
  }

  private getIndexByField = (fieldName: string): number | undefined => {
    return this.state.fields.findIndex((field: FieldType) => {
      return field.name === fieldName
    })
  }
}