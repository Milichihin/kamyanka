import Navigation from './Navigation/Navigation.jsx';
import { useState } from 'react';

function Header(props) {

    const [diff, setDiff] = useState('');
    const [showFixNav, setShowFixNav] = useState(false);

    document.addEventListener('scroll', function (element) {
        const elements = document.getElementsByClassName('nav-container');
        const position = elements[0].getBoundingClientRect().bottom;

        setDiff(position);

        if (diff >= 0) {
            setShowFixNav(false)
        }

        if (diff <= 0) {
            setShowFixNav(true)
        }
    });


    return (
        <>
            <div className='header'>
                <Navigation
                    navArray={props.navArray}
                    fixNav={showFixNav}
                />
            </div>
        </>
    );
}

export default Header;
