import './greating.css';
import { navArray } from '../../Data/navigation.js';
import { wallpaper } from '../../Data/images.js';
import { greating } from '../../Data/text.js';

function Greating() {

    return (
        <div>
            <a name={navArray[0]} ></a>
            <div className="wallpaper-wraper">
                <img src={wallpaper} />
                <div className="gradient"></div>
                <div className="greating-slogan">{greating.slogan}</div>
            </div>
            <div className="section-block" style={{ margin: '-170px 0 0 0' }}>
                <h2 style={{ color: 'white', width: "70%" }}>
                    {greating.header}
                </h2>
                <p style={{ marginTop: '40px' }}>
                    {greating.text}
                </p>
            </div>
        </div>
    );
}

export default Greating;
