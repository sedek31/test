import React from 'react';

const TextInput = ({ title, value, onChange }) => {
    return (
        <div className='f-c'>
            <label className='thetext bg-red-800'>{title}</label>
            <input value={value} onChange={onChange} type='text' />
        </div>
    );
};

export default TextInput;