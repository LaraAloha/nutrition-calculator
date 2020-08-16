import React from 'react';
import NumberFormat, { NumberFormatValues } from 'react-number-format'
import Meal from '../meal/meal'
import { config } from '../../dev/config';
import './app.css';



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

    return (
      <div className="root">
        {this.renderMeal('breakfast')}
      </div>
    )
  }

  private renderMeal = (mealName: string): React.ReactElement => {
    return <Meal
      changeValue={this.changeValue}
      maxLimit={config.limits.meal}
      nutritionValues={this.state.breakfast}
      mealName={mealName}
    />

  }
  private changeValue = (value: NumberFormatValues, mealName: string): void => {
    console.log(value, mealName)
    this.setState({
      [mealName]: value.value,
    } as any)
  }

}