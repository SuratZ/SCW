import { Button } from '@mui/material';
import React from 'react';

type RoundedButtonProps = {
    children: React.ReactNode;
    onClick?: React.MouseEventHandler<HTMLButtonElement>;
    style?: React.CSSProperties;
};

const commonStyle: React.CSSProperties = {
    borderRadius: '999px',
    border: 'none',
    padding: '0.5em 1.5em',
    fontSize: '1rem',
    outline: 'none',
    background: '#007bff',
    color: '#fff',
    cursor: 'pointer',
};

const RoundedButton: React.FC<RoundedButtonProps> = ({
    children,
    onClick,
    style,
}) => (
    // <button
    //     type={type}
    //     onClick={onClick}
    //     style={{ ...commonStyle, ...style }}
    // >
    //     {children}
    // </button>
    <Button variant="contained" onClick={onClick} style={{ ...commonStyle, ...style }} >
        {children}
    </Button>
);

export default RoundedButton;
