import React from 'react';
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import './gallery.css';
import { images } from '../../Data/images.js';
import { arrow } from '../../Data/images.js';
import { closeButton } from '../../Data/images.js';
import { useState } from 'react';

function Gallery() {

    const [picLink, setPicLink] = useState("");

    const viewImage2 = (link) => {
        setPicLink(link);
    };

    const changeImage2 = (action) => {

        let i = images.indexOf(picLink);

        if (action === 'next-img') {
            setPicLink(images[i + 1]);
            if (i === images.length - 1) {
                setPicLink(images[0]);
            }
        }

        if (action === 'prev-img') {
            setPicLink(images[i - 1]);
            if (i === 0) {
                setPicLink(images[images.length - 1]);
            }
        }

        if (!action) {
            setPicLink("");
        }
    };
    
    document.body.addEventListener('keyup', function (e) {
        var key = e.key;
    
        if (key == 27) {
            setPicLink("");
        };
    }, false);

    return (
        <div className='section-block' >
        <h2>ГАЛЕРЕЯ</h2>
            <>
                {
                    picLink &&
                    <>
                        <div className='fullsize-wraper'>
                            <div className='fullsize-background' onClick={() => changeImage2()} />
                            <img src={closeButton} className='closeCross' onClick={() => changeImage2()} />
                            <img src={arrow} className='previous-arrow' onClick={() => changeImage2('prev-img')} />
                            <img src={picLink} className='fullsize-img' />
                            <img src={arrow} className='next-arrow' onClick={() => changeImage2('next-img')} />
                        </div>
                    </>
                }

                <ResponsiveMasonry
                    columnsCountBreakPoints={{ 300: 1, 500: 2, 800: 3 }}
                >
                    <Masonry gutter='10px'>
                        {images.map((link, i) => (
                            <img
                                key={i}
                                src={link}
                                className="gallery-img"
                                onClick={() => viewImage2(link)}
                            />
                        ))}
                    </Masonry>
                </ResponsiveMasonry>
            </>
        </div>
    )
}

export default Gallery;