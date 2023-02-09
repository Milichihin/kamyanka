import './form.css';
import CloseCross from '../../Controls/CloseCross.jsx';
import { useForm, ValidationError } from '@formspree/react';

function ModalForm(props) {

    const [state, handleSubmit] = useForm("xgebaywr", {
        data: {
          subject: 'Заповнена форма з сайту KAMYANKA',
          pageTitle: function() {
            // This function will be evaluated at submission time
            return document.title;
          }
        }
      });

    return (
        <>
            <div className={`${"fullsize-wraper"} ${"modal-form"}`}>
                <div className='fullsize-background' style={props.opacityBack} />
                <div
                    className="modal"
                    style={props.modalStyle}
                >
                    {
                        state.succeeded &&
                        <h1>{props.howItWorks.form.thanks}</h1>
                    }
                    {
                        !state.succeeded &&
                        <>
                            <h3>{props.howItWorks.form.header}</h3>
                            <form onSubmit={handleSubmit} >
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    placeholder={props.howItWorks.form.namePlaceholder}
                                    className="input-field"
                                    required
                                >
                                </input>
                                <ValidationError
                                    prefix="Name"
                                    field="name"
                                    errors={state.errors}
                                />
                                <input
                                    id="contact"
                                    type="text"
                                    name="contact"
                                    placeholder={props.howItWorks.form.emailPlaceholder}
                                    className="input-field"
                                    required
                                >
                                </input>
                                <ValidationError
                                    prefix="Contact"
                                    field="contact"
                                    errors={state.errors}
                                />
                                <textarea
                                    id="message"
                                    name="message"
                                    type="text"
                                    rows="5" cols="21"
                                    placeholder={props.howItWorks.form.textareaPlaceholder}
                                    className={`${"textarea"} ${"input-field"}`}
                                    required
                                >
                                </textarea>
                                <ValidationError
                                    prefix="Message"
                                    field="message"
                                    errors={state.errors}
                                />
                                <div className='submit-wraper'>
                                    <div className='input-submit'>
                                        <input
                                            type="submit"
                                            disabled={state.submitting}
                                            value={props.howItWorks.form.buttonValue}
                                            className="button">

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
