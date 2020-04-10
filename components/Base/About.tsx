import React from 'react';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import { WithStyles, Theme, createStyles, withStyles, Box } from '@material-ui/core';
import Section from '../Utils/Section';
import SecondTitle from '../Utils/SecondTitle';
import PrimaryText from '../Utils/PrimaryText';

const styles = (theme: Theme) =>
	createStyles({
		root: {
			minHeight: '100vh',
			backgroundColor: theme.palette.primary.light,
			display: 'flex',
			justifyContent: 'center',
			alignItems: 'center'
		},
		rootGrid: {
			paddingTop: theme.spacing(5)
		},
		info: {
			color: theme.palette.text.secondary
		},
		titleIcon: {
			color: theme.palette.text.secondary,
			textAlign: 'center'
		},
		boxGrid: {
			textAlign: 'center'
		},
		innerTitle: {
			color: theme.palette.secondary.main
		},
		icon: {
			width: '5rem'
		},
		divider: {
			marginTop: theme.spacing(5),
			marginBottom: theme.spacing(5)
		}
	});

interface IProps extends WithStyles<typeof styles> {}

function About(props: IProps): JSX.Element {
	const { classes } = props;

	return (
		<Box className={classes.root} id='Nosotros'>
			<Section background='light'>
				<Container fixed>
					<SecondTitle text='Nosotros' color='dark' align='center' subtitle='DESDE 1980' />
					<Grid container spacing={4} className={classes.rootGrid}>
						<Grid item xs={12} md={6}>
							<PrimaryText
								color='dark'
								text='Somos una empresa especializada en servicios de mecánica integral automotriz desde hace 30 años, contando con un equipo de profesionales experimentados, equipamiento y tecnología de vanguardia. Nuestro personal se encuentra siempre en constante capacitación, manteniéndose completamente actualizados sobre las últimas técnicas y procesos de reparaciones y diagnósticos.'
							/>
						</Grid>
						<Grid item xs={12} md={6}>
							<PrimaryText
								color='dark'
								text='Si se presenta un problema en su vehículo, lo eliminaremos de forma rápida y efectiva realizando todos los trabajos relacionados con la reparación de su vehículo, de manera eficiente y económica. Estamos listos para ofrecerle una gama completa de servicios para el mantenimiento y reparación de su vehículo.'
							/>
						</Grid>
					</Grid>
					<Divider className={classes.divider} />
					<Grid container spacing={4} className={classes.rootGrid}>
						<Grid item xs={12} md={6} className={classes.boxGrid}>
							<img src='/ourmision.svg' alt='Mision' className={classes.icon} />
							<Typography variant='h2' component='h2' gutterBottom className={classes.titleIcon}>
								Nuestra <span className={classes.innerTitle}>Misión</span>
							</Typography>
							<PrimaryText
								color='dark'
								text='Ofrecer un servicio mecánico de calidad y variado, creando valor para nuestros clientes desde nuestra experiencia y tecnología.'
							/>
						</Grid>
						<Grid item xs={12} md={6} className={classes.boxGrid}>
							<img src='/ourvision.svg' alt='Mision' className={classes.icon} />
							<Typography variant='h2' component='h2' gutterBottom className={classes.titleIcon}>
								Nuestra <span className={classes.innerTitle}>Visión</span>
							</Typography>
							<PrimaryText
								color='dark'
								text='Posicionarnos como uno de los mejores centros de reparación y mantenimiento de vehículos de Rosario apoyándonos en el trabajo en equipo, el respeto hacia el cliente, la innovación, el compromiso y el esfuerzo.'
							/>
						</Grid>
					</Grid>
				</Container>
			</Section>
		</Box>
	);
}

export default withStyles(styles)(About);
