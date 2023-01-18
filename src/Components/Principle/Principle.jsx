import './principle.css';
import { howItWorks } from '../../Data/text.js';
import { closeButton } from '../../Data/images.js';
import { useState } from 'react';
import ModalForm from './ModalForm.jsx'

function Principle(props) {

    const [modal, setModal] = useState(false);
    const [opacityBack, setOpacityBack] = useState({ opacity: 0 });
    const [opacityPic, setOpacityPic] = useState({ opacity: 0 });

    // const screenWidth = window.screen.width;
    const screenHeight = window.screen.height;
    

    async function showModal() {
        setModal(!modal);
        setOpacityBack({ opacity: 0 });
        setOpacityPic({ opacity: 0 });
        if (screenHeight > 650) await new Promise((resolve, reject) => setTimeout(resolve, 10));
        setOpacityBack({ opacity: 0.85 });
        setOpacityPic({ opacity: 1 });
        document.body.style.overflow = modal ? 'auto' : 'hidden';
        document.body.style.paddingRight = modal ? '0px' : '17px';
        document.getElementById("fix-menu").style.paddingRight = modal ? '0px' : '17px';
    };

    async function hideModal() {
        setOpacityBack({ opacity: 0.85 });
        setOpacityPic({ opacity: 1 });
        if (screenHeight > 650) await new Promise((resolve, reject) => setTimeout(resolve, 10));
        setOpacityBack({ opacity: 0 });
        setOpacityPic({ opacity: 0 });
        setModal(!modal);
        document.body.style.overflow = modal ? 'auto' : 'hidden';
        document.body.style.paddingRight = modal ? '0px' : '17px';
        document.getElementById("fix-menu").style.paddingRight = modal ? '0px' : '17px';
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
