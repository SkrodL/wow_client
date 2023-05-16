import React, {useContext} from 'react';
import {observer} from "mobx-react-lite";
import {Context} from "../index";
import classes from './css.modules/pages.module.css'
const Pages = observer(({limit}) => {
    const {hero} = useContext(Context)
    const pageCount = Math.ceil(hero.totalCount / limit)
    const pages = []
    for (let i = 0; i < pageCount; i++) {
        pages.push(i+1)
    }
    return (
        <div className={classes.pageBlock}>
            <>
                {pages.map(page =>
                    <button
                        key={page}
                        className={`${hero.page === page ? classes.active : 'notActive'} ${classes.pageButton}`}
                        onClick={() => hero.setPage(page)}
                    >
                        {page}</button>
                )}
            </>
        </div>
    );
});

export default Pages;