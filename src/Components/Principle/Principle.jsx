import './principle.css';
import { howItWorks } from '../../Data/text.js';

function Principle(props) {

    return (
        <>
            <a name={props.anchor} ></a>                
            <div className={`${"section-block"} ${"principle-wrap"}`}>
                <h2>{howItWorks.header}</h2>
                <div className='button-wrap' >
                    <p>{howItWorks.button}</p>
                </div>
            </div>
        </>
    );
}

export default Principle;
