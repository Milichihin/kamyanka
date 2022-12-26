import './greating.css';
import { wallpaper } from '../../Data/images.js';
import { greatingText } from '../../Data/greating.js';

function Greating() {

    return (
        <div>
            <div className="wallpaper-wraper">
                <img src={wallpaper} />
                <div className="gradient"></div>
                <div className="greating-slogan">{greatingText.slogan}</div>
                <h1>{greatingText.header}</h1>
            </div>
            <div className="greating-text">
                {greatingText.text}
            </div>
        </div>
    );
}

export default Greating;
