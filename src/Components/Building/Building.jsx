import './building.css';
import { navArray } from '../../Data/navigation.js';
import { building } from '../../Data/text.js';

function Building() {

    return (
        <>
            <a name={navArray[0]} ></a>
            <div className="section-block">
                <h2>{building.header}</h2>
            </div>
        </>
    );
}

export default Building;
