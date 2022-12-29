import './advantages.css';
import { advantages, advantagesArray } from '../../Data/text.js';
import { useState } from 'react';

function Advantages(props) {

    const [heading, setheading] = useState("");

    const activateHead = (advantage) => {
        setheading(advantage);
    }

    return (
        <>
            <a name={props.anchor} ></a>
            <div className="section-block">
                <h2>{advantages.header}</h2>
                <p>{advantages.subHeader}</p>
                <div className='advantage-container'>
                    <div className='advantages'>
                        {
                            Object.keys(advantagesArray).map((advantage) => (
                                <a
                                    href={"#" + advantage}
                                    className={"advantage" + (advantage === heading ? "active-advantage" : "")}
                                    onClick={() => activateHead(advantage)}
                                >
                                    {advantage}
                                </a>
                            ))
                        }
                    </div>
                    <div className='description'>
                        {
                            Object.values(advantagesArray).map((description) => (
                                <a
                                    name=""
                                >
                                    {description}
                                </a>
                            ))
                        }
                    </div>
                </div>
            </div>


        </>
    );
}

export default Advantages;
