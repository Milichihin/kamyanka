import './QueuesDetailsContent.css';
import Gallery from '../../Modules/Gallery/Gallery.jsx'

function DetailsModul(props) {
    
    const currentQueue = props.currentQueue;
    const images = currentQueue.photos;
    const discriptionOpacity = { opacity: 1 };


    return (
        <>
            <div className='queue-description-mini'>
                <h2 className='title-pad-mini'>{currentQueue.header}</h2>
                <div className='short-description-mini' >
                    <p className='title-pad-mini'>{currentQueue.deadline}</p>
                    <p className='title-pad-mini'>{currentQueue.type}</p>
                    <p className='title-pad-mini'>{currentQueue.number}</p>
                </div>
                <div className={currentQueue.description && 'queue-subdescription-mini'} >
                    {
                        currentQueue.description &&
                        <>
                            <div className='left-description'>
                                <p style={discriptionOpacity}>{currentQueue.description}</p>
                                <div className='details-mini' style={discriptionOpacity}>
                                    {
                                        currentQueue.details.map((item) => (
                                            <div className='detail-item-mini'>
                                                <p>- {item[1]}</p>
                                            </div>

                                        ))
                                    }
                                </div>
                            </div>
                        </>
                    }
                    <div className='rigth-description'>
                        <Gallery
                            images={images}
                            isItQueue={props.isItQueue}
                        />
                    </div>
                </div>
            </div>
        </>


    );
}

export default DetailsModul;