import React from 'react'
import { withStyles } from '@material-ui/styles'

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
			case 'Personal Website':
				return (
					<Typography className={classes.indent}>
						This is my personal website, coded using React and Material-UI. To view the source code, visit <a href='https://www.github.com/KeatonMueller/keatonmueller.github.io/tree/code' target='_blank' rel='noopener noreferrer' style={{color:'#000000'}}>GitHub</a>.
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
