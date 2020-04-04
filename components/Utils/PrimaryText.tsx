import { makeStyles, Theme, Typography } from '@material-ui/core';

interface IProps {
	text: string;
	color: 'dark' | 'light';
}

const useStyles = makeStyles((theme: Theme) => ({
	text: (props: IProps) => ({
		color: props.color == 'dark' ? theme.palette.text.secondary : theme.palette.text.primary
	})
}));

export default function PrimaryText(props: IProps) {
	const { text } = props;
	const classes = useStyles(props);

	return (
		<Typography variant='body1' component='p' gutterBottom className={classes.text}>
			{text}
		</Typography>
	);
}
