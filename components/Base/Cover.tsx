import React from 'react';
import { Theme, createStyles, WithStyles, withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Container from '@material-ui/core/Container';

const styles = (theme: Theme) =>
	createStyles({
		root: {
			display: 'flex',
			justifyContent: 'center',
			alignItems: 'center',
			width: '100%',
			minHeight: `calc(100vh - 64px)`,
			backgroundColor: theme.palette.primary.main,
			backgroundImage: 'url("/portada.svg")',
			backgroundPosition: 'top left',
			backgroundRepeat: 'no-repeat',
			backgroundSize: 'cover',
			paddingTop: theme.spacing(10),
			paddingBottom: theme.spacing(10)
		},
		title: {},
		innerTitle: {
			color: theme.palette.secondary.main
		},
		actionBtn: {
			background: 'linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)',
			color: theme.palette.text.primary
		},
		gridImg: {
			display: 'flex',
			justifyContent: 'center',
			alignItems: 'center'
		},
		gridTitle: {
			[theme.breakpoints.down('md')]: {
				display: 'flex',
				justifyContent: 'center',
				alignItems: 'center'
			}
		},
		portadaImg: {
			width: '100%',
			[theme.breakpoints.only('xs')]: {
				width: '80%'
			}
		}
	});

interface IProps extends WithStyles<typeof styles> {}

function Cover(props: IProps): JSX.Element {
	const { classes } = props;

	return (
		<Box className={classes.root}>
			<Container fixed>
				<Grid container>
					<Grid item xs={12} lg={6} className={classes.gridTitle}>
						<Typography variant='h1' component='h1' gutterBottom className={classes.title}>
							Mecánica <br></br> Automotriz <br></br> <span className={classes.innerTitle}>Profesional</span>
						</Typography>
					</Grid>
					<Grid item xs={12} lg={6} className={classes.gridImg}>
						<img src='/work.svg' alt='portada Mecánica Esparza Rosario' className={classes.portadaImg} />
					</Grid>
				</Grid>
			</Container>
		</Box>
	);
}

export default withStyles(styles)(Cover);
