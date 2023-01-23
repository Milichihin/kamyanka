import './minqueuesblock.css';
import { queuesDescription } from '../../../Data/text.js';
import { useState } from 'react';
import QueuesDetailsWindow from '../QueuesDetails/QueuesDetailsWindow.jsx';

function MinQueuesBlock() {

    const [currentQueue, setCurrentQueue] = useState(queuesDescription[0]);
    const [toggleWindow, setToggleWindow] = useState(false);
    const [picture, setPicture] = useState(currentQueue.photos[0]);
    const [discriptionOpacity, setDiscriptionOpacity] = useState({ opacity: 1 });
    const [opacityBack, setOpacityBack] = useState({ opacity: 0 });
    const [opacityPic, setOpacityPic] = useState({ opacity: 0 });
    const [modalStyle, setModalStyle] = useState({ left: "100vw"});

    function chooseQueue(item) {
        if (item !== currentQueue) {
            setPicture(item.photos[0]);
            setCurrentQueue(item);
            setDiscriptionOpacity({ opacity: 1 })
        }
    }

    async function showDetails(){
        setOpacityBack({ opacity: 0});
        setOpacityPic({ opacity: 0});
        setModalStyle({ left: "100vw"});
        setToggleWindow(true);
        await new Promise((resolve, reject) => setTimeout(resolve, 10));
        setOpacityBack({ opacity: 1 });
        setOpacityPic({ opacity: 1});
        setModalStyle({ left: "0"});
        await new Promise((resolve, reject) => setTimeout(resolve, 200));
        document.body.style.overflow = toggleWindow ? 'auto' : 'hidden';
        document.body.style.paddingRight = toggleWindow ? '0px' : '17px';

    }

    async function hideDetails() {
        document.body.style.overflow = toggleWindow ? 'auto' : 'hidden';
        document.body.style.paddingRight = toggleWindow ? '0px' : '17px';
        setOpacityBack({ opacity: 1 });
        setOpacityPic({ opacity: 1 });
        setModalStyle({ left: "0" });
        await new Promise((resolve, reject) => setTimeout(resolve, 200));
        setOpacityBack({ opacity: 0 });
        setOpacityPic({ opacity: 0 });
        setModalStyle({ left: "100vw" });
        await new Promise((resolve, reject) => setTimeout(resolve, 400));
        setToggleWindow(false);

    }




    return (
        <>
            <div className='min-queue-list'>
                {queuesDescription.map(item => (
                    <div className='min-queue'>
                        <p
                            className={"min-select " + (item.header === currentQueue.header ? "active-select" : "")}
                            onClick={() => chooseQueue(item)}
                        >
                            {item.header}
                        </p>
                        <p
                            className={"min-detail-pic" + (item.deadline === currentQueue.deadline ? "active-select" : "")}
                            onClick={item.deadline === currentQueue.deadline ? () => showDetails() : () => chooseQueue(item)}
                            style={(item.deadline === currentQueue.deadline ? {backgroundImage: `url(${currentQueue.photo})`} : {backgroundImage: ""})}
                        >
                            {item.deadline === currentQueue.deadline ? "детальніше" : item.deadline}
                        </p>
                    </div>

                ))}

            </div>
            {
                toggleWindow &&
                <QueuesDetailsWindow
                    hideDetails={hideDetails}
                    opacityBack={opacityBack}
                    opacityPic={opacityPic}
                    modalStyle={modalStyle}
                    currentQueue={currentQueue}
                />
            }
            
        </>

    );
}

export default MinQueuesBlock;
