import './navigation.css';
import { useState } from 'react';

function Navigation(props) {

    const [active, setActive] = useState(props.navArray.Greating);

    const activateItem = (menuItem) => {
        setActive(menuItem);
    }

    return (
        <>
            <div className="nav-container">
                {
                    Object.values(props.navArray).map((menuItem, i) => (
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
