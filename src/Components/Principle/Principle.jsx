import './principle.css';
import './form.css';
import { howItWorks } from '../../Data/text.js';
import { closeButton } from '../../Data/images.js';
import { useState } from 'react';

function Principle(props) {

    const [modal, setModal] = useState(false);
    const [opacityBack, setOpacityBack] = useState({ opacity: 0 });
    const [opacityPic, setOpacityPic] = useState({ opacity: 0 });

    async function showModal() {
        setModal(!modal);
        setOpacityBack({ opacity: 0 });
        setOpacityPic({ opacity: 0 });
        await new Promise((resolve, reject) => setTimeout(resolve, 10));
        setOpacityBack({ opacity: 0.85 });
        setOpacityPic({ opacity: 1 });
        document.body.style.overflow = modal ? 'auto': 'hidden';
    };

    async function hideModal() {
        setOpacityBack({ opacity: 0.85 });
        setOpacityPic({ opacity: 1 });
        await new Promise((resolve, reject) => setTimeout(resolve, 10));
        setOpacityBack({ opacity: 0 });
        setOpacityPic({ opacity: 0 });
        setModal(!modal);
        document.body.style.overflow = modal ? 'auto': 'hidden';
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
                        <div className={`${"fullsize-wraper"} ${"modal-form"}`}>
                            <div className='fullsize-background' style={opacityBack} />
                            <div className="modal" style={opacityPic}>
                                <>
                                    <h3>{howItWorks.form.header}</h3>
                                    <form method="post" action="https://formspree.io/milichihin@gmail.com" target="_blank">
                                        <input
                                            type="text"
                                            name="name"
                                            placeholder={howItWorks.form.namePlaceholder}>

                                        </input>
                                        <input
                                            type="text"
                                            name="email"
                                            placeholder={howItWorks.form.emailPlaceholder}>

                                        </input>
                                        <textarea
                                            className="textarea"
                                            rows="5" cols="21"
                                            placeholder={howItWorks.form.textareaPlaceholder}
                                            name="message">

                                        </textarea>
                                        <input
                                            type="submit"
                                            className="button"
                                            value={howItWorks.form.buttonValue}>

                                        </input>
                                    </form>
                                    <h3 style={{fontWeight: '300'}}>{howItWorks.form.ps} </h3>
                                </>
                            </div>
                            <div className='cross-container' onClick={() => hideModal()}>
                                <img src={closeButton} className='closeCross' />
                            </div>
                        </div>
                    </>
                }
            </div>

        </>
    );
}

export default Principle;
