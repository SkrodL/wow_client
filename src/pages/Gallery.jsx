import React, { useContext, useEffect, useState } from 'react';
import { Context } from '..'
import { getHeroes } from '../http/heroAPI'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import classes from "./css.modules/Gallery.module.css";
import PrevArrowSlider from '../components/PrevArrowSlider'
import NextArrowSlider from '../components/NextArrowSlider'

const Gallery = () => {
    const {hero} = useContext(Context);
    const [heroes, setHeroes] = useState([]);
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
                <div className={classes.sliderItem} key={index}>
                    <img src={process.env.REACT_APP_API_URL + hero.photo} />
                    <div>
                        <h1>{hero.name}</h1>
                        <h4>{hero.rank}</h4>
                    </div>
                </div>    
            )}
        </Slider>
    );
};

export default Gallery;