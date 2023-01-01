import React from 'react';
// import '../../Conception/Gallery/gallery.css';
import './queuesblock.css';
import './slides.css';
// import '../../../index.css';
import { arrow } from '../../../Data/images.js';
import { useState } from 'react';

function Slides(props) {

    const [picLink, setPicLink] = useState(props.pics[0]);
    const [opacityPic, setOpacityPic] = useState({ opacity: 1 });

    async function changeImage(action) {

        const images = props.pics;
        
        let i = images.indexOf(picLink);

        if (action === 'next-img') {

            setOpacityPic({ opacity: 0 });
            await new Promise((resolve, reject) => setTimeout(resolve, 100));
            setPicLink(images[i + 1]);
            setOpacityPic({ opacity: 1 });

            if (i === images.length - 1) {
                setPicLink(images[0]);
            }
        }

        if (action === 'prev-img') {
            setOpacityPic({ opacity: 0 });
            await new Promise((resolve, reject) => setTimeout(resolve, 100));
            setPicLink(images[i - 1]);
            setOpacityPic({ opacity: 1 });
            if (i === 0) {
                setPicLink(images[images.length - 1]);
            }
        }
    };


    return (
        <>
            <img className='queue-image' src={picLink} style={opacityPic} />

            <div className='previous-arrow-container' onClick={() => changeImage('prev-img')}>
                <img src={arrow} className='previous-arrow' />
            </div>

            <div className='next-arrow-container' onClick={() => changeImage('next-img')}>
                <img src={arrow} className='next-arrow' />
            </div>
        </>
    )
}

export default Slides;