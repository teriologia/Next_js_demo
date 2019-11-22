import React from 'react';
import './styles.css';
import { Grid } from '@material-ui/core';

const Header = (props) => {

    return (
        <Grid item className='container'>
            <p className='headerText'>MOVIE DEMO WEB</p>
        </Grid>
    )
}

export default Header;
