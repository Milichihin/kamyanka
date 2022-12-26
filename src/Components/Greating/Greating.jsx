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
            </div>
            <div className="section-block" style={{ margin: '-170px 0 0 0' }}>
                <h2 style={{ color: 'white', width: "70%" }}>
                    {greatingText.header}
                </h2>
                <p style={{ marginTop: '40px' }}>
                    {greatingText.text}
                </p>
            </div>
        </div>
    );
}

export default Greating;
