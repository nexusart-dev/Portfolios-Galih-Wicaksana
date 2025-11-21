import React from 'react';

interface ExpandIconProps extends React.SVGProps<SVGSVGElement> {
    size?: number;
    className?: string;
}

const OpenDialogIcon: React.FC<ExpandIconProps> = ({ 
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
            className={`lucide lucide-expand ${className}`}
            {...props}
        >
            <path d="m15 15 6 6"/>
            <path d="m15 9 6-6"/>
            <path d="M21 16v5h-5"/>
            <path d="M21 8V3h-5"/>
            <path d="M3 16v5h5"/>
            <path d="m3 21 6-6"/>
            <path d="M3 8V3h5"/>
            <path d="M9 9 3 3"/>
        </svg>
    );
};

export default OpenDialogIcon;