import React from 'react';
import {
    Box,
    Grid,
    InputBase,
    makeStyles,
    useMediaQuery,
    useTheme
} from "@material-ui/core";
import SearchIcon from '@material-ui/icons/Search';
import {NavLink} from "react-router-dom";
import {BlogLink} from "../pages/Blog";
import SortIcon from "../../assets/icons/sort_icon.svg"
import SortBy from "./SortBy";

interface NavBarProps{
    items:BlogLink[],
    rootLink:string
}

const useStyles = makeStyles((theme)=>({
    navBar:{
        backgroundColor:"#ececec",
        padding:"0 20px",
        borderRadius:"20px",
        display:"flex",
        alignItems:"center",
        margin:"20px 0"
    },
    input:{
        color:"#6B6B6B",
        "&.Mui-focused":{
            color:"#000"
        }
    },
    link:{
        "fontSize":"18px",
        "padding":"18px",
        "textDecoration":"none",
        "cursor":"pointer",
        "color":"#191a29",
        "fontFamily":"\"Rubik\"",
        transition:"background-color 0.4s ease",
        "&:hover":{
            backgroundColor:"#d9d9d9"
        },
        "& div .link-label":{
            display:"none"
        },
        "&.link-sort":{
          "margin":"-25px",
            "position":"relative",
            borderLeft:"2px solid #191a29",
            "&:hover":{
                background:"none",
            },
        },
        "&.active":{
            backgroundColor:theme.palette.primary.main,
            filter:"invert(1)",
            "& div .link-label":{
                display:"block"
            },
        },
    },

}))

const NavBar:React.FC<NavBarProps> = ({items,rootLink}) => {
    const classes = useStyles();
    const theme = useTheme();

    const down_md = !useMediaQuery(theme.breakpoints.up('md'));
    const down_sm = !useMediaQuery(theme.breakpoints.up('sm'));
    const [showSortBy,setShowSortBy] = React.useState(false);

    function hideSortBy() {
        setShowSortBy(false);
    }

    const onSortClick=()=>{
        setShowSortBy(true);
    }


    const createAdaptiveSort = (it:BlogLink) =>{
       if(down_sm){
            return <Box display={"flex"} alignItems="center" >
                <img style={{"marginLeft": "8px"}} width="24px" src={it.icon} alt={it.title}/>
            </Box>
        }else if(down_md){
            return <Box display={"flex"} alignItems="center" >
                <span className={"link-label"}>{it.title}</span>
                <img style={{"marginLeft": "8px"}} width="24px" src={it.icon} alt={it.title}/>
            </Box>
        }else {
            return <Box display={"flex"} alignItems="center"  >
                <span>{it.title}</span>
                <img style={{"marginLeft": "8px"}} width="24px" src={it.icon} alt={it.title}/>
            </Box>
        }

    }
    return (

        <div className={classes.navBar}>
            <Grid container alignItems="center" justifyContent={"space-between"} style={{gap:"10px"}}>
                <Box display={"flex"} alignItems={"center"} style={{width:"20%"}} >
                    <SearchIcon style={{"marginRight":"8px"}}/>
                    <InputBase className={classes.input} placeholder="Поиск" />
                </Box>
                <Box display={"flex"}>
                    {items.map(it=> <NavLink className={classes.link}  key={it.title} exact to={`/${rootLink}/${it.link}`}>
                        {createAdaptiveSort(it)}
                    </NavLink>)
                    }
                </Box>
                <Box className={classes.link + " link-sort"} onClick={onSortClick}>
                    <img width="24px" src={SortIcon} alt={"sort"}/>
                    <SortBy items={["популярности","дате","по просто так"]} show={showSortBy} hideSortBy={hideSortBy}/>
                </Box>
            </Grid>
        </div>
    );
};

export default NavBar;