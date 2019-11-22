import React from 'react';
import { GridListTile, GridListTileBar, Card, CardActionArea, CardMedia, makeStyles} from '@material-ui/core'
const useStyles = makeStyles({
    card: {
        maxWidth: 345,
        height: 700
    },
    media: {
        height: 500,
    },
    tileBar: {
        minHeight: 75
    }
});

const CardContent = (props) => {
    const classes= useStyles()
    console.log('test', props.data)
    if (props.data && !props.search) {
        return props.data.map(el => {
                    const url = 'https://image.tmdb.org/t/p/w500' + el.poster_path;
                    return(
                        <GridListTile>
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
                        </GridListTile>
                    )
                })
    }
    else if(props.search){
        return(
            <GridListTile>
                <Card className={props.card} >
                    <CardActionArea>
                        <CardMedia
                            className={props.media}
                            image={props.url}
                        />
                        <GridListTileBar
                            className={props.tileBar}
                            title={el.title}
                        />
                    </CardActionArea>
                </Card>
            </GridListTile>
        )
    }
    else {
        return null
    }
}

export default CardContent;
