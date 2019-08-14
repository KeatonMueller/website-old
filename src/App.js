import React from 'react'
import { withStyles } from '@material-ui/styles'

import AppBar from '@material-ui/core/AppBar'
import Grid from '@material-ui/core/Grid'
import IconButton from '@material-ui/core/IconButton'
import Tab from '@material-ui/core/Tab'
import Tabs from '@material-ui/core/Tabs'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'

import AboutPage from './AboutPage'

import styles from './Styles'

class App extends React.Component {
    constructor(props){
        super(props)

        this.props = props

        this.state = {
            tab: 0
        }
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(event, newValue){
        this.setState({tab: newValue})
    }
    render() {
        const { classes } = this.props;
        return(
            <div className={classes.gridRoot}>
                <AppBar position="static">
                    <Toolbar>
                    <Typography variant='h5' className={classes.title}>
                        Keaton Mueller
                    </Typography>
                    <Tabs value={this.state.tab} onChange={this.handleChange}>
                        <Tab label='About' />
                        <Tab label='Projects' />
                    </Tabs>
                    </Toolbar>
                </AppBar>
                {this.state.tab === 0 ?
                    <AboutPage {...this.props} /> :
                    null
                }
                {this.state.tab === 1 ?
                    <Typography>Minecraft</Typography> :
                    null
                }
            </div>
        )
    }
}

export default withStyles(styles)(App)
