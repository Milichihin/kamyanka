import './QueuesDetailsContent.css';
import { logo } from '../../../Data/images.js';
import Button from '../../Modules/Buttons/ButtonQueue.jsx';


function QueuesDetailsHeader(props) {

    return (
        <div className="details-header" >
            <img src={logo} />
            <Button
                hideDetails={props.hideDetails}
            />
        </div>

    );
}

export default QueuesDetailsHeader;