import React from 'react';
import './gallery.css';
import { useState } from 'react';
import ModalGallery from './ModalGallery.jsx'
import PicGrid from './PicGrid.jsx'

function Gallery(props) {

    const [modal, setModal] = useState(false);
    const [picLink, setPicLink] = useState("");
    const [opacityBack, setOpacityBack] = useState({ opacity: 0 });
    const [opacityPic, setOpacityPic] = useState({ opacity: 0 });
    const [opacityButtons, setOpacityButtons] = useState({ opacity: 0 });
    const [isLoading, setIsLoading] = useState(false);

    const images = props.images;

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
        <>
            {
                modal &&
                <>
                    <ModalGallery
                        changeImage={changeImage}
                        // images={images}
                        modal={modal}
                        picLink={picLink}
                        opacityBack={opacityBack}
                        opacityPic={opacityPic}
                        opacityButtons={opacityButtons}
                        isLoading={isLoading}

                    />
                </>
            }
            <PicGrid
                images={images}
                viewImage={viewImage}
                // isItQueue={props.isItQueue}
            />
        </>
    )
}

export default Gallery;