import React from 'react';
import {Box, makeStyles, Paper, Typography} from "@material-ui/core";
import StoreItemImage from "../assets/img/store_item.png";
import Like from "./structure/Like";

const useStyles = makeStyles((theme)=>({
    root:{
        position:"relative",
        width:230,
        padding:"15px 20px  ",
        height:"max-content",
        transition:"transform 0.4s ease",
        background:"linear-gradient(325.08deg, #ECECEC 14.83%, #FFFFFF 52.42%)",
        borderRadius: 20,
        cursor:"pointer",
        "& img":{
            width:"100px",
            margin:"0 auto",
            boxShadow:"0px 4px 4px rgba(0, 0, 0, 0.25)"
        },
        "&:hover":{
            transform:"rotateX(8deg) rotateY(8deg)"
        }
    },
    like:{
        position:"absolute",
        top:10,
        right:20
    },
    price:{
        fontWeight:700,
        fontSize:"1.5em",
        color:theme.palette.primary.main,
        '&.old':{
            marginLeft:15,
            fontSize:"1em",
            textDecoration:"line-through",
            color:"#5A2B2B"
        }
    }

}))


const StoreCard = () => {
    const [isLiked,setIsLiked] = React.useState(false);
    const classes=useStyles();


    return (
        <Paper className={classes.root}>
         <Like className={classes.like} liked={isLiked} onClick={()=>setIsLiked((like)=>!like)}/>
            <Box>
                <img src={StoreItemImage} alt="tshirt"/>
            </Box>
            <Box >
                <Box marginTop={"10px"} display={"flex"} justifyContent={"flex-start"}>
                    <Typography className={classes.price}>250 ₽</Typography>
                    <Typography className={classes.price + " old"}>1 250 ₽</Typography>
                </Box>
                <Typography variant={"h3"}>
                    Футболка UnReal GO
                    beBetter
                </Typography>
            </Box>
        </Paper>
    );
};

export default StoreCard;