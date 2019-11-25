import React from 'react';
import { TextField, Grid, Paper, Card, CardActionArea, CardMedia, makeStyles, GridListTileBar } from '@material-ui/core';
const useStyles = makeStyles({
    card: {
        maxWidth: 345,
        height: 500
    },
    media: {
        height: 500,
    },
    tileBar: {
        minHeight: 75
    }
});

const CardContent = (props) => {
    const classes = useStyles()
    if (props.filteredData){
        const url = 'https://image.tmdb.org/t/p/w500' + props.filteredData.poster_path;
        return(
            <Card className={classes.card} >
                <CardActionArea>
                    <CardMedia
                        className={classes.media}
                        image={url}
                    />
                    <GridListTileBar
                        className={classes.tileBar}
                        title={props.filteredData.title}
                    />
                </CardActionArea>
            </Card>
        )
    }
    else {
    const url = 'https://image.tmdb.org/t/p/w500' + props.data.poster_path;
    return (
        <Card className={classes.card} >
            <CardActionArea>
                <CardMedia
                    className={classes.media}
                    image={url}
                />
                <GridListTileBar
                    className={classes.tileBar}
                    title={props.data.title}
                />
            </CardActionArea>
        </Card>
    )
    }
}

export default CardContent;
