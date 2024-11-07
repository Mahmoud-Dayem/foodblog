import React from 'react'
import classes from './meals-grid.module.css'
import Link from 'next/link'
import MealItem from './meal-item'

function MealsGrid( {meals} ) {
    return (
        <ul className={classes.meals}>

            {meals.map((meal) => (
                <li key={meal.id}>
                    <MealItem {...meal}/>
                </li>
            ))}

        </ul>
    )
}

export default MealsGrid