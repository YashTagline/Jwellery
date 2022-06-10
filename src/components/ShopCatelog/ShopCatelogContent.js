import { Container, Grid } from '@material-ui/core'
import React from 'react'
import ShopCatelogLeftSide from './ShopCatelogLeftSide'
import ShopCatelogRightSide from './ShopCatelogRightSide'

const ShopCatelogContent = () => {
    return (
        <Container maxWidth="xl">
            <Grid container>
                <Grid item lg={9}>
                    <ShopCatelogLeftSide></ShopCatelogLeftSide>
                </Grid>
                <Grid item lg={3}>
                    <ShopCatelogRightSide></ShopCatelogRightSide>
                </Grid>
            </Grid>
        </Container>
    )
}

export default ShopCatelogContent
