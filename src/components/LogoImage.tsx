import React from 'react';
import unrgoLogo from "../assets/img/unrgo_white_logo.png";

interface LogoImageProps  {
    width:string
}

const LogoImage : React.FC<LogoImageProps> = ({width}) => {
    return (
        <img src={unrgoLogo}  width={width} alt="Logo"/>
    );
};

export default LogoImage;