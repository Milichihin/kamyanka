import './building.css';
import { navArray } from '../../Data/navigation.js';
import { building } from '../../Data/text.js';

function Building() {

    return (
        <>
            <a name={navArray[1]} ></a>
            <div className="section-block">
                <h2>{building.header}</h2>
                <p>{building.mainText}</p>
            </div>
        </>
    );
}

export default Building;
