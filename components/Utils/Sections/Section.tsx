import React from 'react';
import Box from '@material-ui/core/Box';
import { Theme, makeStyles } from '@material-ui/core/styles';

interface IProps {
	children: JSX.Element[] | JSX.Element;
	background?: 'dark' | 'light';
}
const useStyles = makeStyles((theme: Theme) => ({
	root: (props: IProps) => ({
		paddingTop: theme.spacing(10),
		paddingBottom: theme.spacing(10),
		background:
			props.background == 'dark' ? theme.palette.primary.main : props.background == 'light' ? theme.palette.primary.light : 'transparent'
	})
}));

export default function Section(props: IProps) {
	const classes = useStyles(props);
	const { children } = props;

	return <Box className={classes.root}>{children}</Box>;
}
