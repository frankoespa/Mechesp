import React from 'react';
import CheckIcon from '@material-ui/icons/Check';
import {
	WithStyles,
	Theme,
	createStyles,
	withStyles,
	Hidden,
	Box,
	Container,
	Grid,
	List,
	ListItem,
	ListItemIcon,
	ListItemText
} from '@material-ui/core';
import SecondTitle from '../Utils/SecondTitle';
import PrimaryText from '../Utils/PrimaryText';

const styles = (theme: Theme) =>
	createStyles({
		root: {
			display: 'flex',
			justifyContent: 'center',
			alignItems: 'center',
			backgroundColor: theme.palette.primary.main,
			backgroundImage: 'url("/portada2.svg")',
			backgroundPosition: 'top left',
			backgroundRepeat: 'no-repeat',
			backgroundSize: 'cover',
			paddingTop: theme.spacing(10),
			paddingBottom: theme.spacing(10),
			minHeight: '100vh'
		},
		item: {
			fontWeight: theme.typography.fontWeightBold,
			fontSize: '1rem'
		},
		itemIcon: {
			color: theme.palette.secondary.main,
			justifyContent: 'center'
		},
		serviciosImg: {
			width: '90%'
		}
	});

interface IProps extends WithStyles<typeof styles> {}

function Services(props: IProps): JSX.Element {
	const { classes } = props;
	const servicios: string[] = [
		'Mecánica General',
		'Diagnósis',
		'Mantenimiento',
		'Motor',
		'Frenos',
		'Suspensión',
		'Aceite y Filtros',
		'Pre ITV',
		'Transmisión'
	];

	return (
		<Box className={classes.root} id='Servicios'>
			<Container fixed>
				<Grid container>
					<Hidden smDown>
						<Grid item xs={12} md={8}>
							<img src='/iconservices.svg' alt='Servicios Mecánica Esparza' className={classes.serviciosImg} />
						</Grid>
					</Hidden>
					<Grid item xs={12} md={4}>
						<SecondTitle text='Servicios' color='light' align='left' />
						<PrimaryText
							color='light'
							text='Ofrecemos servicios variados de mecánica integral automotriz apoyándonos en el diagnóstico computarizado y las últimas herramientas para llevar a cabo un proceso de reparación exitoso y en el menor tiempo posible.'
						/>
						<List aria-label='servicios'>
							{servicios.map((s, k) => (
								<ListItem key={k}>
									<ListItemIcon className={classes.itemIcon}>
										<CheckIcon></CheckIcon>
									</ListItemIcon>
									<ListItemText disableTypography={true} primary={s} className={classes.item} />
								</ListItem>
							))}
						</List>
					</Grid>
				</Grid>
			</Container>
		</Box>
	);
}

export default withStyles(styles)(Services);
