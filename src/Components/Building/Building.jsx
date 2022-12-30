import './building.css';
import { building } from '../../Data/text.js';
import QueuesBlock from './QueuesBlock/QueuesBlock.jsx';

function Building(props) {

    return (
        <>
            <a name={props.anchor} ></a>
            <div className="section-block">
                <h2>{building.header}</h2>
                <p>{building.mainText}</p>
            </div>
            <QueuesBlock />
        </>
    );
}

export default Building;
