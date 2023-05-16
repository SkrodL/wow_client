import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import {getOneHero} from "../http/heroAPI";
import classes from './css.modules/heroPage.module.css'

const HeroPage = () => {
    const [hero, setHero] = useState({paragraph: [], poem: [], award: []})
    const {id} = useParams()
    useEffect(() => {
        getOneHero(id).then(data => setHero(data))
    }, [])
    return (
        <div className={classes.container}>
            <div className={classes.leftBlock}>
                <img src={process.env.REACT_APP_API_URL + hero.photo} alt=""/>
                <h1>{hero.name}</h1>
                <h4>{hero.rank}</h4>
            </div>
            <div className={classes.rightBlock}>
                <div>
                    {
                        hero.paragraph.length > 0 ? <h3>История:</h3> : <></>
                    }
                    {
                        hero.paragraph.map((paragraph, index) =>
                            <p key={paragraph.id} className={classes.paragraph}>{paragraph.value}</p>
                        )
                    }
                    {
                        hero.poem.map((poem, index) =>
                            <div key={poem.id} className={classes.poem}>
                                <h3>Стихи:</h3>
                                {
                                poem.value.split(/\r?\n/).map((row, index) =>
                                    <p key={index}>{row}</p>
                                )
                            }</div>
                        )
                    }
                </div>
                <div>
                    {
                        hero.award.length > 0 ? <h3>Награды:</h3> : <></>
                    }
                    {
                        hero.award.map((award, index) =>
                            <p key={award.id}>{award.value}</p>
                        )
                    }
                </div>
            </div>
        </div>
    );
};

export default HeroPage;