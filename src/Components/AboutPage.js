import React from 'react'
import { withStyles } from '@material-ui/styles'

import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'

import Portrait from '../Images/Portrait.JPG'

import styles from '../Styles'

class AboutPage extends React.Component {
    componentDidMount(){
        document.title = 'About | Keaton Mueller'
    }
    render() {
        const { classes } = this.props
        return(
			<div className={classes.tabRoot}>
				<Grid container spacing={0} justify='center'>
					<Grid item xs={12} container justify='center' align='left'>
						<Typography variant='h5' className={classes.pageLabel}>
							About
						</Typography>
					</Grid>
                    <Grid item xs={12} container justify='center'>
    					<Paper className={classes.main} >
    						<Grid container spacing={0}>
    							<Grid item xs={12} md={6} container justify='center' alignItems='center' className={classes.gridItem}>
    								<Typography className={classes.paragraph}>
    									My name is Keaton Mueller, and I'm a Computer Science major at Yale University. I'm in my fourth year, and I plan on receiving a B.S. in Computer Science in May 2021.
    								</Typography>
    							</Grid>
    							<Grid item xs={12} md={6} container justify='center' className={classes.gridItem}>
    								<div style={{overflow: 'hidden'}}>
    									<img className={classes.portrait} src={Portrait} alt='Portrait' />
    								</div>
    							</Grid>
    							<Grid item xs={12} container justify='center' className={classes.gridItem}>
    								<Typography className={classes.paragraph}>
    									I'm very excited to be joining Amazon as a full-time Software Development Engineer once I graduate. I will be based in New York City and working for the AWS organization on the EBS control plane team.
    								</Typography>
    							</Grid>
    						</Grid>
    					</Paper>
                    </Grid>
				</Grid>
			</div>
        )
    }
}

export default withStyles(styles)(AboutPage)
