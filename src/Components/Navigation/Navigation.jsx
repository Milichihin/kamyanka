import { useState } from 'react';
import './navigation.css';
import { navArray } from '../../Data/navigation.js';

function Navigation() {

    const [active, setActive] = useState("Концепція");

    const activateItem = (menuItem) => {
        setActive(menuItem);
    }

    return (
        <>
            <div className="container">
                {
                    navArray.map((menuItem, i) => (
                        <a
                            href={"#" + menuItem}
                            className={"item " + (menuItem === active ? "active" : "")}
                            onClick={() => activateItem(menuItem)}
                        >
                            {menuItem}
                        </a>
                    ))
                }
            </div>
        </>

    );
}

export default Navigation;
