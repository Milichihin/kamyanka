import './queuesblock.css';
import { queuesArray } from '../../../Data/text.js';
import { useState } from 'react';

function QueuesBlock() {


    const [queue, setQueue] = useState(queuesArray[0]);

    const chooseQueue = (item) => {
        setQueue(item)
    }

    return (
        <>
            <div className='queue-container'>
                {queuesArray.map(item => (
                    <p
                        className={"select " + (item.header === queue.header ? "active-select" : "")}
                        onClick={() => chooseQueue(item)}
                    >
                        {item.header}
                    </p>
                ))}
            </div>
            <div className='queue-wraper'>
                <div className='queue-description'>
                    <p>{queue.deadline}</p>
                    <p>{queue.type}</p>
                    <p>{queue.number}</p>
                    <p>{queue.description}</p>
                    <div className='details'>
                        {
                            queue.details &&
                            queue.details.map((item) => (
                                <p>{item}</p>
                            ))
                        }
                    </div>

                </div>

                <img src={queue.photo} />
                {/* {
                    (Object.values(queue).splice(1)).map((value) => {
                        if(value.includes("http")){
                            <img src={value}/>
                        } else if(Array.isArray(value)){
                            value.map((el)=>(
                                <p>{el}</p>
                            ))
                        } else {
                            <p>{value}</p>
                        }

                })
                } */}
            </div>
        </>
    );
}

export default QueuesBlock;
