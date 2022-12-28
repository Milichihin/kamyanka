import './contacts.css';
import { navArray } from '../../Data/navigation.js';
import { contacts } from '../../Data/text.js';

function Contacts() {

    return (
        <>
            <a name={navArray[4]} ></a>
            <div className="section-block">
                <h2>{contacts.header}</h2>
                <p>{contacts.name}</p>
                <p>{contacts.phone}</p>
                <p>{contacts.email}</p>
            </div>
        </>
    );
}

export default Contacts;
