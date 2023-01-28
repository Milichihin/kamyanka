import './building.css';
import { building } from '../../Data/text.js';
import QueuesBlock from './QueuesBlock/QueuesBlock.jsx';
import MinQueuesBlockRight from './MinQueuesBlockRight/MinQueuesBlockRight.jsx';

function Building(props) {

    let queueBlock;


    if (window.outerHeight < 450) {
        queueBlock = <MinQueuesBlockRight />;
    } else if (window.outerWidth < 450) {
        queueBlock = <MinQueuesBlockRight />;
    } else {
        queueBlock = <QueuesBlock />;
    }


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
                <>
                    {queueBlock}
                </>
            </div>
        </>
    );
}

export default Building;
