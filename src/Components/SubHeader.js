import React from 'react'
import { withStyles } from '@material-ui/styles'

import AppBar from '@material-ui/core/AppBar'
import Grid from '@material-ui/core/Grid'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'

import { Link } from 'react-router-dom'

import styles from '../Styles'

class Header extends React.Component {
    componentDidMount(){
        document.title = 'Cube | Keaton Mueller'
    }
    render() {
        return(
			<AppBar position="static">
				<Toolbar>
                    <Grid container justify='space-between'>
                        <Grid item xs={6} sm={4} container alignItems='center'>
                            <Link to='/' style={{ textDecoration: 'none', color: '#ffffff' }}>
                				<Typography variant='h5'>
                					Keaton Mueller
                				</Typography>
                            </Link>
                        </Grid>
                        <Grid item xs={6} sm={4} container justify='center'>
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
