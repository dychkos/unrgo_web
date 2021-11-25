import React from "react";
import {useStyles} from "../../../App";
import LogoBlock from "../../LogoBlock";
import Navigation from "./Navigation";
import StyledButton from "../Buttons/StyledButton";
import {Box, Grid, useMediaQuery, useTheme} from "@material-ui/core";
import {ModalsActionTypes} from "../../../redux/actionCreators/modals";
import {useDispatch} from "react-redux";
import AvatarIcon from '@material-ui/icons/AccountCircle';
import { NavLink } from "react-router-dom";

interface HeaderProps{
    classes: ReturnType<typeof useStyles>
}

const Header: React.FC<HeaderProps> = ({classes}) => {

    const dispatch = useDispatch();
    const theme = useTheme();
    const down_sm = !useMediaQuery(theme.breakpoints.up('sm'));


    const openLoginModal=()=>{
        dispatch({type:ModalsActionTypes.TOGGLE_OPENED_LOGIN_MODAL})
    }

    return <div className={classes.header}>
        <Box
            display={"flex"}
            width={"100%"}
            justifyContent={"space-between"}
             >
            <Grid item xs={6}>
                <NavLink to={'/'} style={{textDecoration:"none"}}>
                    <LogoBlock withText={!down_sm}/>
                </NavLink>
            </Grid>
            <Box display={"flex"}  alignItems={"center"}>
                <Navigation/>
                <Box display="flex">

                    {/*<StyledButton onClick={openRegistrationModal} variant={"default"} >*/}
                    {/*    Регистрация*/}
                    {/*</StyledButton>*/}
                    <StyledButton onClick={openLoginModal} variant={"default"} >
                        Войти
                     <AvatarIcon  fontSize={"large"} />
                    </StyledButton>
                </Box>
            </Box>


        </Box>
    </div>
}

export default Header;