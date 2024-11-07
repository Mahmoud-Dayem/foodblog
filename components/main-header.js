import classes from './main-header.module.css'
import Link from 'next/link'
import React from 'react'
import logoImg from '@/assets/logo.png'

/**
 * Renders the main header of the application.
 *
 * This component renders a header which contains
 * a link to the main page, a link to the meals page and
 * a link to the community page.
 *
 * @return {React.ReactElement}
 */
function Mainheader() {
    return (
        <header className={classes.header}>
            <Link  href={"/"} className={classes.logo}>
                <img src={logoImg.src} alt="logo" />
            </Link>
            <nav className={classes.nav} >
                <ul>
           
                    <li>
                        <Link href={"/meals"}>Browse Meals</Link>
                    </li>
                    <li>
                        <Link href={"/community"}>Browse Community</Link>
                    </li>
       
                </ul>
            </nav>

        </header>
    )
}

export default Mainheader