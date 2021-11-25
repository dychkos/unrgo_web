import React from "react";
import {NavLink} from "react-router-dom";
import {makeStyles} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    root: {
        display:"flex",
        '& a':{
            marginRight:theme.spacing(4),
            fontFamily:"Rubik",
            paddingTop:"5px",
            fontWeight:"bold",
            color:"#fff",
            textDecoration:"none",
            transition:"color 0.2s ease",
            '&:hover': {
                color: theme.palette.primary.main,
            },
            '&.selected': {
                color: theme.palette.primary.main,
            },
        },
    }}));


const Navigation: React.FC = () => {
    const classes = useStyles();
    return <div className={classes.root}>
        <NavLink  to={'/blog'} activeClassName="selected">
            Блог
        </NavLink>
        <NavLink to={'/store'} activeClassName="selected">
            Магазин
        </NavLink>

    </div>
}

export default Navigation;