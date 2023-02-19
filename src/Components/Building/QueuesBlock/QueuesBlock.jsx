import './queuesblock.css';
import { queuesDescription } from '../../../Data/text.js';
import { useState } from 'react';
import QueueWraper from './QueueWraper.jsx';

function QueuesBlock() {

    const queueOpacity = { opacity: 1 };
    const [currentQueue, setCurrentQueue] = useState(queuesDescription[0]);
    const [prevQueue, setPrevQueue] = useState(currentQueue);
    const [picture, setPicture] = useState(currentQueue.photos[0]);
    const [prevPicture, setPrevPicture] = useState(picture);
    const [discriptionOpacity, setDiscriptionOpacity] = useState({ opacity: 1 });
    const [prevOpacity, setPrevOpacity] = useState({ opacity: 1});

    async function chooseQueue(item) {
        if (item !== currentQueue) {
            setDiscriptionOpacity({ opacity: 1 })
            setCurrentQueue(item);
            setPicture(item.photos[0]);
            setPrevOpacity({ opacity: 0 })
            await new Promise((resolve, reject) => setTimeout(resolve, 200));
            setPrevQueue(item);
            setPrevPicture(item.photos[0]);
            setPrevOpacity({ opacity: 1 })
        }
    }

    function changeImage(action) {

        setPrevOpacity({ opacity: 0 })
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
                <QueueWraper
                    queue={currentQueue}
                    picture={picture}
                    discriptionOpacity={discriptionOpacity}
                    opacity={queueOpacity}
                />
                <QueueWraper
                    queue={prevQueue}
                    picture={prevPicture}
                    discriptionOpacity={discriptionOpacity}
                    opacity={prevOpacity}
                    onClick={changeImage}
                />
            </div>
        </>
    );
}

export default QueuesBlock;
