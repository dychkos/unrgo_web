import React from "react";
import {Button, makeStyles} from "@material-ui/core";


interface ButtonProps {
    variant:string,
    onClick?:React.MouseEventHandler
    padding?:string
    children:React.ReactElement | React.ReactNode
}



const useStyles = makeStyles((theme) => ({
    root: {
        borderRadius:"40px",
        fontFamily:"Rubik",
        fontWeight:"bold",
        fontSize:"18px",
        backgroundColor: theme.palette.primary.main,
        color:"#fff",
        border: "none",
        marginRight:"12px",
        textTransform:"none",
        padding:`${theme.spacing(0.8)}px ${theme.spacing(3)}px`,
        cursor:"pointer",
        transition:"all 0.2s ease",
        '&.outlined':{
            padding:`${theme.spacing(0.5)}px ${theme.spacing(3)}px`,
            border:`3px solid ${theme.palette.primary.main}`,
            color:theme.palette.primary.main,
            backgroundColor:"#ececec",
        },
        '&.disabled':{
            cursor: "default",
            pointerEvents: "none",
            opacity:0.7
        },

        '&:hover ': {
            boxShadow:`0px 0px 6px 0px ${theme.palette.primary.main}`,
            backgroundColor: theme.palette.primary.main,
            color:"#fff"

        },
    },

}));


const StyledButton: React.FC<ButtonProps> = ({variant,padding,children,onClick}) => {
    const classes = useStyles();

    console.log(classes)

    return <div>
        <Button onClick={onClick}
                className={classes.root + " " +variant}
                style={{
                    padding: padding!==null?padding:"",
                }}>
            {children}
        </Button>
    </div>
}

export default StyledButton;