import React from 'react';
import {makeStyles, Typography} from "@material-ui/core";

interface TagProps {
    title:string,
    className?:string
}

const useStyles = makeStyles((theme) => ({
    root:{
        backgroundColor:theme.palette.primary.main,
        letterSpacing:4,
        padding:"2px 10px",
        fontSize:"12px",
        width:"max-content",
        textTransform:"uppercase",
    }
}));

const Tag: React.FC<TagProps> = ({title,className}) => {
    const classes = useStyles();
    return (
        <div className={classes.root + " " + className}>
            <Typography style={{color:"#fff"}} >{title}</Typography>
        </div>
    );
};

export default Tag;