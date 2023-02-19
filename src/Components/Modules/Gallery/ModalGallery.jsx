
import React from 'react';
import './gallery.css';
import PreviousArrow from '../../Controls/PreviousArrow.jsx';
import NextArrow from '../../Controls/NextArrow.jsx';
import CloseCross from '../../Controls/CloseCross.jsx';

function ModalGallery(props) {

    return (
        <div className='fullsize-wraper'>
            <div
                className='fullsize-background'
                style={props.opacityBack}
                onClick={() => props.changeImage()}
            />
            {
                props.isLoading &&
                <h1 style={{ color: 'white' }}>.....</h1>
            }
            {
                !props.isLoading &&
                <img
                    src={props.picLink}
                    className='fullsize-img'
                    style={props.opacityPic}
                />
            }
            <CloseCross onClick={props.changeImage} styles={props.opacityButtons} />
            <PreviousArrow onClick={props.changeImage} styles={props.opacityButtons} />
            <NextArrow onClick={props.changeImage} styles={props.opacityButtons} />
        </div>
    )
}

export default ModalGallery;