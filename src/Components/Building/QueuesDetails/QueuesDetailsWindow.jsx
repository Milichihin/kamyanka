// import './QueuesDetailsWindow.css';
// import '../../Conception/Gallery/gallery.css';
import './QueuesDetailsContent.css';
import { queuesDescription } from '../../../Data/text.js';
import { useState } from 'react';
import PreviousArrow from '../../Controls/PreviousArrow.jsx';
import NextArrow from '../../Controls/NextArrow.jsx';
import QueuesDetailsHeader from "./QueuesDetailsHeader.jsx";
import DetailsModul from "./DetailsModul.jsx";

function QueuesDetailsWindow(props) {

    const isItQueue = true;

    return (
        <>
            <div className='wraper-details'
                style={props.modalStyle}>
                <div
                    className="fullsize-content"
                >
                    <QueuesDetailsHeader
                        hideDetails={props.hideDetails}
                    />
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
