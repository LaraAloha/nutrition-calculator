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

export default class App extends React.Component<{}, State> {
  public state: State = {
    breakfast: config.defaultValues.breakfast,
    lunch: config.defaultValues.lunch,
    dinner: config.defaultValues.dinner,
  }

  public render(): React.ReactElement {
    const allMeals = config.uiText.meals.map((meal: MealData) => {
      return meal.name
    })
    return (
      <div className="root">
        {this.renderAllMeals(allMeals)}
      </div>
    )
  }

  private renderAllMeals = (allMeals: string[]): React.ReactElement[] => {
    return allMeals.map((mealName: string) => {
      return this.renderMeal(mealName)
    })
  }

  private renderMeal = (mealName: string): React.ReactElement => {
    return <Meal
      changeValue={this.changeValue}
      maxLimit={config.limits.meal}
      nutritionValues={(this.state as Indexable)[mealName]}
      mealName={mealName}
    />

  }
  private changeValue = (value: NumberFormatValues, mealName: string): void => {
    this.setState({
      [mealName]: value.value,
    } as any)
  }

}