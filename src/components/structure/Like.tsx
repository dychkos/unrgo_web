import React from 'react';
import LikeIcon from '@material-ui/icons/FavoriteBorder';
import LikeIconFilled from '@material-ui/icons/Favorite';

interface LikeProps {
    liked?:boolean,
    onClick?:()=>void,
    className?:string

}

const Like:React.FC<LikeProps> = ({liked,onClick, className}) => {
    return (
        <div className={className} onClick={onClick} >
            {liked ? <LikeIconFilled color={"primary"}/> : <LikeIcon color={"primary"}/> }

        </div>
    );
};

export default Like;