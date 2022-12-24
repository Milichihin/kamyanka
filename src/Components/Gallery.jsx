import React from 'react';
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import '../Styles/gallery.css';
import { images } from '../Data/images.js';
import { arrow } from '../Data/images.js'; 
import { closeButton } from '../Data/images.js';
import { useState } from 'react';



const Gallery = () => {

    const [data, setData] = useState({ img: '', i: 0 });

    const viewImage = (img, i) => {
        console.log(img, i);
        setData({ img, i });
    };

    const changeImage = (action) => {
        let i = data.i;
        if (action === 'next-img') {
            setData({ img: images[i + 1], i: [i + 1] });
        } 
        if (action === 'prev-img') {
            setData({ img: images[i - 1], i: [i - 1] });
        }
        if (!action) {
            setData({ img: '', i: 0 });
        }
    };

    return (
        <div className='gallery' >
            <>
                {
                    data.img &&
                    <>
                        <div className='fullsize-wraper'>
                            <div className='fullsize-background' onClick={()=> changeImage()}/>
                            <img src={closeButton} className='cross' onClick={()=> changeImage()}/>
                            <img src={arrow} className='previous-arrow'  onClick={()=> changeImage('prev-img')}/>
                            <img src={data.img} className='fullsize-img' />
                            <img src={arrow} className='next-arrow'  onClick={()=> changeImage('next-img')}/>
                        </div>
                    </>

                }
                
                <ResponsiveMasonry
                    columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}
                >
                    <Masonry gutter='15px'>
                        {images.map((image, i) => (
                            <img
                                key={i}
                                src={image}
                                className="gallery-img"
                                alt=""
                                onClick={() => viewImage(image, i)}
                            />
                        ))}
                    </Masonry>
                </ResponsiveMasonry>
            </>

        </div>

    )
}

export default Gallery;