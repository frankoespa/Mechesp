import { Moment } from 'moment';

export interface IServicioTrabajo {
	_id: string;
	nombre: string;
	precio: number;
	tipo: string;
	desc: string;
	fechaHora: Moment;
}
