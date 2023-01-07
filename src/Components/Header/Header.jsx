import Logo from './Logo/Logo.jsx';
import Navigation from './Navigation/Navigation.jsx';
import { useState } from 'react';

function Header(props) {

    const [diff, setDiff] = useState('');
    const [showFixNav, setShowFixNav] = useState(false);

    document.addEventListener('scroll', function (element) {
        const el = document.getElementsByClassName('nav-container');
        const el2 = el[0].getBoundingClientRect().bottom;
        // const el2 = el[0].getBoundingClientRect().top;

        setDiff(el2);

        if (diff >= 0) {
            setShowFixNav(false)
        }

        // if(diff >=0 && show)

        if (el2 <= 0) {
            setShowFixNav(true)
        }
    });

    console.log(showFixNav);
    // console.log(diff);

    return (
        <>
            <div className='header'>
                {/* <Logo fixNav={showFixNav} /> */}
                <Navigation
                    navArray={props.navArray}
                    fixNav={showFixNav}
                />
            </div>
            {/* {
                show &&
                <>
                    <Logo fixNav={show} />
                    <Navigation
                            navArray={props.navArray}
                            fixNav={show}
                        />
                </>
            } */}
        </>

    );
}

export default Header;
