import './queuesblock.css';
import '../../Conception/Gallery/gallery.css';
import { queuesDescription } from '../../../Data/text.js';
import { useState } from 'react';
import PreviousArrow from '../../Controls/PreviousArrow.jsx';
import NextArrow from '../../Controls/NextArrow.jsx';

function QueuesBlock() {

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
            <div className='queue-window'>
                <>
                    <img className='queue-image' src={picture} />
                    {
                        (currentQueue !== queuesDescription[0]) &&   
                        <div className="blacking" style={discriptionOpacity}></div>
                    }
                </>

                <div className='queue-description'>
                    <div>
                        <p className='title-pad'>{currentQueue.deadline}</p>
                        <p className='title-pad'>{currentQueue.type}</p>
                        <p className='title-pad'>{currentQueue.number}</p>
                    </div>
                    <div className='queue-subdescription' >
                        <p style={discriptionOpacity}>{currentQueue.description}</p>
                        <div className='details' style={discriptionOpacity}>
                            {
                                currentQueue.details &&
                                currentQueue.details.map((item) => (
                                    <div className='detaile-item'>
                                        <p>- {item[1]}</p>
                                    </div>

                                ))
                            }
                        </div>
                    </div>
                </div>
                
                <PreviousArrow  onClick={changeImage}/>
                <NextArrow  onClick={changeImage}/>

            </div>
        </>
    );
}

export default QueuesBlock;
