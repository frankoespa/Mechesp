import React, { Component } from 'react';
import { Theme, createStyles, WithStyles, withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import Grid from '@material-ui/core/Grid';
import moment from 'moment';
import PanelExpanded from '../../components/PanelExpanded';
import MyDateTimeInput from '../../components/MyDateTimeInput';
import CustomerCardView from '../../components/CustomerCardView';
import TableServices from '../../components/TableServices';
import { ITrabajo } from '../../src/interfaces/ITrabajo';
import { IServicioTrabajo } from '../../src/interfaces/IServicioTrabajo';

const styles = (theme: Theme) =>
	createStyles({
		textField: {
			width: '100%'
		}
	});

interface IProps extends WithStyles<typeof styles> {}
class VerTrabajo extends Component<IProps, ITrabajo> {
	constructor(props) {
		super(props);
		this.estadoChange = this.estadoChange.bind(this);
		this.fechaEntradaChange = this.fechaEntradaChange.bind(this);
		this.fechaSalidaChange = this.fechaSalidaChange.bind(this);
		this.deleteServicioGrilla = this.deleteServicioGrilla.bind(this);
		this.state = {
			estado: 'Reparando',
			fechaEntrada: moment(),
			fechaSalida: moment(),
			servicios: [
				{
					_id: '',
					nombre: 'Diagnóstico computarizado',
					precio: 1500,
					tipo: 'ESPECIAL',
					desc: '',
					fechaHora: moment()
				},
				{
					_id: '',
					nombre: 'Limpieza de inyectores',
					precio: 1100,
					tipo: 'ESPECIAL',
					desc: '',
					fechaHora: moment().add(1, 'days')
				}
			]
		};
	}

	estadoChange(e: React.ChangeEvent<HTMLInputElement>) {
		this.setState({ estado: e.target.value });
	}

	fechaEntradaChange(date: moment.Moment, value: string) {
		this.setState({
			fechaEntrada: date
		});
	}

	fechaSalidaChange(date: moment.Moment, value: string) {
		this.setState({
			fechaSalida: date
		});
	}

	deleteServicioGrilla(i: number) {
		const listaServicios: IServicioTrabajo[] = this.state.servicios;
		listaServicios.splice(i, 1);
		this.setState({
			servicios: listaServicios
		});
	}

	render() {
		const { classes } = this.props;
		return (
			<React.Fragment>
				<PanelExpanded title='Información del trabajo'>
					<Grid container justify='center' spacing={5}>
						<Grid item xl={4} xs={12}>
							<TextField
								id='estado'
								select
								label='Estado trabajo'
								className={classes.textField}
								value={this.state.estado}
								margin='normal'
								variant='outlined'
								onChange={this.estadoChange}>
								{['En revisión', 'Presupuesto rechazado', 'Espera repuesto', 'Reparando', 'Finalizado', 'Entregado'].map((option) => (
									<MenuItem key={option} value={option}>
										{option}
									</MenuItem>
								))}
							</TextField>
						</Grid>
					</Grid>
					<Grid container spacing={5}>
						<Grid item xl={4} xs={12}>
							<MyDateTimeInput title='Entrada' value={this.state.fechaEntrada} valueOnChange={this.fechaEntradaChange} />
							<MyDateTimeInput title='Salida' value={this.state.fechaSalida} valueOnChange={this.fechaSalidaChange} />
						</Grid>
						<Grid item xl={4} xs={12}>
							<TextField
								id='defecto'
								label='Defecto'
								multiline
								rows={5}
								rowsMax={5}
								className={`${classes.textField}`}
								margin='normal'
								variant='outlined'
							/>
						</Grid>
						<Grid item xl={4} xs={12}>
							<TextField
								id='observaciones'
								label='Observaciones'
								multiline
								rows={5}
								rowsMax={5}
								className={`${classes.textField}`}
								margin='normal'
								variant='outlined'
							/>
						</Grid>
					</Grid>
				</PanelExpanded>
				<Grid container spacing={5}>
					<Grid item xl={6} xs={12}>
						<CustomerCardView
							title='Cliente'
							mapper={{
								Patente: 'OMA320',
								Marca: 'Ford',
								Año: '2014',
								Modelo: 'Ecosport Titanium 2.0'
							}}
						/>
					</Grid>
					<Grid item xl={6} xs={12}>
						<CustomerCardView
							title='Vehículo'
							mapper={{
								Dni: 37654790,
								Nombre: 'Alejandro James',
								Contacto: '341 - 6452410',
								Email: 'alejames@gmail.com'
							}}
						/>
					</Grid>
				</Grid>
				<PanelExpanded title='Servicios'>
					<TableServices items={this.state.servicios} deleteServicioGrilla={this.deleteServicioGrilla}></TableServices>
				</PanelExpanded>
				{/* <PanelExpanded title='Presupuesto'></PanelExpanded> */}
			</React.Fragment>
		);
	}
}

export default withStyles(styles)(VerTrabajo);
