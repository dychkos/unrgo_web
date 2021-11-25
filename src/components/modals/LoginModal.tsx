import React from 'react';
import TextField from '@material-ui/core/TextField';
import {
    Box,Link,Typography,
} from "@material-ui/core";

import StyledButton from "../structure/Buttons/StyledButton";
import {RootState} from "../../redux/reducers/";
import {useDispatch, useSelector} from 'react-redux';
import { ModalsActionTypes} from "../../redux/actionCreators/modals";
import ModalFactory from "./ModalFactory";



const LoginModal:React.FC =()=> {

    const open = useSelector((state:RootState) => state.modalsReducer.isOpenLogin);
    const dispatch = useDispatch();

    const toggleShowingModal=()=>{
        dispatch({type:ModalsActionTypes.TOGGLE_OPENED_LOGIN_MODAL});
    }

    const openRegistrationModal = () => {
        dispatch({type:ModalsActionTypes.OPEN_REGISTRATION_MODAL});
    }


    return (
        <ModalFactory title={"Войти"} open={open} onClose={toggleShowingModal}>
            <form  noValidate autoComplete="off">
                <TextField id="outlined-basic" fullWidth label="Email" required type={"email"} variant="outlined" />
                <TextField id="outlined-basic" fullWidth label="Пароль" required type={"password"} variant="outlined" />
                <br/>
                <Box display={"flex"} alignItems={"center"}>
                    <StyledButton variant={"default"}>
                        Войти
                    </StyledButton>
                    <Typography color={"secondary"}> Нету аккаунта?  <Link  style={{cursor:"pointer"}}  onClick={openRegistrationModal} >Зарегистрироваться</Link></Typography>
                </Box>
            </form>
        </ModalFactory>
    );
}

export default LoginModal;