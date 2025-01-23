import React from 'react';

const Buttons = ({ btn, value, onSubmit }) => {
    return (
        <div>
            <button
                className={`btn w-full h-full uppercase p-6 cursor-pointer rounded-full my-15  ${!value.trim() ? "bg-red-900" : "bg-green-800"}`}
                onClick={onSubmit}
                disabled={!value.trim()} 
            >
                {btn}
            </button>
        </div>
    );
};

export default Buttons;