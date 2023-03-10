import './minqueuesblock.css';
import { queuesDescription } from '../../../Data/text.js';
import { useState } from 'react';
import QueuesDetailsWindow from '../QueuesDetails/QueuesDetailsWindow.jsx';

function MinQueuesBlock() {

    const [currentQueue, setCurrentQueue] = useState(queuesDescription[0]);
    const [toggleWindow, setToggleWindow] = useState(false);
    const [opacityBack, setOpacityBack] = useState({ opacity: 0, backgroundColor: "rgba(0, 0, 0, 0.716)" });
    const [modalStyle, setModalStyle] = useState({ left: "100vw"});

    function chooseQueue(item) {
        if (item !== currentQueue) {
            setCurrentQueue(item);
        }
    }

    async function showDetails(){
        setOpacityBack({ opacity: 0, backgroundColor: "rgba(0, 0, 0, 0.716)"});
        setModalStyle({ left: "100vw"});
        setToggleWindow(true);
        await new Promise((resolve, reject) => setTimeout(resolve, 10));
        setOpacityBack({ opacity: 1, backgroundColor: "rgba(0, 0, 0, 0.716)" });
        setModalStyle({ left: "0"});
        await new Promise((resolve, reject) => setTimeout(resolve, 200));
        document.body.style.overflow = toggleWindow ? 'auto' : 'hidden';
        document.body.style.paddingRight = toggleWindow ? '0px' : '17px';
        await new Promise((resolve, reject) => setTimeout(resolve, 50));
        setOpacityBack({ opacity: 1, backgroundColor: "white"});

    }

    async function hideDetails() {
        document.body.style.overflow = toggleWindow ? 'auto' : 'hidden';
        document.body.style.paddingRight = toggleWindow ? '0px' : '17px';
        setOpacityBack({ opacity: 1, backgroundColor: "rgba(0, 0, 0, 0.716)" });
        setModalStyle({ left: "0" });
        await new Promise((resolve, reject) => setTimeout(resolve, 200));
        setOpacityBack({ opacity: 0, backgroundColor: "rgba(0, 0, 0, 0.716)" });
        await new Promise((resolve, reject) => setTimeout(resolve, 10));
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
                            {item.deadline === currentQueue.deadline ? "????????????????????" : item.deadline}
                        </p>
                    </div>

                ))}

            </div>
            {
                toggleWindow &&
                <QueuesDetailsWindow
                    hideDetails={hideDetails}
                    opacityBack={opacityBack}
                    modalStyle={modalStyle}
                    currentQueue={currentQueue}
                />
            }
            
        </>

    );
}

export default MinQueuesBlock;
