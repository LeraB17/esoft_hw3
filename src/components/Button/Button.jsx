import React from 'react';
import './Button.css';

const Button = ({ text, onClick, className }) => {
    return (
        <button className={['custom__button', className].join(' ')} onClick={onClick}>
            {text}
        </button>
    );
};

export default Button;