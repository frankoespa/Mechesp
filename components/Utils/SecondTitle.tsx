import { makeStyles, Theme, Typography } from '@material-ui/core';
import { Fragment } from 'react';

interface IProps {
	text: string;
	color: 'dark' | 'light';
	align: 'center' | 'left';
	subtitle?: string;
}

const useStyles = makeStyles((theme: Theme) => ({
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
		<Fragment>
			<Typography variant='h2' component='h2' gutterBottom={subtitle ? false : true} className={classes.title}>
				{text}
			</Typography>
			<Typography variant='subtitle2' component='p' gutterBottom className={classes.titleSub}>
				{subtitle}
			</Typography>
		</Fragment>
	);
}
