import React from 'react';
import background from "../assets/img/article.png";
import {Box, makeStyles, Paper, Typography} from "@material-ui/core";
import Tag from "./structure/Tag";
import Message from '@material-ui/icons/MessageOutlined';
import Watchers from '@material-ui/icons/RemoveRedEyeOutlined';
import "../App.css";

const useStyles = makeStyles((theme)=>({
    root:{
        minWidth:500,
        marginBottom:"20px",
        height:"100%",
        position:"relative",
        overflow:'hidden',
        borderRadius:20,
        padding:theme.spacing(3),
        backgroundRepeat:"no-repeat",
        transition:"background-size 0.4s ease",
        cursor:"pointer",
        background:"none",
        backgroundSize: "100%",
        '&::before ':{
            position: "absolute",
            top: "0", left: "-75%",
            zIndex: "2",
            display: "block",
            content: "''",
            width: "50%",
            height: "100%",
            background: "linear-gradient(to right, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, .3) 100%)",
            webkitTransform: "skewX(-25deg)", transform: "skewX(-25deg)"
        },
        '&:hover::before':{
            animation:"shine .6s"
        },
        '&:hover':{
            backgroundSize:"110%",
            //transform:" scale(1.1)"
        },
        '& p':{
            color:"#000"
        }
    },
    paper:{
        padding:15,
        width:300,
        borderRadius:20,
        height:"max-content",

    },
    textContent:{
        marginTop:theme.spacing(2),
        marginBottom:theme.spacing(2),
    },
    footer:{
        paddingTop:"8px",
        '& svg':{
            marginRight:5,
        }
    }

}))

const ArticlePreview = () => {
    const classes = useStyles();
    console.log(background)
    return (
        <div className={classes.root} style={{backgroundImage:`url(${background})`}} >
           <Paper className={classes.paper}>
               <Box display={"flex"} alignItems={"center"} justifyContent={"space-between"}>
                   <Tag title={"Успех"}/>
                   <Typography variant={"subtitle1"}>08.08.2002</Typography>
               </Box>
               <Box className={classes.textContent}>
                   <Typography variant={"h2"}>
                       Google не хватает химиков и школьников?
                   </Typography>
                   <br/>
                   <Typography variant={"subtitle1"}>
                       Что можно сказать об идее интерактивной таблицы Менделеева? Идея очень хорошая, но первый блин бывает комом.
                   </Typography>
               </Box>
               <hr/>
               <Box display={"flex"} className={classes.footer} justifyContent={"space-between"}>
                   <Typography variant={"subtitle2"} style={{
                       display:"flex",
                       alignItems:"center"
                   }}>
                       <Message/>
                       12
                   </Typography>
                   <Typography variant={"subtitle2"} style={{
                       display:"flex",
                       alignItems:"center"
                   }}>
                       <Watchers/>
                       12 475
                   </Typography>

               </Box>
               <div className="glow-wrap">
                   <i className="glow"></i>
               </div>
           </Paper>


        </div>
    );
};

export default ArticlePreview;