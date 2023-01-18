import './navigation.css';
import './burgernav.css';
import { useState } from 'react';
import Logo from '../Logo/Logo.jsx';
import { closeButton } from '../../../Data/images.js';
import { logovertical } from '../../../Data/images.js';

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
                    <div  id='fix-menu' className="nav-container">
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
                        // swithBurger &&
                        // <div className="nav-container"  style={showBurger? {left: 0} :{left: "100%"} }>
                        <div className="nav-container" style={showBurger ? { top: 0 } : { top: "-100%" }}>
                            <div className='cross-container' onClick={() => setBurger()}>
                                <img src={closeButton} className='closeCross' />
                            </div>
                            <div className='open-burger-menu-wrap'>

                                <img src={logovertical} />
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
                    }
                </div>
            </div>
        </>
    );
}

export default Navigation;
