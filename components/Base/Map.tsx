import React from 'react';
import { makeStyles, Theme } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import GoogleMap from '../Utils/Map/Wrappermap';

interface IProps {}
const useStyles = makeStyles((theme: Theme) => ({
	root: {
        position: 'relative',
        height: '400px',
		[theme.breakpoints.only('xs')]: {
			height: '300px'
		}
	}
}));

export default function Map(props: IProps) {
	const classes = useStyles(props);

	return (
		<Box className={classes.root}>
			<GoogleMap></GoogleMap>
		</Box>
	);
}
