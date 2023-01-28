import './ButtonQueue.css';
import { useContext } from "react";
import { QueueContext } from "../../../Context.js";

function ButtonQueue(props) {

    const [showDetails, hideDetails, toggleWindow, opacityBack, modalStyle] = useContext(QueueContext);

    return (
        <div
            className='back-button'
            onClick={() => props.hideDetails()}
        >
            <p>Назад</p>
        </div>

    );
}

export default ButtonQueue;