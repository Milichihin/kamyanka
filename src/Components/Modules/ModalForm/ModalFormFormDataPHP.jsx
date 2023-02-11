import './form.css';
import CloseCross from '../../Controls/CloseCross.jsx';
import { useState } from 'react';

function ModalForm(props) {

    const [isSend, setIsSend] = useState(false);
    const [thanksOpacity, setThanksOpacity] = useState({ opacity: 0 });

    const oldForm = document.forms.sendform;


    async function showThanks() {
        console.log('дошли до showThanks()');
        setIsSend(true);
        await new Promise((resolve, reject) => setTimeout(resolve, 100));
        setThanksOpacity({opacity: 0});
        await new Promise((resolve, reject) => setTimeout(resolve, 500));
        setThanksOpacity({opacity: 1});
    }

    async function  handleSubmit(){

        showThanks();

        console.log('зашли в хендлерсабмит');
        
        let formData = new FormData(oldForm);

        let xhr = new XMLHttpRequest();

        xhr.onreadystatechange = function () {
            
            console.log('пока не отправлено');
            console.log('xhr.readyState = ' + xhr.readyState);
            console.log('xhr.status = ' + xhr.status);

            if (xhr.readyState === 4) {
                console.log('отправляется');
                console.log('xhr.readyState = ' + xhr.readyState);
                if (xhr.status === 200) {
                    console.log('отправлено');
                    console.log('xhr.status = ' + xhr.status);
                }
            }
        }

        xhr.open('POST', 'smtpSandBox2.php', true);
        xhr.send(formData);

        oldForm.reset();
    }

    return (
        <>
            <div className={`${"fullsize-wraper"} ${"modal-form"}`}>
                <div className='fullsize-background' style={props.opacityBack} />
                <div
                    className="modal"
                    style={props.modalStyle}
                >
                    {
                        isSend &&
                        <h1
                            className='thanks'
                            style={thanksOpacity}
                        >
                            {props.howItWorks.form.thanks}
                        </h1>
                    }
                    {
                        !isSend &&
                        <>
                            <h3>{props.howItWorks.form.header}</h3>
                            <form
                                onSubmit={handleSubmit}
                                name="sendform"
                                method="post"
                            // action="./smtpSandBox2.php"
                            >
                                <input
                                    type="text"
                                    name="name"
                                    placeholder={props.howItWorks.form.namePlaceholder}
                                    className="input-field"
                                    required
                                />
                                <input
                                    type="text"
                                    name="email"
                                    placeholder={props.howItWorks.form.emailPlaceholder}
                                    className="input-field"
                                    required
                                />
                                <textarea
                                    type="text"
                                    rows="5" cols="21"
                                    placeholder={props.howItWorks.form.textareaPlaceholder}
                                    name="message"
                                    className={`${"textarea"} ${"input-field"}`}
                                    required
                                />
                                <div className='submit-wraper'>
                                    <div className='input-submit'>
                                        <input
                                            type="submit"
                                            value={props.howItWorks.form.buttonValue}
                                            className="button"                                            
                                            // onClick={showThanks}
                                        >
                                        </input>
                                    </div>
                                </div>
                            </form>
                            <h3 style={{ fontWeight: '300' }}>{props.howItWorks.form.ps} </h3>
                        </>
                    }
                </div>
                <CloseCross styles={props.opacityPic} onClick={props.hideModal} />
            </div>
        </>
    );
}

export default ModalForm;
