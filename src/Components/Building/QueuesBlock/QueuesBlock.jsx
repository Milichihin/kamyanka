import './queuesblock.css';
import { queuesDescription } from '../../../Data/text.js';
import { useState } from 'react';
import PreviousArrow from '../../Controls/PreviousArrow.jsx';
import NextArrow from '../../Controls/NextArrow.jsx';

function QueuesBlock() {

    const [currentQueue, setCurrentQueue] = useState(queuesDescription[0]);
    const [picture, setPicture] = useState(currentQueue.photos[0]);
    const [discriptionOpacity, setDiscriptionOpacity] = useState({ opacity: 1 });
    const [queueOpacity, setQueueOpacity] = useState({ opacity: 1 });


    async function chooseQueue(item) {
        if (item !== currentQueue) {

            setQueueOpacity({ opacity: 1 })
            await new Promise((resolve, reject) => setTimeout(resolve, 10));
            setQueueOpacity({ opacity: 0 })
            await new Promise((resolve, reject) => setTimeout(resolve, 100));
            setQueueOpacity({ opacity: 1 })
            setPicture(item.photos[0]);
            setCurrentQueue(item);
            setDiscriptionOpacity({ opacity: 1 })
        }
    }

    function changeImage(action) {

        let i = currentQueue.photos.indexOf(picture);

        if (action === 'next-img') {

            setPicture(currentQueue.photos[i + 1]);
            setDiscriptionOpacity({ opacity: 0 })

            if (i === currentQueue.photos.length - 1) {
                setPicture(currentQueue.photos[0]);
                setDiscriptionOpacity({ opacity: 1 })
            }
        }

        if (action === 'prev-img') {

            if (currentQueue.photos[i - 1]) {
                setPicture(currentQueue.photos[i - 1]);
                setDiscriptionOpacity({ opacity: 0 })
            } else {
                setPicture(currentQueue.photos[currentQueue.photos.length - 1]);
            }
            if (i === 0) {
                setPicture(currentQueue.photos[currentQueue.photos.length - 1]);
                setDiscriptionOpacity({ opacity: 0 })
            }
            if (i === 1) {
                setDiscriptionOpacity({ opacity: 1 })
            }
        }
    };



    return (
        <>
            <div className='queue-list'>
                {queuesDescription.map(item => (
                    <p
                        className={"select " + (item.header === currentQueue.header ? "active-select" : "")}
                        onClick={() => chooseQueue(item)}
                    >
                        {item.header}
                    </p>
                ))}
            </div>
            <div className='queue-window-wraper'>
                <div className='queue-window'>
                    <>
                        <img className='queue-image' src={picture} />
                        {
                            (currentQueue !== queuesDescription[0]) &&
                            <div className="blacking" style={discriptionOpacity}></div>
                        }
                    </>

                    <div className='queue-description'>
                        <div className='title-pad-wraper' style={queueOpacity}>
                            <p className='title-pad'>{currentQueue.deadline}</p>
                            <p className='title-pad'>{currentQueue.type}</p>
                            <p className='title-pad'>{currentQueue.number}</p>
                        </div>
                        <div className='queue-subdescription' style={queueOpacity}>
                            <p style={discriptionOpacity}>{currentQueue.description}</p>
                            <div className='details' style={discriptionOpacity}>
                                {
                                    currentQueue.details &&
                                    currentQueue.details.map((item) => (
                                        <div className='detail-item'>
                                            <p>- {item[1]}</p>
                                        </div>

                                    ))
                                }
                            </div>
                        </div>
                    </div>

                    <PreviousArrow onClick={changeImage} />
                    <NextArrow onClick={changeImage} />

                </div>
            </div>
        </>
    );
}

export default QueuesBlock;
