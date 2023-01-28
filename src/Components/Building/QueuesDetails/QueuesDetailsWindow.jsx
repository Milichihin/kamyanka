import './QueuesDetailsContent.css';
import QueuesDetailsHeaderRight from "./QueuesDetailsHeaderRight.jsx";
import DetailsModul from "./DetailsModul.jsx";

function QueuesDetailsWindow(props) {

    const isItQueue = true;

    let header;

    if (window.outerHeight < 450 && window.outerWidth > 800) {
        header = <QueuesDetailsHeaderRight
            hideDetails={props.hideDetails}
        />;
    }


    return (
        <>
            <div className='wraper-details'
                style={props.modalStyle}>
                <div
                    className="fullsize-content"
                >
                    <>
                        {header}
                    </>
                    <DetailsModul
                        currentQueue={props.currentQueue}
                        isItQueue={isItQueue}
                    />
                </div>
            </div>
            <div
                className='fullsize-details-background'
                style={props.opacityBack}
            ></div>
        </>

    );
}

export default QueuesDetailsWindow;
