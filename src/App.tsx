import React from 'react';
import {Container, makeStyles} from "@material-ui/core";
import {ThemeProvider} from "@material-ui/core/styles";
import Theme from "./theme";
import Header from "./components/structure/Header/Header";
import AnimatedBg from "./components/structure/AnimatedBG";
import Modal from "./components/modals/Modal";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Footer from "./components/structure/Footer";
import Routing from "./components/structure/Routing";


export const useStyles = makeStyles((theme) => ({
    root: {
        margin:0,
        padding:0,
        width:"100%",
        height:400,
    },
    header:{
        backgroundColor:"inherit",
        paddingTop:"10px",
        marginBottom:theme.spacing(4),
        display:"flex",
        alignItems:'center',
        justifyContent:"space-between",
        '& logoBlock':{
            display:'flex',
            '& h6':{
                textTransform:'uppercase',
                fontSize:"1.1250em",
                color:"#fff",
                fontWeight:"bold"
            },
            '& img':{
                width:"60px"
            }
        },

    }

}));

export function App() {
    const classes = useStyles();
  return (
    <ThemeProvider theme={Theme}>
        <div className={classes.root}>
            <Container maxWidth="lg" >
                <Header classes={classes}/>
                <Routing/>
            </Container>
            <Footer/>
            <Modal/>

            <AnimatedBg/>
        </div>
    </ThemeProvider>
  );
}

