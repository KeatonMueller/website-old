export default (theme) => (
	{
		title: {
			flexGrow: 1/3
		},
		gridRoot: {
			flexGrow: 1
		},
		aboutRoot: {
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
			overflow: 'hidden',
			borderColor: theme.palette.primary.main,
			borderRadius: '5px'
		},
		portrait:{
			display: 'block',
			// maxWidth: '194px',
			// maxHeight: '256px',
			// height: 'auto',
			// width: 'auto'
			width: '100%',
			height: 'auto',
			// width: '289px',
			// height: '380px'
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
			backgroundColor: theme.palette.secondary.dark
		}
	}
)
