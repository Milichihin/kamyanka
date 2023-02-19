import './QueuesDetailsContent.css';
import { logo } from '../../../Data/images.js';
import Button from '../../Modules/Buttons/ButtonQueue.jsx';

function QueuesDetailsHeader(props) {
    return (
        <div className="details-header" >
            <Button  hideDetails ={props.hideDetails}/>
            <img src={logo} />
        </div>

    );
}

export default QueuesDetailsHeader;