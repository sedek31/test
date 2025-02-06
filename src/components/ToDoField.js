import React from 'react';
import Buttons from '../Ui/Buttons';
import TextInput from '../Ui/TextInput';

const ToDoField = ({ title, btn, value, onChange, onSubmit }) => {
    const isButtonDisabled = !value.trim();
    return (
        <div className='f-c'>
            <TextInput
                title={title}
                value={value}
                onChange={onChange}
            />
             <Buttons 
                rounded 
                tone={isButtonDisabled ? "danger" : "success"}   
                onClick={onSubmit} 
                disabled={isButtonDisabled} 
            >
                {btn}
            </Buttons>     
               </div>
    );
};
export default ToDoField;