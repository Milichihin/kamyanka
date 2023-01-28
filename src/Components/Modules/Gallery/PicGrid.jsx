import React from 'react';
import './gallery.css';
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";

function PicGrid(props) {
    
    return (
        <ResponsiveMasonry
            columnsCountBreakPoints={(props.isItQueue)?{ 800: 2 }:{ 450: 2, 500: 3, 800: 4 }}
        >
            <Masonry gutter='10px'>
                {props.images.map((link, i) => (
                    <img
                        key={i}
                        src={link}
                        className="gallery-img"
                        onClick={() => props.viewImage(link)}
                    />
                ))}
            </Masonry>
        </ResponsiveMasonry>
    )
}

export default PicGrid;