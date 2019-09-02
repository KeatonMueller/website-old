import React from 'react'
import { withStyles } from '@material-ui/styles'

import Grid from '@material-ui/core/Grid'
import GridList from '@material-ui/core/GridList'
import GridListTile from '@material-ui/core/GridListTile'
import GridListTileBar from '@material-ui/core/GridListTileBar'
import IconButton from '@material-ui/core/IconButton'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'

import InfoIcon from '@material-ui/icons/Info'

import Chess from '../Images/Chess.png'
import Cube from '../Images/Cube.png'
import Minesweeper from '../Images/Minesweeper.png'
import Tetris from '../Images/Tetris.png'
import Website from '../Images/Website.png'

import ProjectDialog from './ProjectDialog'

import styles from '../Styles'

class ProjectsPage extends React.Component {
    constructor(props){
        super(props)

        this.state = {
            dialogOpen: false,
            dialogTitle: ''
        }

        this.handleClick = this.handleClick.bind(this)
        this.handleClose = this.handleClose.bind(this)
    }
    componentDidMount(){
        document.title = 'Projects | Keaton Mueller'
    }
    handleClick(event){
        this.setState({
            dialogOpen: true,
            dialogTitle: event.currentTarget.id
        })
    }
    handleClose(){
        this.setState({
            dialogOpen: false,
            dialogTitle: ''
        })
    }
    render() {
        const { classes } = this.props
        return(
			<div className={classes.tabRoot}>
				<Grid container spacing={0} justify='center'>
					<Grid item xs={12} container justify='center' align='left'>
						<Typography variant='h5' className={classes.pageLabel}>
							Projects
						</Typography>
					</Grid>
					<Paper className={classes.main} >
						<GridList cols={3} spacing={8}>
                            <GridListTile cols={3} rows={2}>
                                <img src={Cube} alt="Rubik's Cube" />
                                <GridListTileBar
                                    title="Rubik's Cube"
                                    titlePosition='top'
                                    actionIcon={
                                        <IconButton
                                            id="Rubik's Cube"
                                            onClick={this.handleClick}
                                            className={classes.iconButton}
                                        >
                                            <InfoIcon />
                                        </IconButton>
                                    }
                                    className={classes.titleBar}
                                    classes={{ title: classes.bold }}
                                />
                            </GridListTile>
                            <GridListTile cols={2} rows={2}>
                                <img src={Chess} alt='Chess' />
                                <GridListTileBar
                                    title='Chess'
                                    titlePosition='top'
                                    actionIcon={
                                        <IconButton
                                            id='Chess'
                                            onClick={this.handleClick}
                                            className={classes.iconButton}
                                        >
                                            <InfoIcon />
                                        </IconButton>
                                    }
                                    className={classes.titleBar}
                                    classes={{ title: classes.bold }}
                                />
                            </GridListTile>
                            <GridListTile cols={1} rows={2}>
                                <img src={Tetris} alt='Tetris' />
                                <GridListTileBar
                                    title='Tetris'
                                    titlePosition='top'
                                    actionIcon={
                                        <IconButton
                                            id='Tetris'
                                            onClick={this.handleClick}
                                            className={classes.iconButton}
                                        >
                                            <InfoIcon />
                                        </IconButton>
                                    }
                                    className={classes.titleBar}
                                    classes={{ title: classes.bold }}
                                />
                            </GridListTile>
                            <GridListTile cols={3} rows={1}>
                                <img src={Minesweeper} alt='Minesweeper' />
                                <GridListTileBar
                                    title='Minesweeper'
                                    titlePosition='top'
                                    actionIcon={
                                        <IconButton
                                            id='Minesweeper'
                                            onClick={this.handleClick}
                                            className={classes.iconButton}
                                        >
                                            <InfoIcon />
                                        </IconButton>
                                    }
                                    className={classes.titleBar}
                                    classes={{ title: classes.bold }}
                                />
                            </GridListTile>
                            <GridListTile cols={3} rows={2}>
                                <img src={Website} alt='Personal Website' />
                                <GridListTileBar
                                    title='Personal Website'
                                    titlePosition='top'
                                    actionIcon={
                                        <IconButton
                                            id='Personal Website'
                                            onClick={this.handleClick}
                                            className={classes.iconButton}
                                        >
                                            <InfoIcon />
                                        </IconButton>
                                    }
                                    className={classes.titleBar}
                                    classes={{ title: classes.bold }}
                                />
                            </GridListTile>
                        </GridList>
					</Paper>
				</Grid>
                <ProjectDialog
                    open={this.state.dialogOpen}
                    onClose={this.handleClose}
                    title={this.state.dialogTitle}
                />
			</div>
        )
    }
}

export default withStyles(styles)(ProjectsPage)
