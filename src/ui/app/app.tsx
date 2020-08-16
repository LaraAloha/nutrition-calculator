import React from 'react';
import NumberFormat, { NumberFormatValues } from 'react-number-format'
import Meal from '../meal/meal'
import { config } from '../../dev/config';
import './app.css';
import { MealData, Indexable } from '../../store/types';

type State = {
  breakfast: number
  lunch: number
  dinner: number
}

const getDefaults = (fieldName: string): MealData => {
  return config.defaultValues.meals.find((meal: MealData) => {
    return meal.name === fieldName
  }) as MealData
}

export default class App extends React.Component<{}, State> {
  public state: State = {
    breakfast: getDefaults('breakfast').defaultValue,
    lunch: getDefaults('lunch').defaultValue,
    dinner: getDefaults('dinner').defaultValue
  }

  public render(): React.ReactElement {
    const allMeals = config.defaultValues.meals.map((meal: MealData) => {
      return meal.name
    })
    return (
      <div className="root">
        {this.renderAllMeals(allMeals)}
      </div>
    )
  }

  private renderAllMeals = (allMeals: string[]): React.ReactElement[] => {
    return allMeals.map((fieldName: string) => {
      return this.renderMeal(fieldName)
    })
  }

  private renderMeal = (fieldName: string): React.ReactElement => {
    return <Meal
      changeValue={this.changeValue}
      maxLimit={config.limits.meal}
      nutritionValues={(this.state as Indexable)[fieldName]}
      fieldData={getDefaults(fieldName)}
      suffix={config.uiText.suffix}
    />
  }
  
  private changeValue = (value: NumberFormatValues, fieldName: string): void => {
    this.setState({
      [fieldName]: value.value,
    } as any)
  }

}