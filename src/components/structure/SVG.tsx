import React from 'react';

interface SVGProps{
    icon:string
}

const Svg:React.FC<SVGProps> = ({icon}) => {
    return (
        <svg className="office" xmlns={icon} viewBox="0 0 188.5 188.5" >

        </svg>
    );
};

export default Svg;