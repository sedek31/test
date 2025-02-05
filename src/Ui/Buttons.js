import React from 'react';

const Buttons = ({ children, rounded, tone,onClick, disabled  }) => {
    const baseClasses = 
    "btn w-full h-full uppercase p-6 cursor-pointer my-15";
    const roundedClass = rounded ? "rounded-full" : "";
    const toneClass = tone === "danger" ? "bg-red-900" : 
                      tone === "success" ? "bg-green-700" : 
                      "bg-gray-300"; 

    return (
        <div>
            <button className={`${baseClasses}
                 ${roundedClass}
                  ${toneClass}`}
                  onClick={onClick} 
                  disabled={disabled} 
                  >
            {children}
        </button>
        </div>
    );
};

export default Buttons;