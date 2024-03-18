import React from 'react';

interface ButtonProps {
    type: "button" | "submit" | "reset" | undefined;
    onClick: () => void;
}

const Button: React.FC<ButtonProps> = ({ type,onClick }) => {
    return (
        <button type={type} onClick={onClick}>Изчисли</button>
    );
};

export default Button;
