import React from 'react';
import NumberFormat, { NumberFormatValues } from 'react-number-format'
import Meal from '../meal/meal'
import { config } from '../../dev/config';
import './app.css';


type Props = {
  changeValue: (value: NumberFormatValues) => void
  maxLimit: number
  suffix: string
  nutritionValues: number  // todo NumberFormatValues -> num
}
type State = {
  breakfast: number
  lunch: number
  dinner: number
}

export default class App extends React.Component<Props, State> {
  public state: State = {
    breakfast: config.defaultValues.breakfast,
    lunch: config.defaultValues.lunch,
    dinner: config.defaultValues.dinner
  }

  public render(): React.ReactElement {

    return (
      <div className="root">

        <Meal
          changeValue={this.changeValue}
          maxLimit={config.limits.meal}
          suffix={''}
          nutritionValues={this.state.breakfast}
          mealName={'breakfast'}
        />
      </div>
    )
  }


  private changeValue = (value: NumberFormatValues, mealName: string) => {

    this.setState({

    })
  }
}
