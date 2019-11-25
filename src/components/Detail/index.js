import React, {useContext, useState} from 'react';
import {getSingleMovie} from '../../helpers/searchHelper';
import { MovieContext } from '../../context/movieContext';
import { Grid, Paper, Typography } from '@material-ui/core';
import './styles.css'

const Detail = (props) => {
    const { movieDetail, setId } = useContext(MovieContext)
    setId(props.id)
    const url = 'https://image.tmdb.org/t/p/w500' + movieDetail.backdrop_path;
    return (
        <React.Fragment>
            <Grid container className='detailContainer' >
                <Grid item>
                    <img src={url} className='detailImage'/>
                    <Paper className='detailTextContainer'>
                        <Typography variant='h3' >{movieDetail.title}</Typography>
                        {movieDetail.genres && (<div className='genresContainer'>
                            <span>Genres: </span>
                                {movieDetail.genres.map(el => (<p key={el.id}>{el.name}</p>))}
                        </div>)}
                        <p className='detailText'>{movieDetail.overview}</p>
                    </Paper>
                </Grid>
            </Grid>
        </React.Fragment>
    )
}

export default Detail;
