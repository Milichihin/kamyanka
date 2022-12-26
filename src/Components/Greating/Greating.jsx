import './greating.css';
import { wallpaper } from '../../Data/images.js';
import { greatingText } from '../../Data/greating.js';

function Greating() {

    return (
        <div>
            <div className="wallpaper-wraper">
                <img src={wallpaper} />
                <div className="greating-slogan">{greatingText.slogan}</div>
                <div className="greating-header">{greatingText.header}</div>
            </div>
            <div className="greating-text">
                {greatingText.text}
            </div>
        </div>
    );
}

export default Greating;
