import React, {MouseEventHandler} from 'react';
import CloseIcon from '@material-ui/icons/Close';
import {makeStyles} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    root: {
        width:40,
        height:40,
        display:"flex",
        alignItems:"center",
        justifyContent:"center",
        cursor:"pointer",
        color:"#fff",
        backgroundColor:theme.palette.primary.main,
        borderRadius:"10px"
    },

}));


interface CloseButtonProps{
    onClose:MouseEventHandler
}

const CloseButton:React.FC<CloseButtonProps> = ({onClose}) => {
    const classes = useStyles();
    return (
        <div className={classes.root} onClick={onClose}>
            <CloseIcon/>
            
        </div>
    );
};

export default CloseButton;