import React from 'react';
import Buttons from '../Ui/Buttons';
import TextInput from '../Ui/TextInput';

const ToDoField = ({ title, btn, value, onChange, onSubmit }) => {
    return (
        <div className='f-c'>
            <TextInput
                title={title}
                value={value}
                onChange={onChange}
            />
            <Buttons btn={btn} value={value} onSubmit={onSubmit} />
        </div>
    );
};
export default ToDoField;