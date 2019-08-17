import React from 'react'
import { withStyles } from '@material-ui/styles'

import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'

import Portrait from '../Portrait.JPG'


import styles from '../Styles'

class AboutPage extends React.Component {
    componentDidMount(){
        document.title = 'About | Keaton Mueller'
    }
    render() {
        const { classes } = this.props;
        return(
			<div className={classes.aboutRoot}>
				<Grid container spacing={0} justify='center'>
					<Grid item xs={12} container justify='center' align='left'>
						<Typography variant='h5' className={classes.pageLabel}>
							About
						</Typography>
					</Grid>
					<Paper className={classes.main} >
						<Grid container spacing={0}>
							<Grid item xs={12} md={6} container justify='center' alignItems='center' className={classes.gridItem}>
								<Typography className={classes.paragraph}>
									My name's Keaton Mueller, and I'm a Computer Science major at Yale University. I'm currently in my third year, and I plan on receiving a B.S. in Computer Science in May 2021.
								</Typography>
							</Grid>
							<Grid item xs={12} md={6} container justify='center' className={classes.gridItem}>
								<div style={{overflow: 'hidden'}}>
									<img className={classes.portrait} src={Portrait} alt='Portrait' />
								</div>
							</Grid>
							<Grid item xs={12} container justify='center' className={classes.gridItem}>
								<Typography className={classes.paragraph}>
									I'm currently looking for a technical internship for the Summer of 2020. My passions include software engineering, machine learning, natural language processing, and learning new technologies.
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
