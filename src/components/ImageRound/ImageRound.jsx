import React from 'react';
import './ImageRound.css';

const ImageRound = ({src, alt='', size=100}) => {
    return (
        <div className='image__round' style={{width: size, height: size}}>
            <img src={src} alt={alt} />
        </div>
    );
};

export default ImageRound;