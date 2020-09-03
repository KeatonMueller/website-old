import React from 'react'
import { withStyles } from '@material-ui/styles'

import { Link } from 'react-router-dom'

import Button from '@material-ui/core/Button'
import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import DialogTitle from '@material-ui/core/DialogTitle'
import Typography from '@material-ui/core/Typography'

import styles from '../Styles'

class ProjectDialog extends React.Component {
	renderContent(){
		const { classes } = this.props
		switch(this.props.title){
			case 'Chess':
				return (
					<Typography className={classes.indent}>
						This application implements the game of Chess for one or two players. It is coded in Java using the Swing library. For the one player mode, your opponent is an AI coded using the Minimax algorithm with Alpha Beta pruning. To view the source code, visit <a href='https://www.github.com/KeatonMueller/chess' target='_blank' rel='noopener noreferrer' style={{color:'#000000'}}>GitHub</a>.
					</Typography>
				)
			case "Rubik's Cube":
				return (
					<React.Fragment>
						<Typography paragraph className={classes.indent}>
							This application implements a virtual Rubik's Cube. It is coded in JavaScript using Three.js to handle 3D rendering. To view the source code, visit <a href='https://www.github.com/KeatonMueller/cube' target='_blank' rel='noopener noreferrer' style={{color:'#000000'}}>GitHub</a>.
						</Typography>
						<Typography className={classes.indent}>
							To view the application in browser, click <Link to='/cube' style={{color:'#000000'}}>here</Link>.
						</Typography>
					</React.Fragment>
				)
			case 'Tetris':
				return (
					<Typography className={classes.indent}>
						This application implements the game of Tetris. It is coded in Java using the Swing library. To view the source code, visit <a href='https://www.github.com/KeatonMueller/tetris' target='_blank' rel='noopener noreferrer' style={{color:'#000000'}}>GitHub</a>.
					</Typography>
				)
			case 'Minesweeper':
				return (
					<Typography className={classes.indent}>
						This application implements the game of Minesweeper. It is coded in Java using the Swing library. To view the source code, visit <a href='https://www.github.com/KeatonMueller/minesweeper' target='_blank' rel='noopener noreferrer' style={{color:'#000000'}}>GitHub</a>.
					</Typography>
				)
			case 'Search Algorithm Visualization':
				return (
					<React.Fragment>
						<Typography paragraph className={classes.indent}>
							This application is a visualization tool for various search algorithms. Currently it supports DFS, BFS, and A* Search, but more algorithms are intended to be added. The animations are rendered using p5.js. To view the source code, visit <a href='https://www.github.com/KeatonMueller/search' target='_blank' rel='noopener noreferrer' style={{color:'#000000'}}>GitHub</a>.
						</Typography>
						<Typography className={classes.indent}>
							To view the application in browser, click <Link to='/search' style={{color:'#000000'}}>here</Link>.
						</Typography>
					</React.Fragment>
				)
			case 'Personal Website':
				return (
					<Typography className={classes.indent}>
						This is my personal website, coded using React and Material-UI. To view the source code, visit <a href='https://www.github.com/KeatonMueller/keatonmueller.github.io/tree/code' target='_blank' rel='noopener noreferrer' style={{color:'#000000'}}>GitHub</a>.
					</Typography>
				)
			case 'rl-cube':
				return (
					<Typography className={classes.indent}>
						This is a reinforcement learning project that aims to solve the Rubik's Cube without any prior knowledge. It is currently able to solve most length 12 scrambles in under half of a second. To view the source code, visit <a href='https://github.com/KeatonMueller/rl-cube' target='_blank' rel='noopener noreferrer' style={{color:'#000000'}}>GitHub</a>.
					</Typography>
				)
			default:
				return null
		}
	}
    render() {
        return(
			<Dialog
				open={this.props.open}
				onClose={this.props.onClose}
			>
				<DialogTitle>{this.props.title}</DialogTitle>
				<DialogContent>
					{this.renderContent()}
				</DialogContent>
				<DialogActions>
					<Button
						variant='contained'
						color='primary'
						onClick={this.props.onClose}
					>
						Close
					</Button>
				</DialogActions>
			</Dialog>
        )
    }
}

export default withStyles(styles)(ProjectDialog)
