import './building.css';
import { building } from '../../Data/text.js';
import QueuesBlock from './QueuesBlock/QueuesBlock.jsx';
import MinQueuesBlock from './MinQueuesBlock/MinQueuesBlock.jsx';
import { useEffect, useState } from 'react';

function Building(props) {

    const [screenHeight, setScreenHeight] = useState(window.outerHeight);
    const [screenWidth, setScreenWidth] = useState(window.outerWidth);

    let queueBlock;

    window.addEventListener('resize',(e) => {
        setScreenHeight(window.outerHeight)
        setScreenWidth(window.outerWidth)
    });


    if (window.outerHeight < 450) {
        queueBlock = <MinQueuesBlock />;
    } else if (window.outerWidth < 450) {
        queueBlock = <MinQueuesBlock />;
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
