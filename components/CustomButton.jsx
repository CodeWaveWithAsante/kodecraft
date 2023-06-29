import React from 'react'

const CustomButton = ({ title, rightIcon, containerStyles }) => {
    return (
        <button className={`inline-flex items-center ${containerStyles}`}>{title}
            {rightIcon && <div className='ml-2'>{rightIcon}</div>}
        </button>
    )
}

export default CustomButton