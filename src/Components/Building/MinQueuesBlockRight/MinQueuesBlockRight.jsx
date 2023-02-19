import './minqueuesblockRight.css';
import { queuesDescription } from '../../../Data/text.js';
import { useState } from 'react';
import QueuesDetailsWindow from '../QueuesDetails/QueuesDetailsWindow.jsx';

import { useContext } from "react";
import { QueueContext } from "../../../Context.js";

function MinQueuesBlock() {

    const [showDetails, hideDetails, toggleWindow, opacityBack, modalStyle] = useContext(QueueContext);

    const [currentQueue, setCurrentQueue] = useState(queuesDescription[0]);

    function chooseQueue(item) {
        if (item !== currentQueue) {
            setCurrentQueue(item);
        }
    }

    return (
        <>
            <div className='min-queue-list'>
                {queuesDescription.map(item => (
                    <div className='min-queue'>
                        <p
                            className={"min-select " + (item.header === currentQueue.header ? "active-select" : "")}
                            onClick={() => chooseQueue(item)}
                        >
                            {item.header}
                        </p>
                        <p
                            className={"min-detail-pic" + (item.deadline === currentQueue.deadline ? "active-select" : "")}
                            onClick={item.deadline === currentQueue.deadline ? () => showDetails() : () => chooseQueue(item)}
                            style={(item.deadline === currentQueue.deadline ? {backgroundImage: `url(${currentQueue.photo})`} : {backgroundImage: ""})}
                        >
                            {item.deadline === currentQueue.deadline ? "детальніше" : item.deadline}
                        </p>
                    </div>

                ))}

            </div>
            {
                toggleWindow &&
                <QueuesDetailsWindow
                    hideDetails={hideDetails}
                    opacityBack={opacityBack}
                    modalStyle={modalStyle}
                    currentQueue={currentQueue}
                />
            }
            
        </>

    );
}

export default MinQueuesBlock;
