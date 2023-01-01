import './queuesblock.css';
import '../../Conception/Gallery/gallery.css';
import { queuesArray } from '../../../Data/text.js';
import { useState } from 'react';
import { images } from '../../../Data/images.js';
import { arrow } from '../../../Data/images.js';
import { closeButton } from '../../../Data/images.js';
import Slides from './Slides';

function QueuesBlock() {


    const [queue, setQueue] = useState(queuesArray[0]);
    const [opacityPic, setOpacityPic] = useState({ opacity: 1 });

    async function chooseQueue(item) {

        console.log("current queue 0", queue);

        if (item !== queue) {
            setOpacityPic({ opacity: 0 });
            await new Promise((resolve, reject) => setTimeout(resolve, 150));
            setQueue(item);
            setOpacityPic({ opacity: 1 });
        }
    }

    //////////////////////////////////////
    const [picLink, setPicLink] = useState(queue.photos[0]);
    // const [opacityPic, setOpacityPic] = useState({ opacity: 1 });

    async function changeImage(action) {

        let i = queue.photos.indexOf(picLink);

        console.log("current queue", queue);
        console.log("current IMG", queue.photos[i]);
        console.log("prev IMG", queue.photos[i-1]);
        console.log("next IMG", queue.photos[i+1]);

        if (action === 'next-img') {

            setOpacityPic({ opacity: 0 });
            await new Promise((resolve, reject) => setTimeout(resolve, 100));
            setPicLink(queue.photos[i + 1]);
            setOpacityPic({ opacity: 1 });

            if (i === queue.photos.length - 1) {
                setPicLink(queue.photos[0]);
            }
        }

        if (action === 'prev-img') {
            setOpacityPic({ opacity: 0 });
            await new Promise((resolve, reject) => setTimeout(resolve, 100));
            
            if (queue.photos[i - 1]) {
                setPicLink(queue.photos[i - 1]);
                setOpacityPic({ opacity: 1 });
            } else {
                setPicLink(queue.photos[queue.photos.length - 1]);
                setOpacityPic({ opacity: 1 });

            }

            if (i === 0) {
                setPicLink(queue.photos[queue.photos.length - 1]);
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
                {/* <img className='queue-image' style={opacityPic} src={queue.photo}  /> */}
                {/* <Slides pics={queue.photos} opacity={opacityPic} /> */}
                <>
                    <img className='queue-image' src={picLink} style={opacityPic} />

                    <div className='previous-arrow-container' onClick={() => changeImage('prev-img')}>
                        <img src={arrow} className='previous-arrow' />
                    </div>

                    <div className='next-arrow-container' onClick={() => changeImage('next-img')}>
                        <img src={arrow} className='next-arrow' />
                    </div>
                </>

                <div className='queue-description'>
                    <p className='boldFont'>{queue.deadline}</p>
                    <p className='boldFont'>{queue.type}</p>
                    <p className='boldFont'>{queue.number}</p>
                    <p>{queue.description}</p>
                    <div className='details'>
                        {
                            queue.details &&
                            queue.details.map((item) => (
                                <div className='picto'>
                                    <img src={item[0]} />
                                    <p>{item[1]}</p>
                                </div>

                            ))
                        }
                    </div>
                </div>
            </div>
        </>
    );
}

export default QueuesBlock;
