import React from 'react';
import {makeStyles, Paper, Typography} from "@material-ui/core";

interface BannerProps {
    image:string,
    title:string
}

const useStyles = makeStyles((theme)=>({
    banner:{
        margin:"20px 0",
        position:"relative",
        height:"220px",
        display:"flex",
        alignItems:"center",
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
            animation:"shine .9s"
        },
        '&:hover':{
            backgroundSize:"110%",
            //transform:" scale(1.1)"
        },

    },
    textDiv:{
        padding:"20px",
        borderRadius:"10px",
        width:"60%"
    },
    text:{
       fontSize:"2.2em",
        fontWeight:500,
        lineHeight:"42px",
        letterSpacing:"1.5px"

    }
}))

const Banner:React.FC<BannerProps> = ({image,title}) => {
    const classes = useStyles();
    return (
        <div>
            <div className={classes.banner} style={{background:`url(${image})`}}>
                <Paper  className={classes.textDiv} elevation={0}>
                    <Typography className={classes.text} variant={"h1"} color={"primary"}  >
                        {title}
                    </Typography>
                </Paper>
            </div>
        </div>
    );
};

export default Banner;