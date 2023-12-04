import {useState} from "react";
import styles from './App.module.scss'
import {Link, Outlet} from "react-router-dom";
export const App = () => {
    const [count, setCount] = useState(0)

    const increment = () => setCount(prev => prev + 1)

    return (
        <div>
            <h1>PLATFORM TYPE - {__PLATFORM__}</h1>
            <Link to={'about'}>About</Link>
            <br/>
            <Link to={'shop'}>Shop</Link>
            <h1 className={styles.value}>{count}</h1>
            <button className={styles.button} onClick={increment}>click</button>
            <Outlet/>
        </div>
    );
};

