import React, { useContext, useState } from 'react';
import { MovieContext } from '../../context/movieContext';
import search from '../../helpers/searchHelper';
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
}));

const Content = (props) => {
    const { genre, data} = useContext(MovieContext);
    const [text, setText] = useState('');
    const [t, setSearchResult] = useState([]);
    const classes = useStyles();
    return (
        <React.Fragment>
            <div className='contentContainer'>
                <div className='filterWrapper'>
                    <div className='search'>
                        <TextField 
                        onChange={async(e) => {
                            setText(e.target.value)
                            let tests = []
                            tests = await search(text)
                            setSearchResult(tests)
                        }} 
                        placeholder='Search' color={'primary'} />
                        {t.results ? (<div className='searchResult'>{t.results.map(el => (<p onClick={() => console.log(el.id)}>{el.name}</p>))}</div>): null}
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
                            })): null}
                    </Grid>
                </Grid>
                <Grid item xs={3}>
                    <Paper>
                        <div className="categories">{genre.genres && (genre.genres.map(el => (<p>{el.name}</p>)))}</div>
                    </Paper>
                </Grid>
            </Grid>
        </React.Fragment>
    )
}

export default Content;
