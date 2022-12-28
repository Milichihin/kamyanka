import './advantages.css';
import { navArray } from '../../Data/navigation.js';
import { advantages } from '../../Data/text.js';

function Advantages() {

    return (
        <>
            <a name={navArray[3]} ></a>
            <div className="section-block">
                <h2>{advantages.header}</h2>
                <p>{advantages.button}</p>
            </div>
        </>
    );
}

export default Advantages;
