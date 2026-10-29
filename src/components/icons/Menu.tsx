import React from 'react';

interface MenuIconProps extends React.SVGProps<SVGSVGElement> {
    size?: number;
    className?: string;
}

const MenuIcon: React.FC<MenuIconProps> = ({ 
    size = 24, 
    className = "",
    ...props 
}) => {
    return (
        <svg 
            xmlns="http://www.w3.org/2000/svg" 
            width={size}
            height={size}
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            className={`lucide lucide-menu ${className}`}
            {...props}
        >
            <path d="M4 5h16"/>
            <path d="M4 12h16"/>
            <path d="M4 19h16"/>
        </svg>
    );
};

export default MenuIcon;