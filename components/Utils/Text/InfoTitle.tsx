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

export default function InfoTitle(props: IProps) {
	const { text } = props;
	const classes = useStyles(props);

	return (
		<Typography variant='h6' component='h6' className={classes.text}>
			{text}
		</Typography>
	);
}
