import React from 'react';
import { Layout, Detail } from '../src/components';
import { withRouter } from 'next/router'
import Container from '@material-ui/core/Container';
import MovieProvider from '../src/context/movieContext';

const detail = ({router: {query}}) => {
    return (
        <MovieProvider>
            <Container className='main'>
                <Layout >
                    <Detail id={query.id} />
                </Layout>
            </Container>
        </MovieProvider>
    )
}

export default withRouter(detail);

