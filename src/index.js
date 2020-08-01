import React from 'react'
import ReactDOM from 'react-dom'
import App from './Components/App'
import Cube from './Cube/App'
import Search from './Search/App'
import Footer from './Components/Footer'
import { HashRouter, Route, Switch } from 'react-router-dom'

import CssBaseline from '@material-ui/core/CssBaseline'
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core'
import { indigo } from '@material-ui/core/colors'

const theme = createMuiTheme({
	palette: {
		primary: {
			main: indigo[900]
		},
		secondary: {
			main: '#F5F5F5',
			dark: '#B0BEC5'
		},
		background: {
			default: '#F5F5F5'
		}
	},
	typography: {
		fontFamily: [
			'"Avenir Next"',
			'"Segoe UI"',
			'Roboto',
			'-apple-system',
			'sans-serif',
			'BlinkMacSystemFont',
			'"Helvetica Neue"',
			'Arial',
			].join(',')
		}
})


ReactDOM.render(
	(<div style={{
		display: 'flex',
		flexDirection: 'column',
		minHeight: '100vh'
	}}>
		<MuiThemeProvider theme={theme}>
			<CssBaseline />
			<HashRouter basename={process.env.PUBLIC_URL}>
				<Switch>
					<Route exact path='/'>
						<App />
						<Footer />
					</Route>
					<Route path='/cube'>
						<Cube />
						<Footer />
					</Route>
					<Route path='/search'>
						<Search />
						<Footer />
					</Route>
					<Route component={() => (<div>404 Not Found</div>)} />
				</Switch>
			</HashRouter>
		</MuiThemeProvider>
	</div>
	), document.getElementById('root'));
