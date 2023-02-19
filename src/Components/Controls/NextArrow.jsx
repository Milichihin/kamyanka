import './controls.css';
import { arrow } from '../../Data/images.js';

function NextArrow(props) {
    
    return (
        <>
            <div
                className='next-arrow-container'
                onClick={() => props.onClick('next-img')}
                style={props.styles && props.styles}
            >
                <img
                    src={arrow}
                    className='next-arrow' />
            </div>
        </>
    );
}

export default NextArrow;
