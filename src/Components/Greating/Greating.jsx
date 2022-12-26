import './greating.css';
import { wallpaper } from '../../Data/images.js';
import { greatingText } from '../../Data/greating.js';

function Greating() {

    return (
        <div className="greating-wraper">
            <div>
                <img src={wallpaper} />
                <div>{greatingText.text1}</div>
                <div>{greatingText.text2}</div>
            </div>
            <div>{greatingText.text3}</div>
        </div>
    );
}

export default Greating;
