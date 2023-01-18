import React from 'react';
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import './gallery.css';
// import '../../../index.css';
import { images } from '../../../Data/images.js';
import { arrow } from '../../../Data/images.js';
import { closeButton } from '../../../Data/images.js';
import { gallery } from '../../../Data/text.js';
import { useState } from 'react';

function Gallery() {

    const [picLink, setPicLink] = useState("");
    const [opacityBack, setOpacityBack] = useState({ opacity: 0 });
    const [opacityPic, setOpacityPic] = useState({ opacity: 0 });

    async function viewImage(link) {
        setPicLink(link);
        setOpacityBack({ opacity: 0 });
        setOpacityPic({ opacity: 0 });
        await new Promise((resolve, reject) => setTimeout(resolve, 10));
        setOpacityBack({ opacity: 0.85 });
        setOpacityPic({ opacity: 1 });

        // document.body.style.overflow = 'hidden';
    };

    async function changeImage(action) {

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

        if (!action) {
            setOpacityPic({ opacity: 0 });
            setOpacityBack({ opacity: 0 });
            await new Promise((resolve, reject) => setTimeout(resolve, 200));
            setPicLink("");
            // document.body.style.overflow = 'auto';
        }
    };

    document.body.addEventListener('keyup', function (e) {
        var key = e.keyCode;

        if (key == 27) {
            setPicLink("");
        };
    }, false);

    return (
        <div className='section-block' >
            <h2>{gallery.header}</h2>
            <>
                {
                    picLink &&
                    <>
                        <div className='fullsize-wraper'>
                            <div 
                                className='fullsize-background'     
                                style={opacityBack} 
                                onClick={() => changeImage()} 
                                />

                            <img 
                                src={picLink} 
                                className='fullsize-img' 
                                style={opacityPic} 
                                /> 

                            <div 
                                className='cross-container' 
                                onClick={() => changeImage()}
                                style={opacityPic} 
                                >
                                <img   
                                    src={closeButton} 
                                    className='closeCross' 
                                    />
                            </div>

                            <div 
                                className='previous-arrow-container' 
                                onClick={() => changeImage('prev-img')}
                                style={opacityPic} 
                                >
                                <img 
                                    src={arrow} 
                                    className='previous-arrow' 
                                    />
                            </div>

                            <div 
                                className='next-arrow-container' 
                                onClick={() => changeImage('next-img')}
                                style={opacityPic} 
                                >
                                <img 
                                    src={arrow} 
                                    className='next-arrow' 
                                    />
                            </div>
                        </div>
                    </>
                }

                <ResponsiveMasonry
                    columnsCountBreakPoints={{ 450: 2, 500: 3, 800: 4 }}
                >
                    <Masonry gutter='10px'>
                        {images.map((link, i) => (
                            <img
                                key={i}
                                src={link}
                                className="gallery-img"
                                onClick={() => viewImage(link)}
                            />
                        ))}
                    </Masonry>
                </ResponsiveMasonry>
            </>
        </div>
    )
}

export default Gallery;