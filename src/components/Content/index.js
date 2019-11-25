import React, { useContext, useState } from 'react';
import Link from 'next/link'
import { MovieContext } from '../../context/movieContext';
import search, { getSingleMovie } from '../../helpers/searchHelper';
import { TextField, Grid, Paper, Card, CardActionArea, CardMedia, makeStyles, GridListTileBar } from '@material-ui/core';
import './styles.css';

const useStyles = makeStyles( theme => ({
    card: {
        maxWidth: 345,
        height: 500
    },
    media: {
        height: 500,
    },
    tileBar: {
        minHeight: 75 
    },
    paper: {    
        height: 500,
        width: 250,
    },
    genre: {
        paddingTop: 10,
        paddingBottom: 10,
    }
}));

const Content = (props) => {
    const { genre, data, text, setText } = useContext(MovieContext);
    const [t, setSearchResult] = useState([]);
    const classes = useStyles();
    return (
        <React.Fragment>
            <div className='contentContainer'>
                <div className='filterWrapper'>
                    <div className='search'>
                        <TextField
                        value={text}
                        onChange={async(e) => {
                            setText(e.target.value)
                            let tests = []
                            tests = await search(text)
                            setSearchResult(tests)
                        }} 
                        placeholder='Search' color={'primary'} />
                        {t.results && text.length > 3 ? (<div className='searchResult'>{t.results.map((el) => (
                        <Link href={{pathname: '/detail', query: {id: el.id}}} >
                        <p onClick={() => {
                            setText('')
                        }}>{el.name}</p>
                        </Link>
                        ))}</div>): null}
                    </div>
                </div>
            </div>
            <Grid container spacing={3} className='gridContainer'>
                <Grid item xs={9} className='content'>
                        <Grid container spacing={1}>
                            {data.results ? (data.results.map(el => {
                                const url = 'https://image.tmdb.org/t/p/w500' + el.poster_path;
                                return (
                                    <Grid item key={el.id}>
                                        <Paper className={classes.paper}>
                                            <Card className={classes.card} >
                                                <CardActionArea>
                                                    <CardMedia
                                                        className={classes.media}
                                                        image={url}
                                                    />
                                                    <GridListTileBar
                                                        className={classes.tileBar}
                                                        title={el.title}
                                                    />
                                                </CardActionArea>
                                            </Card>
                                        </Paper>
                                    </Grid>
                                )
                            })) : null}
                        </Grid>   
                </Grid>
                <Grid item xs={3}>
                    <Paper className={classes.genre}>
                        <div className="categories">{genre.genres && (genre.genres.map(el => (<p onClick={() => console.log(el.id)}>{el.name}</p>)))}</div>
                    </Paper>
                </Grid>
            </Grid>
        </React.Fragment>
    )
}

export default Content;
