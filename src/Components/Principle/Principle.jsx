import './principle.css';
import { howItWorks } from '../../Data/text.js';
import { useState } from 'react';
import ModalForm from '../Modules/ModalForm/ModalForm.jsx';

function Principle(props) {

    const [modal, setModal] = useState(false);
    const [opacityBack, setOpacityBack] = useState({ opacity: 0 });
    const [opacityPic, setOpacityPic] = useState({ opacity: 0 });
    const [modalStyle, setModalStyle] = useState({ left: "100%", opacity: 0});
    const [screenHeight, setScreenHeight] = useState(window.outerHeight);
    const [screenWidth, setScreenWidth] = useState(window.outerWidth);
    const [isMobile, setIsMobile] = useState(false);

    window.addEventListener('resize',(e) => {
        setScreenHeight(window.outerHeight);
        setScreenWidth(window.outerWidth);
        if (screenHeight < 450) {
            setIsMobile(true);
        } else if (screenWidth < 450) {
            setIsMobile(true);
        } else {
            setIsMobile(false);
        }
    });
    

    async function showModal() {
        setOpacityBack({ opacity: 0});
        setOpacityPic({ opacity: 0});
        isMobile ? setModalStyle({ left: "100%"}) : setModalStyle({ opacity: 0});
        setModal(!modal);
        await new Promise((resolve, reject) => setTimeout(resolve, 10));
        setOpacityBack({ opacity: 0.85 });
        setOpacityPic({ opacity: 1});
        isMobile ? setModalStyle({ left: "0%"}) : setModalStyle({ opacity: 1});
        // document.body.style.overflow = modal ? 'auto' : 'hidden';
        // document.body.style.paddingRight = modal ? '0px' : '17px';
        // document.getElementById("fix-menu").style.paddingRight = modal ? '0px' : '17px';
    };

    async function hideModal() {
        setOpacityBack({ opacity: 0.85 });
        setOpacityPic({ opacity: 1 });
        isMobile ? setModalStyle({ left: "0%"}) : setModalStyle({ opacity: 1});
        await new Promise((resolve, reject) => setTimeout(resolve, 10));
        setOpacityBack({ opacity: 0 });
        setOpacityPic({ opacity: 0 });
        isMobile ? setModalStyle({ left: "100%"}) : setModalStyle({ opacity: 0});
        await new Promise((resolve, reject) => setTimeout(resolve, 300));
        setModal(!modal);
        // document.body.style.overflow = modal ? 'auto' : 'hidden';
        // document.body.style.paddingRight = modal ? '0px' : '17px';
        // document.getElementById("fix-menu").style.paddingRight = modal ? '0px' : '17px';
    };

    return (
        <>
            <a className='anchor-padding' name={props.anchor} ></a>
            <div className={`${"section-block"} ${"principle-wrap"}`}>
                <h2 className='principle-p' >{howItWorks.header}</h2>
                <div
                    className='button-wrap'
                    onClick={() => showModal()}
                >
                    <p>{howItWorks.button}</p>
                </div>
                {
                    modal &&
                    <>
                        <ModalForm
                            modalStyle={modalStyle}
                            opacityPic={opacityPic}
                            opacityBack={opacityBack}
                            howItWorks={howItWorks}
                            hideModal={hideModal}
                        />
                    </>
                }
            </div>

        </>
    );
}

export default Principle;
