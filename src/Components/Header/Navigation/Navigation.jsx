import './navigation.css';
import { useState } from 'react';
import Logo from '../Logo/Logo.jsx';

function Navigation(props) {

    const [active, setActive] = useState(props.navArray.Greating);

    const activateItem = (menuItem) => {
        setActive(menuItem);
    }
    // console.log(props.fixNav);

    return (
        <>
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
            <div className='fix-wrap' style={props.fixNav?{top: 0, opacity: 1}:{top: -50, opacity: 0}} >
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

            {/* {
                props.fixNav &&
                <>
                    <div className='fix-wrap' style={{top: 0}} >
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
                </>

            } */}
        </>
    );
}

export default Navigation;
