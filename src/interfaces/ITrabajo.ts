import { Moment } from 'moment';
import { IServicioTrabajo } from './IServicioTrabajo';

export interface ITrabajo {
	_id?: string;
	fechaEntrada?: Moment;
	fechaSalida?: Moment;
	defecto?: string;
	estado?: string;
	observaciones?: string;
	montoServicios?: number;
	montoRepuestos?: number;
	descuento?: number;
	montoFinal?: number;
	servicios?: IServicioTrabajo[];
	repuestos?: {}[];
}
