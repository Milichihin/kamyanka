import './queuesblock.css';
import './arrows.css';
import '../../Conception/Gallery/gallery.css';
import { queuesArray } from '../../../Data/text.js';
import { useState } from 'react';
import { arrow } from '../../../Data/images.js';

function QueuesBlockWOawait() {


    const [queue, setQueue] = useState(queuesArray[0]);

    const [picLink, setPicLink] = useState(queue.photos[0]);
    const [discriptionOpacity, setDiscriptionOpacity] = useState({ opacity: 1 });

    function chooseQueue(item) {
        if (item !== queue) {
            setPicLink(item.photos[0]);
            setQueue(item);
            setDiscriptionOpacity({ opacity: 1 })
        }
    }

    async function changeImage(action) {

        let i = queue.photos.indexOf(picLink);

        if (action === 'next-img') {
            setPicLink(queue.photos[i + 1]);
            setDiscriptionOpacity({ opacity: 0 })

            if (i === queue.photos.length - 1) {
                setPicLink(queue.photos[0]);
                setDiscriptionOpacity({ opacity: 1 })
            }
        }

        if (action === 'prev-img') {


            if (queue.photos[i - 1]) {
                setPicLink(queue.photos[i - 1]);
                setDiscriptionOpacity({ opacity: 0 })
            } else {
                setPicLink(queue.photos[queue.photos.length - 1]);
            }
            if (i === 0) {
                setPicLink(queue.photos[queue.photos.length - 1]);
                setDiscriptionOpacity({ opacity: 0 })
            }
            if (i === 1) {
                setDiscriptionOpacity({ opacity: 1 })
            }
        }
    };



    return (
        <>
            <div className='queue-container'>
                {queuesArray.map(item => (
                    <p
                        className={"select " + (item.header === queue.header ? "active-select" : "")}
                        onClick={() => chooseQueue(item)}
                    >
                        {item.header}
                    </p>
                ))}
            </div>
            <div className='queue-wraper'>
                <>
                    <img className='queue-image' src={picLink} />
                    {
                        (queue !== queuesArray[0]) &&   
                        <div className="blacking" style={discriptionOpacity}></div>
                    }
                </>

                <div className='queue-description'>
                    <div>
                        <p className='boldFont'>{queue.deadline}</p>
                        <p className='boldFont'>{queue.type}</p>
                        <p className='boldFont'>{queue.number}</p>
                    </div>
                    <div className='queue-subdescription' >
                        <p style={discriptionOpacity}>{queue.description}</p>
                        <div className='details' style={discriptionOpacity}>
                            {
                                queue.details &&
                                queue.details.map((item) => (
                                    <div className='picto'>
                                        <p>- {item[1]}</p>
                                    </div>

                                ))
                            }
                        </div>
                    </div>
                </div>
                
                <div className='previous-arrow-container' onClick={() => changeImage('prev-img')}>
                    <img src={arrow} className='previous-arrow' />
                </div>

                <div className='next-arrow-container' onClick={() => changeImage('next-img')}>
                    <img src={arrow} className='next-arrow' />
                </div>
            </div>
        </>
    );
}

export default QueuesBlockWOawait;
