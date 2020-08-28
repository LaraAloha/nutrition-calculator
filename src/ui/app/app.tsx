import React from 'react';
import { NumberFormatValues } from 'react-number-format'
import Meal from '../meal/meal'
import { config } from '../../dev/config';
import './app.css';
import { MealData, MealType } from '../../store/types';

type State = {
  meals: MealType[]
}

const getMealData = (fieldName: string): MealData => {
  return config.defaultValues.meals.find((meal: MealData) => {
    return meal.name === fieldName
  }) as MealData
}

const getValuesByName = () => {
  return config.defaultValues.meals.map((meal: MealData) => {
    return meal.name
  })
}

const getDefaults = (): MealType[] => {
  return getValuesByName().map((name: string) => {
    return {
      name,
      value: getMealData(name).defaultValue
    }
  })
}

export default class App extends React.Component<{}, State> {
  public state: State = {
    meals: getDefaults()
  }

  public render(): React.ReactElement {
    const allMeals = this.state.meals.map((meal: MealType) => {
      return meal.name
    })
    return (
      <div className="root">
        {this.getAllMeals(allMeals)}
      </div>
    )
  }

  private getAllMeals = (allMeals: string[]): React.ReactElement[] => {
    return allMeals.map((fieldName: string) => {
      return (
        <div key={fieldName}>
          {this.renderMeal(fieldName)}
        </div>
      )
    })
  }

  private renderMeal = (fieldName: string): React.ReactElement | undefined => {
    const fieldIndex = this.getIndexByField(fieldName)
    if (fieldIndex !== undefined) {
      return <Meal
        changeValue={this.changeValue}
        maxLimit={config.limits.meal}
        currentNutritionData={this.state.meals[fieldIndex]}
        fieldData={getMealData(fieldName)}
        suffix={config.uiText.suffix}
        onRemove={this.onRemove}
      />
    }
  }


  private changeValue = (value: NumberFormatValues, fieldName: string): void => {
    const newMeals = [
      ...this.state.meals
    ]
    const fieldIndex = this.getIndexByField(fieldName)
    if (fieldIndex) {
      newMeals[fieldIndex].value = value.floatValue || 0
      this.setState({
        meals: newMeals
      })
    }
  }

  private onRemove = (fieldName: string): void => {
    const updatedFields = this.state.meals.filter((meal: MealType, index: number) => {
      return meal.name !== fieldName
    })
    this.setState({
      meals: updatedFields
    } as any)
  }

  private getIndexByField = (fieldName: string): number | undefined => {
    return this.state.meals.findIndex((meal: MealType) => {
      return meal.name === fieldName
    })
  }
}