import React from 'react';
import ArticlePreview from "../ArticlePreview";
import {Box, Grid, Typography} from "@material-ui/core";
import NavBar from "../structure/NavBar";


import AccessoryIcon from "../../assets/icons/otherIcon.svg"
import MaleIcon from "../../assets/icons/male.svg"
import FemaleIcon from "../../assets/icons/female.svg"
import BannerBG from "../../assets/img/banner.png"

import Banner from "../structure/Banner";
import StoreSlider from "../structure/StoreSlider";



export type BlogLink = {
    title:string,
    link:string,
    icon:string
}



const Blog = () => {
    return (
        <div>
            <Typography variant={"h1"}>Магазин</Typography>
            <Banner image={BannerBG} title={"Встречай новую коллекцию 2021"}/>
            <NavBar items={[{title:"Мужчинам",link:"man",icon:MaleIcon},
                 {title:"Женщинам",link:"woman",icon:FemaleIcon},
                 {title:"Акссесуары",link:"accessory",icon:AccessoryIcon},

            ]} rootLink={"store"}/>
            <Box>
                <Typography variant={"h1"}>
                    Новые поступления
                </Typography>
                <StoreSlider/>

            </Box>
            <Grid container style={{gap:"20px"}}>


            </Grid>
        </div>
    );
};

export default Blog;