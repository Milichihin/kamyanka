import './queuesblock.css';
import { queuesDescription } from '../../../Data/text.js';
import PreviousArrow from '../../Controls/PreviousArrow.jsx';
import NextArrow from '../../Controls/NextArrow.jsx';

function QueueWraper(props) {

    return (
        <>
            <div className='queue-window' style={props.opacity}>
                <>
                    <img className='queue-image' src={props.picture} />
                    {
                        (props.queue !== queuesDescription[0]) &&
                        <div className="blacking" style={props.discriptionOpacity}></div>
                    }
                </>

                <div className='queue-description'>
                    <div className='title-pad-wraper'>
                        <div className='title-pad'>
                            <p>{props.queue.deadline}</p>
                        </div>
                        <div className='title-pad'>
                            <p>{props.queue.type}</p>
                        </div>
                        <div className='title-pad'>
                            <p>{props.queue.number}</p>
                        </div>
                    </div>

                    <div className='queue-subdescription'>
                        <p style={props.discriptionOpacity}>{props.queue.description}</p>
                        <div className='details' style={props.discriptionOpacity}>
                            {
                                props.queue.details &&
                                props.queue.details.map((item) => (
                                    <div className='detail-item'>
                                        <p>- {item[1]}</p>
                                    </div>

                                ))
                            }
                        </div>
                    </div>
                </div>

                <PreviousArrow onClick={props.onClick} />
                <NextArrow onClick={props.onClick} />

            </div>
        </>
    );
}

export default QueueWraper;
