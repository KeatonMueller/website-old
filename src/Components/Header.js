import React from 'react'
import { withStyles } from '@material-ui/styles'

import AppBar from '@material-ui/core/AppBar'
import Grid from '@material-ui/core/Grid'
import Tab from '@material-ui/core/Tab'
import Tabs from '@material-ui/core/Tabs'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'

import styles from '../Styles'

class Header extends React.Component {
    componentDidMount(){
        document.title = 'Projects | Keaton Mueller'
    }
    render() {
        const { classes } = this.props
        return(
			<AppBar position="static">
				<Toolbar>
                    <Grid container justify='space-between'>
                        <Grid item xs={6} sm={4} container alignItems='center'>
            				<Typography variant='h5' className={classes.title}>
            					Keaton Mueller
            				</Typography>
                        </Grid>
                        <Grid item xs={6} sm={4}container justify='center'>
            				<Tabs value={this.props.tab} onChange={this.props.onChange}>
            					<Tab label='About' />
            					<Tab label='Projects' />
            				</Tabs>
                        </Grid>
                        <Grid item xs={false} sm={4}>
                        </Grid>
                    </Grid>
				</Toolbar>
			</AppBar>
        )
    }
}

export default withStyles(styles)(Header)
