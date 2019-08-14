import React from 'react'
import { withStyles } from '@material-ui/styles'

import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Grid from '@material-ui/core/Grid'
import IconButton from '@material-ui/core/IconButton'
import Paper from '@material-ui/core/Paper'
import Tab from '@material-ui/core/Tab'
import Tabs from '@material-ui/core/Tabs'
import Typography from '@material-ui/core/Typography'

import Portrait from './Portrait.JPG'


import styles from './Styles'

class AboutPage extends React.Component {
    constructor(props){
        super(props)

    }

    render() {
        const { classes } = this.props;
        return(
			<div className={classes.aboutRoot}>
				<Grid container spacing={8} justify='center'>
					<Grid item xs={12} container justify='center' align='left'>
						<Typography variant='h5'>
							About
						</Typography>
					</Grid>
					<Paper className={classes.main} >
						<Grid container spacing={0}>
							<Grid item xs={12} sm={6} container justify='center' alignItems='center' className={classes.gridItem}>
								<Typography>
									My name's Keaton Mueller, and I'm a Computer Science major at Yale University. I'm currently in my third year, and I plan on receiving a B.S. in Computer Science in May 2021.
								</Typography>
							</Grid>
							<Grid item xs={12} sm={6} container justify='center' className={classes.gridItem}>
								<img className={classes.portrait} src={Portrait} alt='Portrait' />
							</Grid>
							<Grid item xs={12} container justify='center' className={classes.gridItem}>
								<Typography paragraph>
									I'm currently looking for a technical internship for the Summer of 2020. My passions include software engineering, machine learning, natural language processing, and just programming in general.
								</Typography>
							</Grid>
						</Grid>
					</Paper>
				</Grid>
			</div>
        )
    }
}

export default withStyles(styles)(AboutPage)
