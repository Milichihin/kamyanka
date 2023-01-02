import './navigation.css';
import { useState } from 'react';

function Navigation(props) {

    const [active, setActive] = useState(props.navArray.Greating);

    const activateItem = (menuItem) => {
        setActive(menuItem);
    }
    // console.log(props.fixNav);

    return (
        <>
            <div className="nav-container">
                {
                    Object.values(props.navArray).map((menuItem, i) => (
                        <a
                            href={"#" + menuItem}
                            className={(menuItem === active ? "active" : "item")}
                            onClick={() => activateItem(menuItem)}
                        >
                            {menuItem}
                        </a>
                    ))
                }
            </div>

            {/* {
                props.fixNav &&
                <>
                    <div className={`${"nav-container"} ${"fix"}`}>
                        {
                            Object.values(props.navArray).map((menuItem, i) => (
                                <a
                                    href={"#" + menuItem}
                                    className={(menuItem === active ? "active" : "item")}
                                    onClick={() => activateItem(menuItem)}
                                >
                                    {menuItem}
                                </a>
                            ))
                        }
                    </div>
                </>

            } */}
        </>
    );
}

export default Navigation;
