import { Container, Grid } from '@material-ui/core'
import React from 'react'
import BlogRightSide from './blogRightSide'
import BlogLeftSide from './blogLeftSide'
const BlogContent = () => {
    return (
        <Container maxWidth="xl">
            <Grid container>
                <Grid item lg={9}>
                    <BlogLeftSide></BlogLeftSide>
                </Grid>
                <Grid item lg={3}>
                    <BlogRightSide></BlogRightSide>
                </Grid>
            </Grid>
        </Container>
    )
}

export default BlogContent
