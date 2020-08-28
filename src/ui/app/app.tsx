import React from 'react';
import NumberFormat, { NumberFormatValues } from 'react-number-format'
import Meal from '../meal/meal'
import { config } from '../../dev/config';
import './app.css';
import { MealData, MealType, Indexable } from '../../store/types';

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
    const allMeals = config.defaultValues.meals.map((meal: MealData) => {
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
      return this.renderMeal(fieldName)
    })
  }

  private renderMeal = (fieldName: string): React.ReactElement => {
    const fieldIndex = this.state.meals.findIndex((meal: MealType) => {
      return meal.name === fieldName
    });
    return <Meal
      changeValue={this.changeValue}
      maxLimit={config.limits.meal}
      currentNutritionData={this.state.meals[fieldIndex]}
      fieldData={getMealData(fieldName)}
      suffix={config.uiText.suffix}
      onRemove={this.onRemove}
    />
  }


  private changeValue = (value: NumberFormatValues, fieldName: string): void => {
    const newMeals = [
      ...this.state.meals
    ]
    const fieldIndex = this.state.meals.findIndex((meal: MealType) => {
      return meal.name === fieldName
    });

    newMeals[fieldIndex].value = value.floatValue || 0
console.log(newMeals,   value.floatValue)
    
this.setState({
      meals: newMeals
    } )
  }

  private onRemove = (fieldName: string): void => {
    // const fieldIndex = (this.state as In)

    // findIndex((field: IndexedTextAndNumberFieldData) => {
    //   return field.fieldName === fieldName
    // }) as number
    this.setState({
      // [fieldName]: value.value,
    } as any)
  }
}