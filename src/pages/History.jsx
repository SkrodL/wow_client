import React, {useContext, useEffect, useState} from 'react';
import {Context} from "../index";
import {getHeroes, getHeroesCount} from "../http/heroAPI";
import HeroCard from "../components/HeroCard";
import {observer} from "mobx-react-lite";
import classes from './css.modules/History.module.css'
import HeroList from "../components/HeroList";
import AddHistoryBtn from "../components/AddHistoryBtn";
import Pages from "../components/pages";
const History = observer(() => {
    const {hero} = useContext(Context)
    let limit = 0
    if (window.innerWidth > 1700){
        limit = 6
    }
    if (window.innerWidth < 1700){
        limit = 4
    }
    if (window.innerWidth < 780){
        limit = 3
    }

    useEffect(() => {
        getHeroesCount(hero.page, limit).then(data => {
            hero.setHeroes(data.rows)
            hero.setTotalCount(data.count)
        })
    }, [hero.page])
    return (
        <div>
            <HeroList/>
            <AddHistoryBtn/>
            <Pages limit={limit}/>
        </div>
    );
});

export default History;