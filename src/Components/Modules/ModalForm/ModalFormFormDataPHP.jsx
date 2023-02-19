import './form.css';
import CloseCross from '../../Controls/CloseCross.jsx';
import { useState } from 'react';

function ModalForm(props) {

    const [isSubmited, setSubmited] = useState(false);
    const [isSend, setIsSend] = useState(false);
    const [formOpacity, setFormsOpacity] = useState({ opacity: 1 });
    // const [thanksOpacity, setThanksOpacity] = useState({ opacity: 0 });
    // const [sendingOpacity, setSendingOpacity] = useState({ opacity: 1 });


    const oldForm = document.forms.sendform;

    async function handleSubmit() {

        setSubmited(true);

        let formData = new FormData(oldForm);
        let xhr = new XMLHttpRequest();

        xhr.open('POST', 'sendMail.php', true);
        xhr.send(formData);

        xhr.onreadystatechange = function () {

            // if (xhr.readyState === 4) {
            //     console.log('отправляется');
            //     console.log('xhr.readyState = ' + xhr.readyState);
            //     if (xhr.status === 200) {
            //         console.log('отправлено');
            //         console.log('xhr.status = ' + xhr.status);
            //     }
            // }
            if (xhr.readyState === 4) {
                if (xhr.status === 200) {
                    setIsSend(true);
                    
                }
            }
        }

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
                    <>
                        <h1
                            className='thanks'
                            style={isSubmited&&!isSend?{opacity: "1"}:{opacity: "0"}}
                        >
                            {props.howItWorks.form.sending}
                        </h1>:
                        <h1
                            className='thanks'
                            style={isSend?{opacity: "1"}:{opacity: "0"}}
                        >
                            {props.howItWorks.form.thanks}
                        </h1>
                    </>
                    {
                        !isSubmited &&
                        <div
                            className='formwraper'
                            style={formOpacity}
                        >
                            <h3>{props.howItWorks.form.header}</h3>
                            <form
                                onSubmit={handleSubmit}
                                name="sendform"
                                method="post"
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
                                        >
                                        </input>
                                    </div>
                                </div>
                            </form>
                            <h3 style={{ fontWeight: '300' }}>{props.howItWorks.form.ps} </h3>
                        </div>
                    }
                </div>
                <CloseCross styles={props.opacityPic} onClick={props.hideModal} />
            </div>
        </>
    );
}

export default ModalForm;
