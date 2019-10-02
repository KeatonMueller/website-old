import React from 'react'
import P5Wrapper from 'react-p5-wrapper'
import SearchGrid from './SearchGrid'
import Header from '../Components/SubHeader'

import Button from '@material-ui/core/Button'
import Grid from '@material-ui/core/Grid'

import { withStyles } from '@material-ui/styles'
import styles from '../Styles'

class App extends React.Component {
    constructor(props){
        super(props)
        this.state = { anim: false, type: '' }
        this.handleClick = this.handleClick.bind(this)
        this.props = props
    }

    handleClick = (type) => () => {
        if(type !== 'clearSearch' && type !== 'clearAll'){
            this.setState({ anim: true, type: type })
        }
        else{
            this.setState({ anim: false, type: type })
        }
    }
    
    render() {
        const { classes } = this.props
        return (
            <React.Fragment>
                <Header />
                <Grid container spacing={8} justify='center' className={classes.gridItem}>
                    <Grid item xs={6} container spacing={1} justify='center'>
                        <Grid item>
                            <Button variant='contained' onClick={this.handleClick('dfs')} color='primary'>DFS</Button>
                        </Grid>
                        <Grid item>
                            <Button variant='contained' onClick={this.handleClick('bfs')} color='primary'>BFS</Button>
                        </Grid>
                        <Grid item>
                            <Button variant='contained' onClick={this.handleClick('a*')} color='primary'>A*</Button>
                        </Grid>
                    </Grid>
                    <Grid item xs={6} container spacing={1} justify='center'>
                        <Grid item>
                            <Button variant='contained' onClick={this.handleClick('clearSearch')}>Clear Search</Button>
                        </Grid>
                        <Grid item>
                            <Button variant='contained' onClick={this.handleClick('clearAll')} color='primary'>Clear All</Button>
                        </Grid>
                    </Grid>
                </Grid>
                <P5Wrapper
                    sketch={SearchGrid}
                    anim={this.state.anim}
                    type={this.state.type}
                >
                </P5Wrapper>
            </React.Fragment>
        )
    }
}

export default withStyles(styles)(App)
