import './greating.css';
import { wallpaper } from '../../../Data/images.js';

function Greating(props) {

    const greating = props.greating;

    return (
        <div>
            <a className='anchor-padding' name={props.anchor} ></a>
            <div className="wallpaper-wraper">
                <img src={wallpaper} />
                
                <div className="gradient"></div>
                <div className="greating-slogan">{greating.slogan}</div>
                <h2>
                    {greating.header}
                </h2>
            </div>
            <div 
                className="section-block"
            >
                <p style={{ marginTop: '40px' }}>
                    <span style={{ fontWeight: '700', fontSize: "1.1em", color: "red"}}>{greating.boldText}</span>{greating.text}
                    <br/><br/><span>{greating.boldText}</span>
                </p>
            </div>
        </div>
    );
}

export default Greating;
