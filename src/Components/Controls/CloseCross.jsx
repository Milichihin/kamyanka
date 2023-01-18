import './controls.css';
import { closeButton } from '../../Data/images.js';

function CloseCross(props) {

    return (
        <>
            <div
                className='cross-container'              
                onClick={() => props.onClick()}
                style={props.styles}
            >
                <img
                    src={closeButton}
                    className='closeCross'
                />
            </div>
        </>
    );
}

export default CloseCross;
