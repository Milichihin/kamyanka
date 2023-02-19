import './controls.css';
import { arrow } from '../../Data/images.js';

function PreviousArrow(props) {

    return (
        <>
            <div
                className='previous-arrow-container'
                onClick={() => props.onClick('prev-img')}
                style={props.styles && props.styles}
            >
                <img
                    src={arrow}
                    className='previous-arrow' />
            </div>
        </>
    );
}

export default PreviousArrow;
