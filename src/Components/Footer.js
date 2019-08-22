import React from 'react'
import { withStyles } from '@material-ui/styles'

import AppBar from '@material-ui/core/AppBar'
import Grid from '@material-ui/core/Grid'
import Toolbar from '@material-ui/core/Toolbar'
// import Typography from '@material-ui/core/Typography'

import styles from '../Styles'

import IconList from './IconList'

class Footer extends React.Component {
    constructor(props){
        super(props)
        this.props = props
        this.year = (new Date()).getFullYear()

        this.renderXSIcons = this.renderXSIcons.bind(this)
        this.renderSMIcons = this.renderSMIcons.bind(this)
    }
    renderXSIcons() {
        return (
            <React.Fragment>
                <Grid item xs={12} container justify='center'>
                    <IconList {...this.props} />
                </Grid>
                <Grid item xs={12}>
                    <small style={{color:'#ffffff'}}>
                        &copy; {this.year} Keaton Mueller All Rights Reserved.
                    </small>
                    <br />
                    <small style={{color:'#ffffff'}}>
                        <a href='mailto:keaton.mueller@yale.edu' target='_blank' rel='noopener noreferrer' style={{color:'#ffffff'}}>
                            keaton.mueller@yale.edu
                        </a> | 914.260.4235
                    </small>
                </Grid>
            </React.Fragment>
        )
    }
    renderSMIcons() {
        return (
            <React.Fragment>
                <Grid item xs={9} md={4}>
                    <small style={{color:'#ffffff'}}>
                        &copy; {this.year} Keaton Mueller All Rights Reserved.
                    </small>
                    <br />
                    <small style={{color:'#ffffff'}}>
                        <a href='mailto:keaton.mueller@yale.edu' target='_blank' rel='noopener noreferrer' style={{color:'#f5f5f5'}}>
                            keaton.mueller@yale.edu
                        </a> | 914.260.4235
                    </small>
                </Grid>
                <Grid item xs={3} md={4} container justify='center'>
                    <IconList {...this.props} />
                </Grid>
                <Grid item xs={false} md={4}>
                </Grid>
            </React.Fragment>
        )
    }
    render() {
        const { classes } = this.props
        return(
			<footer>
				<AppBar position="static" className={classes.footer}>
					<Toolbar>
                        <Grid container justify='space-between' alignItems='center' className={classes.xsIcons}>
                            {this.renderXSIcons()}
                        </Grid>
                        <Grid container justify='space-between' alignItems='center' className={classes.smIcons}>
                            {this.renderSMIcons()}
                        </Grid>
					</Toolbar>
				</AppBar>
			</footer>
        )
    }
}

export default withStyles(styles)(Footer)
