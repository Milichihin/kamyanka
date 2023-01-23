import Gallery from '../Modules/Gallery/Gallery.jsx';
import Greating from './Greating/Greating.jsx';
import { conception } from '../../Data/text.js';
import { mainGallery } from '../../Data/images.js';

function Conception(props) {

    // const isItQueue = false;

    return (
        <div>
            <Greating
                anchor={props.anchor}
                greating={conception.greating}
            />
            <div className='section-block' >
                <h2>{conception.gallery.header}</h2>
                <>
                    <Gallery
                        images={mainGallery}
                        // isItQueue={isItQueue}
                    />
                </>
            </div>
        </div>
    );
}

export default Conception;
