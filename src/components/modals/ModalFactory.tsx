import React, {ReactElement, ReactNode} from 'react';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import {
    Box,
    IconButton,
    makeStyles,Typography,
    withStyles
} from "@material-ui/core";
import CloseButton from "../structure/Buttons/CloseButton";



const useStyles = makeStyles((theme) => ({
    dialogHeader: {
        justifyContent:"center",
        paddingTop:30,
        marginBottom:35,
        '& p':{
            color: "#000",
            fontWeight: 500,
            fontSize: "28px",
            letterSpacing: "3px"
        }

    },
    dialog:{
        borderRadius:'20'
    },
    closeButton:{
        position:"absolute",
        right:15,
        top:15
    },
    dialogForm: {
        textAlign:'center',
        margin:"0 30px 30px 30px",
        '& .MuiTextField-root': {
            '& .MuiFormLabel-root':{
                paddingLeft:15,
                color:theme.palette.primary.main
            },
            '& input':{
                padding:"18px 30px",
                color:"#000"
            },
            '& .Mui-focused input': {
                color: theme.palette.primary.main,
            },
            '& fieldset':{
                borderColor:theme.palette.primary.main,
                borderWidth:'2px',

            },
            '&:hover fieldset': {
                borderWidth:'3px',
                borderColor:theme.palette.primary.main
            },
            "& .MuiOutlinedInput-root":
                {
                    color:theme.palette.primary.main,
                    height:55,
                    borderRadius:30,
                    marginBottom:25
                }
        },
    },
    or:{
        alignItems: 'center',
        position: 'absolute',
        top: -27,
        background: '#fff',
        height: 56,
        width: 56,
        borderRadius: '40px',
        display: 'flex',
        justifyContent: 'center',
        fontFamily: 'Rubik',
        color: theme.palette.primary.main,
        boxShadow: '2px 2px 4px rgba(0, 0, 0, 0.25)'
    },
    footer:{
        position:"relative",
        paddingTop:theme.spacing(4),
        display:"flex",
        flexDirection:"column",
        backgroundColor:theme.palette.primary.main,
        justifyContent:"center"
    }


}));


const StyledDialog = withStyles({
    paper: {
        backgroundColor:"#ececec",
        color:"#000",
        borderRadius: 20
    },
})(Dialog);

interface AuthModalProps {
    title:string,
    open:boolean,
    onClose:React.MouseEventHandler
    children:ReactElement | ReactNode


}



const ModalFactory:React.FC<AuthModalProps> =({title,open,onClose, children})=> {

    const classes = useStyles();

    return (
        <div>
            <StyledDialog  className={classes.dialog} open={open} onClose={onClose} aria-labelledby="form-dialog-title">
                <Box  className={classes.closeButton}>
                    <CloseButton onClose={onClose}/>
                </Box>
                <Box className={classes.dialogHeader} display={"flex"}>
                    <Typography >{title}</Typography>
                </Box>
                <DialogContent>
                    <div className={classes.dialogForm}>
                        {children}
                    </div>
                </DialogContent>
                <DialogActions className={classes.footer}>
                    <div className={classes.or}>
                        ИЛИ
                    </div>
                    <Typography variant={"h4"}> Авторизоваться с помощью </Typography>
                    <br/>
                    <Box>
                        <IconButton aria-label="delete" >
                            <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M24 0C10.7452 0 0 10.7452 0 24C0 37.2548 10.7452 48 24 48C37.2548 48 48 37.2548 48 24C48 10.7452 37.2548 0 24 0ZM26.5016 25.0542V38.1115H21.0991V25.0547H18.4V20.5551H21.0991V17.8536C21.0991 14.1828 22.6231 12 26.9532 12H30.5581V16.5001H28.3048C26.6192 16.5001 26.5077 17.1289 26.5077 18.3025L26.5016 20.5546H30.5836L30.1059 25.0542H26.5016Z" fill="white"/>
                            </svg>

                        </IconButton>
                        <IconButton aria-label="delete" >
                            <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M0 24C0 10.7452 10.7452 0 24 0C37.2548 0 48 10.7452 48 24C48 37.2548 37.2548 48 24 48C10.7452 48 0 37.2548 0 24ZM23.9654 17.6213C25.9154 17.6213 27.2309 18.4649 27.9809 19.1698L30.9118 16.304C29.1117 14.6284 26.7693 13.6 23.9654 13.6C19.9037 13.6 16.3959 15.9342 14.6881 19.3316C13.9842 20.7413 13.5804 22.3244 13.5804 24C13.5804 25.6756 13.9842 27.2587 14.6881 28.6684L18.0575 26.0569L14.6996 28.6684C16.4074 32.0658 19.9037 34.4 23.9654 34.4C26.7693 34.4 29.1232 33.4756 30.8425 31.8809C32.8041 30.0667 33.935 27.3973 33.935 24.2311C33.935 23.376 33.8657 22.752 33.7157 22.1049H23.9654V25.9644H29.6887C29.5733 26.9236 28.9502 28.368 27.5655 29.3387C26.6885 29.9511 25.5116 30.3787 23.9654 30.3787C21.2191 30.3787 18.8883 28.5644 18.0575 26.0569C17.8382 25.4098 17.7113 24.7164 17.7113 24C17.7113 23.2836 17.8382 22.5902 18.0459 21.9431C18.8883 19.4356 21.2191 17.6213 23.9654 17.6213Z" fill="white"/>
                            </svg>

                        </IconButton>
                    </Box>

                </DialogActions>
            </StyledDialog>
        </div>
    );
}

export default ModalFactory;