import React from 'react';
import ArticlePreview from "../ArticlePreview";
import {Box, Grid, Typography} from "@material-ui/core";
import SmallArticlePreview from "../SmallArticlePreview";
import StoreSlider from "../structure/StoreSlider";


// const useStyles = makeStyles((theme)=>({
//     root:{
//        width:"100%"
//     },
// }))
//


const Home = () => {

    return (
        <div>
            <Typography variant={"h1"}>
                Новое в блоге
            </Typography>
            <Box margin={"20px auto"} display={"flex"} flexWrap={"wrap"} justifyContent={"space-around"}>
                <ArticlePreview/>
                <Grid container wrap={"wrap"} justifyContent={"center"} style={{gap:"20px",maxWidth:"550px"}}>
                    <SmallArticlePreview/>
                    <SmallArticlePreview/>

                </Grid>
            </Box>
            <Typography variant={"h1"}>
               Возьми в коллекцию
            </Typography>
            <StoreSlider/>

        </div>
    );
};

export default Home;