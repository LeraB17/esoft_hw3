import React from 'react';
import './ButtonIcon.css';

const ButtonIcon = ({ icon, size, onClick, alt = "" }) => {
    return (
        <button className='button__icon' onClick={onClick}>
            <img src={icon} width={size} alt={alt} />
        </button>
    );
};

export default ButtonIcon;