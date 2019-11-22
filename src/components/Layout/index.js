import React from 'react';
import Header from '../header/header';
import { Grid } from '@material-ui/core';

const Layout = (props) => {
    return (
        <Grid container spacing={2} direction='column'>
            <Header />
           {props.children}
        </Grid>
    )
}

export default Layout;
