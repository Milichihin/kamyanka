import './advantages.css';
import { advantages, advantagesArray } from '../../Data/text.js';
import { useState } from 'react';
import { async } from 'q';

function Advantages(props) {

    const [heading, setHeading] = useState(Object.keys(advantagesArray)[0]);
    const [opacity, setOpacity] = useState({ opacity: 1 });

    async function activateHead(advantage) {
        setOpacity({ opacity: 0 });
        await new Promise((resolve, reject) => setTimeout(resolve, 100));
        setOpacity({ opacity: 1 });
        setHeading(advantage);
    }

    return (
        <>
            <a className='anchor-padding' name={props.anchor} ></a>
            <div className="section-block">
                <h2>{advantages.header}</h2>
                <p className="subtitle">{advantages.subHeader}</p>
                <div className='advantage-container'>
                    <div className='advantages'>
                        {
                            Object.keys(advantagesArray).map((advantage) => (
                                <p
                                    className={"advantage " + (advantage === heading ? "active-advantage" : "")}
                                    onClick={() => activateHead(advantage)}
                                >
                                    {advantage}
                                </p>
                            ))
                        }
                    </div>
                    <p className='description' style={opacity}>
                        {advantagesArray[heading]}
                    </p>
                </div>
            </div>


        </>
    );
}

export default Advantages;
