import './ButtonQueueOver.css';
import './ButtonQueue.css';
import { useContext } from "react";
import { QueueContext, HeaderContext } from "../../../Context.js";

function ButtonQueueOver(props) {
    
    const [showDetails, hideDetails, toggleWindow, opacityBack, modalStyle] = useContext(QueueContext);
    const [backButtonStyle, burgerStyle, headerVisible, setHeaderVisible] = useContext(HeaderContext);

    return (
        <div
            style={backButtonStyle}
            className='back-button over-button'
            onClick={() => hideDetails()}
        >
            <p>Назад</p>
        </div>

    );
}

export default ButtonQueueOver;