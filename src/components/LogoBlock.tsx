import React from "react";
import {makeStyles, Typography} from "@material-ui/core";
import LogoImage from "./LogoImage";

interface LogoBlockProps{
    withText?:boolean
}

const useStyles = makeStyles((theme) => ({
    root: {
        display:'flex',
        alignItems:'center',
        '& h6':{
            textTransform:'uppercase',
            fontSize:'18px',
            color:"#fff",
            fontWeight:"bold"
        }

}}));

const LogoBlock : React.FC<LogoBlockProps> = ({withText}) =>{
    const classes = useStyles();
    return (<div className={classes.root}>
      <LogoImage width={"50px"}/>
        {withText && <Typography variant={"subtitle1"}>
            UnReal GO
        </Typography>}
    </div>)
}

export default LogoBlock;