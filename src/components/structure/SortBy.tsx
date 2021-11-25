import React, {useState} from 'react';
import {makeStyles, Paper, Typography} from "@material-ui/core";

interface SortByProps {
    show:boolean,
    items:string[],
    hideSortBy:()=>void
}

const useStyles = makeStyles((theme)=>({
    sortBy:{
        position:"absolute",
        width:"200px",
        padding:"10px",
        right:"10px",
        zIndex:5
    },
    sortItem:{
        textAlign:"center",
        marginTop:"3px",
        fontSize:"1em",
        borderRadius:"20px",
        color:theme.palette.primary.main,
        padding:"4px",
        transition:"background-color 0.2s ease",
        "&:hover":{
            backgroundColor:"#f6f6f6",
            //color:"#000"
        },
        "&.checked":{
            color:"#fff",
            backgroundColor:theme.palette.primary.main,

        }

    }
}))


const SortBy:React.FC<SortByProps> = ({items,show,hideSortBy}) => {
    const classes = useStyles();
    const sortRef = React.useRef<HTMLDivElement>(null);

    const hideSortByClick = React.useCallback(
        (e: MouseEvent) => {
            try {
                if ((sortRef.current! as any).contains(e.target) || !(sortRef.current!.parentNode as any).contains(e.target)) {
                    hideSortBy();
                }
            }catch (e){
                hideSortBy();
            }

        },
        [hideSortBy]
    )

    React.useEffect(() => {
        document.addEventListener('click', hideSortByClick);
        return () => {
            document.removeEventListener('click', hideSortByClick);
        }
    }, [sortRef,hideSortByClick])


    const [checkedSort,setCheckedSort] = useState(0);

    const changeCheckedSort = (sort_id:number) =>{
        setCheckedSort(sort_id);
    }

    return (
        <div ref={sortRef}>
            {show &&  <Paper className={classes.sortBy}>
                <Typography variant={"subtitle1"}>
                    Сортировать по
                </Typography>
                {items.map((it,id)=>{
                    let isChecked = false;
                    if(id===checkedSort){
                        isChecked = true;
                    }
                    return <Typography key={id} onClick={()=>{changeCheckedSort(id)}} className={isChecked?classes.sortItem + " checked" : classes.sortItem} >
                        {it}
                    </Typography>
                })}
            </Paper>}
        </div>
    );
};

export default SortBy;