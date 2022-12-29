import Gallery from './Gallery/Gallery.jsx';
import Greating from './Greating/Greating.jsx';

function Conception(props) {

    return (
        <div>
            <Greating anchor={props.anchor}/>
            <Gallery />
        </div>
    );
}

export default Conception;
