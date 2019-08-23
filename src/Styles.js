export default (theme) => (
	{
		gridRoot: {
			flexGrow: 1
		},
		tabRoot: {
			marginTop: theme.spacing(2)
		},
		main:{
			[theme.breakpoints.up('sm')]: {
				width: '50%',
			},
			[theme.breakpoints.down('xs')]: {
				width: '94%'
			},
			minWidth: '256px',
			maxWidth: '600px',
			padding: theme.spacing(3),
			overflow: 'hidden'
		},
		portrait:{
			display: 'block',
			width: '100%',
			height: 'auto',
		},
		gridItem: {
			padding: theme.spacing(1)
		},
		paragraph: {
			fontSize: '24px',
			textIndent: '32px'
		},
		pageLabel: {
			marginBottom: theme.spacing(2)
		},
		footer: {
			marginTop: theme.spacing(4),
			backgroundColor: theme.palette.secondary.dark,
			left: 0,
			bottom: 0,
			width: '100%'
		},
		hideSmall: {
			[theme.breakpoints.up('sm')]: {
				display: 'block'
			},
			[theme.breakpoints.down('xs')]: {
				display: 'none'
			}
		},
		xsIcons: {
			[theme.breakpoints.up('sm')]: {
				display: 'none'
			},
			[theme.breakpoints.down('xs')]: {
				display: 'flex'
			}
		},
		smIcons: {
			[theme.breakpoints.up('sm')]: {
				display: 'flex'
			},
			[theme.breakpoints.down('xs')]: {
				display: 'none'
			}
		},
		titleBar: {
			background: 'linear-gradient(to bottom, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.5) 50%, rgba(0,0,0,0) 100%)'
		},
		bold: {
			fontWeight: 'bold'
		},
		iconButton: {
			color: '#ffffff'
		}
	}
)
