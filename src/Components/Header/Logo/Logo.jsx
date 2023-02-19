import './logo.css';
import { logo } from '../../../Data/images.js';

function Logo(props) {

    return (
        <>
            {
                <div className='logo'>
                    <img src={logo} />
                </div>
            }
        </>
    )
}

export default Logo;