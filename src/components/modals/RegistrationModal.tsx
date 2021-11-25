import React from 'react';
import TextField from '@material-ui/core/TextField';
import {
    Box, Checkbox, Link,Typography,
} from "@material-ui/core";

import StyledButton from "../structure/Buttons/StyledButton";
import {RootState} from "../../redux/reducers/";
import {useDispatch, useSelector} from 'react-redux';
import { ModalsActionTypes} from "../../redux/actionCreators/modals";
import ModalFactory from "./ModalFactory";



const RegistrationModal:React.FC =()=> {

    const [userAgree,setUserAgree] = React.useState<boolean>(false);
    const open = useSelector((state:RootState) => state.modalsReducer.isOpenRegistration);
    const dispatch = useDispatch();

    const toggleShowingModal=()=>{
        dispatch({type:ModalsActionTypes.TOGGLE_OPENED_REGISTRATION_MODAL});
    }

    const openLoginModal = () => {
        dispatch({type:ModalsActionTypes.OPEN_LOGIN_MODAL});
    }

    const changeUserAgree = (e:React.MouseEvent) =>{
            setUserAgree((prevUserAgree)=>!prevUserAgree);
    }

    return (
        <ModalFactory title={"Регистрация"} open={open} onClose={toggleShowingModal}>
            <form  noValidate autoComplete="off">
                <TextField id="outlined-basic" fullWidth label="Имя" required variant="outlined" />
                <TextField id="outlined-basic" fullWidth label="Email" required type={"email"} variant="outlined" />
                <TextField id="outlined-basic" fullWidth label="Пароль" required type={"password"} variant="outlined" />
                <br/>
                <Box display={"flex"} alignItems={"center"} marginBottom={3}>
                    <Checkbox
                        color="primary"
                        checked={userAgree}
                        onClick={changeUserAgree}
                        inputProps={{ 'aria-label': 'secondary checkbox' }}
                    />
                    <Typography onClick={changeUserAgree} style={{cursor:"pointer"}} color={"secondary"}> Я согласен с <Link>Пользовательским соглашением </Link></Typography>
                </Box>
                <Box display={"flex"} alignItems={"center"}>
                    <StyledButton variant={!userAgree?"disabled":""}>
                        Зарегистрироваться
                    </StyledButton>
                    <Typography color={"secondary"}> Уже есть аккаунт?  <Link style={{cursor:"pointer"}} onClick={openLoginModal} >Войти</Link></Typography>
                </Box>
            </form>
        </ModalFactory>
    );
}

export default RegistrationModal;