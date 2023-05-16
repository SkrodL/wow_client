import React, { useContext, useEffect, useState } from 'react';
import { Context } from '..'
import { getHeroes } from '../http/heroAPI'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import classes from "./css.modules/Documents.module.css";
import PrevArrowSlider from '../components/PrevArrowSlider'
import NextArrowSlider from '../components/NextArrowSlider'
import {getAwards} from "../http/awardApi";

const Documents = () => {
    const {hero, award} = useContext(Context);
    const [heroes, setHeroes] = useState([]);
    const [awards, setAwards] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const settings = {
		autoplay: true,
		arrows: true,
		dots: false,
		infinite: true,
		speed: 2000,
        prevArrow: <PrevArrowSlider />,
		nextArrow: <NextArrowSlider />,
	}

    useEffect(() => {
        getAwards().then(data => setAwards(data))
        getHeroes().then(data => setHeroes(data)).then(() => setIsLoading(false));
    }, [])

    if (isLoading) {
        return <div>загрузка...</div>
    }
    return (
        <Slider
            {...settings}
            className={classes.slider}
        >
            {heroes.map((hero, index) =>
                <div className={classes.sliderItem} key={hero.id}>
                    <h1>{hero.name}</h1>
                    <h4>{hero.rank}</h4>
                    <div>
                        {awards.map(award =>
                            award.heroId === hero.id ? <p key={award.id}>{award.value}</p> : <p key={award.id}></p>
                        )}
                    </div>
                </div>    
            )}
        </Slider>
    );
};

export default Documents;
// award.heroId === hero.id || <p key={award.id}>{award.value}</p>