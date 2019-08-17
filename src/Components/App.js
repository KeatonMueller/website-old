import React from 'react'
import { withStyles } from '@material-ui/styles'

import Header from './Header'
import Footer from './Footer'
import AboutPage from './AboutPage'
import ProjectsPage from './ProjectsPage'

import styles from '../Styles'

class App extends React.Component {
    constructor(props){
        super(props)

        this.props = props

        this.state = {
            tab: 0
        }
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(event, newValue){
        this.setState({ tab: newValue })
    }
    render() {
        const { classes } = this.props;
        return(
            <div className={classes.gridRoot}>
                <Header
                    tab={this.state.tab}
                    onChange={this.handleChange}
                    {...this.props}
                />
                {this.state.tab === 0 ?
                    <AboutPage {...this.props} /> :
                    null
                }
                {this.state.tab === 1 ?
                    <ProjectsPage {...this.props} /> :
                    null
                }
                <Footer />
            </div>
        )
    }
}

export default withStyles(styles)(App)
