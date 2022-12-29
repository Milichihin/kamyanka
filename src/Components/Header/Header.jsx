import Logo from './Logo/Logo.jsx';
import Navigation from './Navigation/Navigation.jsx';

function Header(props) {

    return (    
        <div>
            <Logo  />
            <Navigation navArray={props.navArray}/>
        </div>
    );
}

export default Header;
