import './greating.css';
import { wallpaper } from '../../../Data/images.js';
import { greating } from '../../../Data/text.js';

function Greating(props) {

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
                // style={{ marginTop: '-170px' }}
            >
                {/* <h2 style={{ color: 'white', width: "70%" }}>
                    {greating.header}
                </h2> */}
                <p style={{ marginTop: '40px' }}>
                    {/* <b>{greating.boldText}</b>{greating.text} */}
                    <span style={{ fontWeight: '700', fontSize: "1.1em"}}>{greating.boldText}</span>{greating.text}
                </p>
            </div>
        </div>
    );
}

export default Greating;
