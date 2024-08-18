import React from 'react';

const Button: React.FC<{
    title: string,
    onClick?: () => void,
    type: 'primary' | 'secondary',
    buttonType?: 'submit',
    arrow?: boolean,
    disabled?: boolean,
    className?: string,
}> = ({ title, onClick, type, buttonType, arrow, disabled = false, className }) => {
    return (
        <button
            className={`button-${type} ${className}`}
            onClick={onClick}
            type={buttonType ? buttonType : 'button'}
            disabled={disabled}>
            <span className={`backdrop-blur-sm ${arrow ? 'after:content-["→"] after:ml-4' : ''}`}>{title}</span>
        </button>
    )
}

export default Button;