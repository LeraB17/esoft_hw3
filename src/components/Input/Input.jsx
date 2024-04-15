import React from 'react';
import './Input.css';

const Input = ({ value, onChange, name, className, label = "", ...props }) => {
    return (
        <label className='custom__input__label'>
            {label}
            <input
                value={value ? value : ''}
                onChange={onChange}
                name={name}
                className={['custom__input', className].join(' ')}
                {...props}
            />
        </label>
    );
};

export default Input;