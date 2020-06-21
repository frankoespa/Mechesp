import { makeStyles, Theme, Typography, Box } from '@material-ui/core';

interface IProps {
	text: string;
	color: 'dark' | 'light';
	align: 'center' | 'left';
	subtitle?: string;
}

const useStyles = makeStyles((theme: Theme) => ({
    root: {
        paddingBottom: theme.spacing(4)
    },
	title: (props: IProps) => ({
		color: props.color == 'dark' ? theme.palette.text.secondary : theme.palette.text.primary,
		textAlign: props.align,
		[theme.breakpoints.only('xs')]: {
			textAlign: 'left'
		}
	}),
	titleSub: (props: IProps) => ({
		color: props.color == 'dark' ? theme.palette.text.secondary : theme.palette.text.primary,
		fontWeight: theme.typography.fontWeightMedium,
		marginTop: '-10px',
		textAlign: props.align,
		[theme.breakpoints.only('xs')]: {
			textAlign: 'left'
		}
	})
}));

export default function SecondTitle(props: IProps) {
	const { text, subtitle } = props;
	const classes = useStyles(props);

	return (
			<Box className={classes.root}>
				<Typography variant='h2' component='h2' className={classes.title}>
					{text}
				</Typography>
				{subtitle && (
					<Typography variant='subtitle2' component='p' className={classes.titleSub}>
						{subtitle}
					</Typography>
				)}
			</Box>
	);
}
