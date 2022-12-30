import './queuesblock.css';
import { queuesArray } from '../../../Data/text.js';
import { useState } from 'react';

function QueuesBlock() {


    const [queue, setQueue] = useState(queuesArray[0]);

    const chooseQueue = (queue) => {
        setQueue(queue)
    }

    return (
        <>
            <div>
                {queuesArray.map(queue => (
                    <div onClick={() => chooseQueue(queue)}>
                        {queue.header}
                    </div>
                ))}
            </div>
            <div>
                <p>{queue.deadline}</p>
                <p>{queue.type}</p>
                <p>{queue.number}</p>
                <p>{queue.description}</p>
                {
                    queue.details &&
                    queue.details.map((item) => (
                        <p>{item}</p>
                    ))
                }
                <img src={queue.photo}/>
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
