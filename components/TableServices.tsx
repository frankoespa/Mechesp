import React from 'react';
import { Theme, createStyles, WithStyles, withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import TableBody from '@material-ui/core/TableBody';
import Tooltip from '@material-ui/core/Tooltip';
import IconButton from '@material-ui/core/IconButton';
import AddIcon from '@material-ui/icons/Add';
import DeleteIcon from '@material-ui/icons/Delete';
import DialogDeleteService from './DialogDeleteService';
import IServiceDeletedVm from '../src/interfaces/IServiceDeletedVm';
import DialogAddService from './DialogAddService';
import { IServicioTrabajo } from '../src/interfaces/IServicioTrabajo';

const styles = (theme: Theme) =>
	createStyles({
		tableCell: {
			wordBreak: 'break-word'
		},
		tableHeader: {
			fontSize: theme.typography.pxToRem(14)
		}
	});

interface IProps extends WithStyles<typeof styles> {
	items: IServicioTrabajo[];
	deleteServicioGrilla(i: number): void;
}

function createData(name: string, calories: number, fat: number, carbs: number, protein: number) {
	return { name, calories, fat, carbs, protein };
}

function TableServices(props: IProps): JSX.Element {
	const { classes, items, deleteServicioGrilla } = props;
	const [showDeleteServiceDialog, setshowDeleteServiceDialog] = React.useState<boolean>(false);
	const [showAddServiceDialog, setShowAddServiceDialog] = React.useState<boolean>(false);
	const [serviceDeleted, setServiceDeleted] = React.useState<IServiceDeletedVm>({ nombre: '', pos: null });

	const handleDeleteServiceDialog = (remove: boolean, pos?: number) => {
		if (remove) {
			deleteServicioGrilla(pos);
			setshowDeleteServiceDialog(false);
		} else {
			setshowDeleteServiceDialog(false);
		}
	};

	const handleIconDeleteServiceDialog = (nombre: string, pos: number) => {
		setServiceDeleted({ nombre, pos });
		setshowDeleteServiceDialog(true);
	};

	const addService = (): void => {
		setshowDeleteServiceDialog(false);
	};

	const handleAddServiceDialog = (add: boolean) => {
		if (add) {
			addService();
			setshowDeleteServiceDialog(false);
		} else {
			setShowAddServiceDialog(false);
		}
	};

	const handleIconAddServiceDialog = () => {
		setShowAddServiceDialog(true);
	};

	return (
		<Table>
			<TableHead>
				<TableRow>
					<TableCell align='left' padding='none'>
						<Tooltip title='Agregar'>
							<IconButton aria-label='filter list' onClick={() => handleIconAddServiceDialog()}>
								<AddIcon />
							</IconButton>
						</Tooltip>
					</TableCell>
					<TableCell align='center' className={classes.tableHeader}>
						Tipo
					</TableCell>
					<TableCell align='center' className={classes.tableHeader}>
						Nombre
					</TableCell>
					<TableCell align='center' className={classes.tableHeader}>
						Descripción
					</TableCell>
					<TableCell align='center' className={classes.tableHeader}>
						Fecha
					</TableCell>
					<TableCell align='center' className={classes.tableHeader}>
						Precio ($)
					</TableCell>
				</TableRow>
			</TableHead>
			<TableBody>
				{items.map((s, key) => (
					<TableRow key={key} hover={true}>
						<TableCell align='left' padding='none'>
							<Tooltip title='Eliminar'>
								<IconButton aria-label='filter list' onClick={() => handleIconDeleteServiceDialog(s.nombre, key)}>
									<DeleteIcon />
								</IconButton>
							</Tooltip>
						</TableCell>
						<TableCell align='center' className={classes.tableCell}>
							{s.tipo}
						</TableCell>
						<TableCell align='center' className={classes.tableCell}>
							{s.nombre}
						</TableCell>
						<TableCell align='center' className={classes.tableCell}>
							{s.desc}
						</TableCell>
						<TableCell align='center' className={classes.tableCell}>
							{s.fechaHora.format('DD/MM/YYYY HH:mm')}
						</TableCell>
						<TableCell align='center' className={classes.tableCell}>
							{s.precio}
						</TableCell>
					</TableRow>
				))}
			</TableBody>
			<DialogDeleteService
				open={showDeleteServiceDialog}
				handleDeleteServiceDialog={handleDeleteServiceDialog}
				serviceDeleted={serviceDeleted}
			/>
			<DialogAddService open={showAddServiceDialog} handleAddServiceDialog={handleAddServiceDialog} />
		</Table>
	);
}

export default withStyles(styles)(TableServices);
