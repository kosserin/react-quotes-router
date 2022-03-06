import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Header.module.css';

const Header = () => {
  return (
    <header className={styles.header}>
    <a href="#">KossQuotes</a>
    <nav>
        <ul>
            <li>
                <NavLink className={(navData) => navData.isActive ? styles.active : ""} to="/quotes">Quotes</NavLink>
            </li>
            <li>
                <NavLink className={(navData) => navData.isActive ? styles.active : ""} to="/new-quote">New Quote</NavLink>
            </li>
        </ul>
    </nav>
    </header>
  )
}

export default Header