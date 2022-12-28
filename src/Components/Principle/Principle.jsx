import './principle.css';
import { navArray } from '../../Data/navigation.js';
import { howItWorks } from '../../Data/text.js';

function Principle(props) {

    return (
        <>
            {/* <a name={navArray[2]} ></a> */}
            <a name={props.anchor} ></a>
            <div className="section-block">
                <h2>{howItWorks.header}</h2>
                <p>{howItWorks.button}</p>
            </div>
        </>
    );
}

export default Principle;
