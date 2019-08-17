import React from 'react'
import { withStyles } from '@material-ui/styles'

import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'

import styles from '../Styles'

class Footer extends React.Component {
    render() {
        const { classes } = this.props;
        return(
			<AppBar position="static" className={classes.footer}>
				<Toolbar>
				<Typography variant='h5' className={classes.title}>
					Keaton Mueller
				</Typography>
				</Toolbar>
			</AppBar>
        )
    }
}

export default withStyles(styles)(Footer)
