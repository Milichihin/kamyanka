import './navigation.css';
import { navArray } from '../../Data/navigation.js';
import { useState } from 'react';

function Navigation() {

    const [active, setActive] = useState(navArray[0]);

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
