export default (theme) => (
	{
		title: {
			flexGrow: 1/3
		},
		gridRoot: {
			flexGrow: 1
		},
		aboutRoot: {
			marginTop: theme.spacing.unit*3
		},
		main:{
			width: '50%',
			minWidth: '256px',
			padding: theme.spacing.unit*3,
			overflow: 'hidden'
		},
		portrait:{
			maxWidth: '100%',
			// height: 'auto'
			maxHeight: '256px',
			// width: 'auto'
		},
		gridItem: {
			padding: theme.spacing.unit
		}
	}
)
