import './navigation.css';
import './burgernav.css';
import { useState } from 'react';
import Logo from '../Logo/Logo.jsx';

function Navigation(props) {

    const [active, setActive] = useState(props.navArray.Greating);
    const [showBurger, setShowBurger] = useState(false);

    const activateItem = (menuItem) => {
        setActive(menuItem);
        setBurger();
    }

    const setBurger = () => {
        setShowBurger(!showBurger);
    }

    return (
        <>
            <div className='desktop-menu'>
                <Logo fixNav={props.showFixNav} />
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
            </div>
            <div className='desktop-menu-fix' >
                <div className='fix-wrap' style={props.fixNav ? { top: 0, opacity: 1 } : { top: -50, opacity: 0 }} >
                    <div className="nav-container">
                        <Logo fixNav={props.fixNav} />
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
                </div>
            </div>
            <div className='mobile-menu'>
                <div className='fix-wrap'>
                    <Logo fixNav={props.fixNav} />
                    <div className='burger-icon' onClick={() => setBurger()} >&#9776;</div>

                    {
                        showBurger &&
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
                    }

                </div>
            </div>
        </>
    );
}

export default Navigation;
