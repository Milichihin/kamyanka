import './minqueuesblock.css';
import '../../Conception/Gallery/gallery.css';
import { queuesDescription } from '../../../Data/text.js';
import { useState } from 'react';
import PreviousArrow from '../../Controls/PreviousArrow.jsx';
import NextArrow from '../../Controls/NextArrow.jsx';

function MinQueuesBlock() {

    const [currentQueue, setCurrentQueue] = useState(queuesDescription[0]);
    const [picture, setPicture] = useState(currentQueue.photos[0]);
    const [discriptionOpacity, setDiscriptionOpacity] = useState({ opacity: 1 });

    function chooseQueue(item) {
        if (item !== currentQueue) {
            setPicture(item.photos[0]);
            setCurrentQueue(item);
            setDiscriptionOpacity({ opacity: 1 })
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
                        <p className={"min-detail-pic " + (item.deadline === currentQueue.deadline ? "active-select" : "")}>
                            {item.deadline === currentQueue.deadline ? "детальніше" : item.deadline}
                        </p>
                    </div>

                ))}

            </div>
        </>

    );
}

export default MinQueuesBlock;
