import React from 'react'
import { withStyles } from '@material-ui/styles'

import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'

import styles from '../Styles'

class ProjectsPage extends React.Component {
    componentDidMount(){
        document.title = 'Projects | Keaton Mueller'
    }
    render() {
        const { classes } = this.props
        return(
			<div className={classes.aboutRoot}>
				<Grid container spacing={0} justify='center'>
					<Grid item xs={12} container justify='center' align='left'>
						<Typography variant='h5' className={classes.pageLabel}>
							Projects
						</Typography>
					</Grid>
					<Paper className={classes.main} >
						<Typography className={classes.paragraph}>
							This here website
						</Typography>
					</Paper>
				</Grid>
			</div>
        )
    }
}

export default withStyles(styles)(ProjectsPage)
