import React from 'react';
import Head from 'next/head';
import { Layout, Content } from '../src/components';
import Container from '@material-ui/core/Container';
import MovieProvider from '../src/context/movieContext';

const index = (props) => {
    return (
        <MovieProvider>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
            </Head>
            <Container className='main'>
                <Layout >
                    <Content />
                </Layout>
            </Container>
        </MovieProvider>
    )
}

export default index;

