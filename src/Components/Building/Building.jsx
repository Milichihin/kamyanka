import './building.css';
import { building } from '../../Data/text.js';
import QueuesBlock from './QueuesBlock/QueuesBlock.jsx';
import QueuesBlockWOawait from './QueuesBlock/QueuesBlockWOawait.jsx';

function Building(props) {

    return (
        <>
            <a className='anchor-padding' name={props.anchor} ></a>
            <div className="section-block">
                <h2>{building.header}</h2>
                <div className="subtitle" >
                    <p>{building.mainText1}</p>
                    <p>{building.mainText2}</p>
                    <p>{building.mainText3}</p>
                </div>
                {/* <QueuesBlock /> */}
                <QueuesBlockWOawait />
            </div>
        </>
    );
}

export default Building;
