import React from 'react';
import classes from './css.modules/HeroCard.module.css'
import {useNavigate} from "react-router-dom";

const HeroCard = ({hero}) => {
    const navigate = useNavigate()
    return (
        <div className={classes.card} onClick={() => navigate('/history/' + hero.id)}>
            <img src={process.env.REACT_APP_API_URL + hero.photo} alt=""/>
            <h1>{hero.name}</h1>
            <h4>{hero.rank}</h4>
        </div>
    );
};

export default HeroCard;