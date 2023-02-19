import './advantages.css';
import { advantagesTitles, advantagesList } from '../../Data/text.js';
import { useState } from 'react';

function Advantages(props) {

    const [heading, setHeading] = useState(Object.keys(advantagesList)[0]);
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
                <h2>{advantagesTitles.header}</h2>
                <p className="subtitle">{advantagesTitles.subHeader}</p>
                <div className='advantage-container'>
                    <div className='advantages'>
                        {
                            Object.keys(advantagesList).map((advantage) => (
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
                        {
                            advantagesList[heading].map((paragraph) => (
                                <p>
                                    {paragraph}
                                </p>
                            ))
                        }
                    </p>
                </div>
            </div>
        </>
    );
}

export default Advantages;
