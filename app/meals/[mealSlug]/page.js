import React from 'react'
import Image from 'next/image'
import { getMeal } from '@/lib/meal'
import classes from './page.module.css'

 function MealDetailsPage({ params }) {
  const meal_data =  getMeal(params.mealSlug);
  console.log(params.mealSlug)
  const meal = meal_data[0]
  console.log(meal);
  
  return (
    <>
      <header className={classes.header}>
        <div className={classes.image}>
          <Image fill src={meal.image} alt={meal.title} />

        </div>
        <div className={classes.headerText}>
          <h1>{meal.title}</h1>
          <p className={classes.creator}>
            <a href={`mailto${meal.creator_email}`}>
            email
            </a>
           
            </p>
            <p>by {meal.creator}</p>
            <p className={classes.summary}>{meal.summary}</p>

        </div>

      </header>
      <main>
        <p className={classes.instructions}>
          {meal.instructions}
        </p>

      </main>

    </>
  )
}

export default MealDetailsPage