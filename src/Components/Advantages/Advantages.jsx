import './advantages.css';
import { advantages } from '../../Data/text.js';

function Advantages(props) {

    return (
        <>
            <a name={props.anchor} ></a>
            <div className="section-block">
                <h2>{advantages.header}</h2>
                <p>{advantages.button}</p>
            </div>
        </>
    );
}

export default Advantages;
