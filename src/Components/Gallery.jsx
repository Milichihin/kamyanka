import React from 'react';
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import '../Styles/gallery.css';
import { images } from '../Data/images.js';
import { arrow } from '../Data/images.js';
import { closeButton } from '../Data/images.js';
import { useState } from 'react';



const Gallery = () => {

    const [pic, setPic] = useState("");
    const [opacity, setOpacity] = useState({ opacity: 0, display: "none" });

    const viewImage2 = (image) => {
        setPic(image);
        setOpacity({ opacity: 1, display: "block" });
    };

    const changeImage2 = (action) => {

        let i = images.indexOf(pic);

        if (action === 'next-img') {
            setPic(images[i + 1]);
            if (i === images.length-1) {
                setPic(images[0]);
            }
        }
        if (action === 'prev-img') {
            setPic(images[i - 1]);
            if (i === 0) {
                setPic(images[images.length-1]);
            }
        }
        if (!action) {
            setPic("");
        }
    };

    return (
        <div className='gallery' >
            <>
                {
                    pic &&
                    <>
                        <div className='fullsize-wraper'>
                            <div className='fullsize-background' onClick={() => changeImage2()} />
                            <img src={closeButton} className='cross' onClick={() => changeImage2()} />
                            <img src={arrow} className='previous-arrow' onClick={() => changeImage2('prev-img')} />
                            <img src={pic}
                                className='fullsize-img'
                                style={opacity}
                            />
                            <img src={arrow} className='next-arrow' onClick={() => changeImage2('next-img')} />
                        </div>
                    </>

                }

                <ResponsiveMasonry
                    columnsCountBreakPoints={{ 300: 1, 500: 2, 800: 3 }}
                >
                    <Masonry gutter='15px'>
                        {images.map((image, i) => (
                            <img
                                key={i}
                                src={image}
                                className="gallery-img"
                                alt=""
                                onClick={() => viewImage2(image)}
                            />
                        ))}
                    </Masonry>
                </ResponsiveMasonry>
            </>

        </div>

    )
}

export default Gallery;