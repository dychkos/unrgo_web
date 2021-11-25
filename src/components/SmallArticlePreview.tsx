import React from 'react';
import {makeStyles, Paper, Typography} from "@material-ui/core";
import Tag from "./structure/Tag";

const useStyles = makeStyles((theme)=>({
    root:{
        position:"relative",
        width:230,
        padding:"60px 15px 15px 15px",
        height:"max-content",
        transition:"transform 0.4s ease",
        background:"linear-gradient(325.08deg, #ECECEC 14.83%, #FFFFFF 52.42%)",
        borderRadius: 20,
        cursor:"pointer",
        "&:hover":{
            transform:"scale(1.05)"
        }
    },
    tag:{
        position:"absolute",
        top:25,
        right:0
    }


}))


const SmallArticlePreview = () => {
    const classes=useStyles();
    return (
        <Paper className={classes.root}>
            <Tag className={classes.tag} title={"СПОРт"}/>
            <Typography variant={"h3"}>
               Таблица Менделеева
            </Typography>
            <Typography variant={"subtitle1"}>
                Что можно сказать об идее интерактивной таблицы Менделеева? Идея очень хорошая, но первый блин бывает комом.
            </Typography>

        </Paper>
    );
};

export default SmallArticlePreview;