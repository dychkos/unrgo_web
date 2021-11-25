import { createTheme } from '@material-ui/core/styles';


const theme = createTheme({
    typography:{
        allVariants: {
            color: '#000'
        },
       fontFamily:[
           "Rubik"
       ].join(';'),
        h1:{
            fontSize:"1.5000em",
            color:"#fff",
            fontWeight:900,
            lineHeight:"25px"
        },
        h2:{
            fontSize:18,
            color:"#191a29",
            fontWeight:900,
            letterSpacing:1,
        },
        h3:{
            fontSize:18,
            color:"#191a29",
            fontWeight:400,
            letterSpacing:1,
        },
        h4:{
            fontSize:18,
            color:"#fff",
            fontWeight:400,
            letterSpacing:1,
        },
        body1:{
            fontSize: "1.1250em",
            fontStyle: "normal",
            fontWeight: 400,
            lineHeight:" 25px"
        },
        subtitle1:{
            fontSize:"1em",
            fontWeight:300,
            color:"#000"
        },
        subtitle2:{
            fontSize:"1em",
            fontWeight:500,
            color:"#ceb143"
        }
    },


    palette: {
        primary: {
            main: '#ceb143',
            dark:'#675C36FF'
        },
        secondary: {
            main: '#191a29',
        },

        background: {
            default: '#191a29',
        },
        text:{
            primary:"rgba(255,255,255,1)",
            secondary:"#ceb143"
        },
    },
});

export default theme;