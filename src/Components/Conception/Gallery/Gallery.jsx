import React from 'react';
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import './gallery.css';
import { images } from '../../../Data/images.js';
import { gallery } from '../../../Data/text.js';
import { useState } from 'react';
import PreviousArrow from '../../Controls/PreviousArrow.jsx';
import NextArrow from '../../Controls/NextArrow.jsx';
import CloseCross from '../../Controls/CloseCross.jsx';

function Gallery() {

    const [modal, setModal] = useState(false);
    const [picLink, setPicLink] = useState("");
    const [opacityBack, setOpacityBack] = useState({ opacity: 0 });
    const [opacityPic, setOpacityPic] = useState({ opacity: 0 });
    const [opacityButtons, setOpacityButtons] = useState({ opacity: 0 });

    const [isLoading, setIsLoading] = useState(false);

    const handleFetch = (link) => {
        setIsLoading(true);
        fetch(link)
            .then((respose) => {
                setIsLoading(false)
            });
    };


    const screenHeight = window.screen.height;

    window.screen.addEventListener("orientationchange", function () {
        screenHeight = window.screen.height;
    });

    async function viewImage(link) {
        setModal(!modal);
        setPicLink(link);
        setOpacityBack({ opacity: 0 });
        setOpacityPic({ opacity: 0 });
        setOpacityButtons({ opacity: 0 });
        await new Promise((resolve, reject) => setTimeout(resolve, 10));
        setOpacityBack({ opacity: 0.85 });
        setOpacityPic({ opacity: 1 });
        setOpacityButtons({ opacity: 1 });

        // if (screenHeight < 450) {
        //     await new Promise((resolve, reject) => setTimeout(resolve, 400));
        // }

        // document.body.style.overflow = modal ? 'auto' : 'hidden';
        // document.body.style.paddingRight = modal ? '0px' : '17px';
        // document.getElementById("fix-menu").style.paddingRight = modal ? '0px' : '17px';

    };

    async function changeImage(action) {

        let i = images.indexOf(picLink);


        if (action === 'next-img') {

            setOpacityPic({ opacity: 0 });
            await new Promise((resolve, reject) => setTimeout(resolve, 100));
            handleFetch(picLink);
            setPicLink(images[i + 1]);
            setOpacityPic({ opacity: 1 });

            if (i === images.length - 1) {
                handleFetch(picLink);
                setPicLink(images[0]);
            }
        }

        if (action === 'prev-img') {
            setOpacityPic({ opacity: 0 });
            await new Promise((resolve, reject) => setTimeout(resolve, 100));
            handleFetch(picLink);
            setPicLink(images[i - 1]);
            setOpacityPic({ opacity: 1 });
            if (i === 0) {
                setPicLink(images[images.length - 1]);
            }
        }

        if (!action) {
            setOpacityPic({ opacity: 0 });
            setOpacityBack({ opacity: 0 });
            setOpacityButtons({ opacity: 0 });
            setModal(!modal);
            if (screenHeight > 650) await new Promise((resolve, reject) => setTimeout(resolve, 200));
            setPicLink("");

            // document.body.style.overflow = modal ? 'auto' : 'hidden';
            // document.body.style.paddingRight = modal ? '0px' : '17px';
            // document.getElementById("fix-menu").style.paddingRight = modal ? '0px' : '17px';
        }
    };

    // document.body.addEventListener('keyup', function (e) {

    //     setModal(!modal);

    //     var key = e.keyCode;

    //         if (key == 27) {
    //             setPicLink("");
    //         };

    //     document.body.style.overflow = modal ? 'auto' : 'hidden';
    //     document.body.style.paddingRight = modal ? '0px' : '17px';
    //     document.getElementById("fix-menu").style.paddingRight = modal ? '0px' : '17px';

    // }, false);

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
                            {
                                isLoading &&
                                <h1 style={{ color: 'white' }}>.....</h1>
                                // <img
                                //     src='./spinner.gif'
                                //     style={{height: '100px', width: '100px'}}
                                // />
                            }
                            {
                                !isLoading &&
                                <img
                                    src={picLink}
                                    className='fullsize-img'
                                    style={opacityPic}
                                />
                            }
                            <CloseCross onClick={changeImage} styles={opacityButtons} />
                            <PreviousArrow onClick={changeImage} styles={opacityButtons} />
                            <NextArrow onClick={changeImage} styles={opacityButtons} />
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