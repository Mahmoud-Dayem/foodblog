import React from 'react'
import classes from './page.module.css'
import Link from 'next/link'
import MealsGrid from '@/components/meals/meal-grid'
import {getMeals} from '@/lib/meal'
async function Mealspage() {

    const meals = await getMeals()  

    return (
        <>
            <header className={classes.header}>
                <h1>
                    Delicious Meals created by <span className={classes.highlight}>you</span>
                </h1>
                <p>choose your favorite meal</p>
                <p className={classes.cta}>
                    <Link href={'/meals/share'}>
                    Share a meal
                    </Link>
                </p>

            </header>
            <main className={classes.main}>

                <MealsGrid meals={meals}/>


            </main>

        </>
    )
}

export default Mealspage