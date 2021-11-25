import React from 'react';
import ArticlePreview from "../ArticlePreview";
import {Grid, Typography} from "@material-ui/core";
import NavBar from "../structure/NavBar";


import HomeIcon from "../../assets/icons/home.svg"
import HealthIcon from "../../assets/icons/health.svg"
import GrowthIcon from "../../assets/icons/growth.svg"
import SportIcon from "../../assets/icons/sport.svg"



export type BlogLink = {
    title:string,
    link:string,
    icon:string
}

const Blog = () => {
    return (
        <div>
            <Typography variant={"h1"}>Блог</Typography>
            <NavBar items={[{title:"Все статьи",link:"",icon:HomeIcon},
                 {title:"Здоровье",link:"health",icon:HealthIcon},
                 {title:"Cпорт",link:"sport",icon:SportIcon},
                 {title:"Личностный рост",link:"growth",icon:GrowthIcon}
            ]} rootLink={"blog"}/>

            <Grid container style={{gap:"20px",justifyContent:"center"}}>
                <ArticlePreview/><ArticlePreview/><ArticlePreview/><ArticlePreview/>

            </Grid>
        </div>
    );
};

export default Blog;