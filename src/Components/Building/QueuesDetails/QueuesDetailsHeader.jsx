import './QueuesDetailsContent.css';
import { logo } from '../../../Data/images.js';

function QueuesDetailsHeader(props) {
    return (
        <div className="details-header" >
            <div
                className='back-button'
                onClick={() => props.hideDetails()}
            >
                <p>Назад</p>
            </div>
            <img src={logo} />
        </div>

    );
}

export default QueuesDetailsHeader;