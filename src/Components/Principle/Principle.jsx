import './principle.css';
import { navArray } from '../../Data/navigation.js';
import { howItWorks } from '../../Data/text.js';

function Principle() {

    return (
        <>
            <a name={navArray[2]} ></a>
            <div className="section-block">
                <h2>{howItWorks.header}</h2>
                <p>{howItWorks.button}</p>
            </div>
        </>
    );
}

export default Principle;
