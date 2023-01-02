import './contacts.css';
import { contacts } from '../../Data/text.js';

function Contacts(props) {

    return (
        <>
            <a name={props.anchor} ></a>
            <div className="contacts-wrap">
                <div>
                    <h2>{contacts.header}</h2>
                    <p>{contacts.name}</p>
                    <p>{contacts.phone}</p>
                    <p>{contacts.email}</p>
                </div>

            </div>
        </>
    );
}

export default Contacts;
