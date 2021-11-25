import React from 'react';
import ArrowRightIcon from "@material-ui/icons/ArrowRight";
import ArrowLeftIcon from "@material-ui/icons/ArrowLeft";
import {makeStyles} from "@material-ui/core";
import theme from "../../theme";
import StoreCard from "../StoreCard";
import Slider from "react-slick";

const useStyles=makeStyles(theme=>({
    slider:{
        marginTop:theme.spacing(3),
        width:"100%",
        "& .slick-prev":{
            left:"-50px"
        },
        "& .slick-next":{
            right:"-10px"
        },
        "& .slick-prev,& .slick-next":{
            fontSize:"3em"

        },
        "& .slick-prev:hover, & .slick-prev:focus, & .slick-next:hover, & .slick-next:focus" :{
            color:"#fff"
        }

    },
    sliderButton:{
        '&:hover,&:focus':{
            color:"#fff"
        }
    }
}))

const StoreSlider = () => {
    const classes = useStyles();
    const sliderSettings = {
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        nextArrow: <ArrowRightIcon color={"primary"} className={classes.sliderButton}/>,
        prevArrow: <ArrowLeftIcon  color={"primary"} className={classes.sliderButton} />,
        responsive: [
            {
                breakpoint: 1180,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                }
            },
            {
                breakpoint: 900,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    return (
        <Slider {...sliderSettings} className={classes.slider}>
            <StoreCard/>
            <StoreCard/>
            <StoreCard/>
            <StoreCard/>
            <StoreCard/>
            <StoreCard/>
        </Slider>
    );
};

export default StoreSlider;