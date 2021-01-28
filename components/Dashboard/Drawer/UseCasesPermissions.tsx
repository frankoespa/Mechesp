import CarIcon from '@material-ui/icons/DirectionsCar';
import UserIcon from '@material-ui/icons/Group';
import RepuestoIcon from '@material-ui/icons/Storage';
import InformeIcon from '@material-ui/icons/InsertChart';
import BuildIcon from '@material-ui/icons/Build';
import ServicioIcon from '@material-ui/icons/AttachMoney';
import { Roles } from '../../../src/security/Roles';
import { IUser } from '../../../src/interfaces/auth/IUserAuth';

interface IUseCasesPermissions {
	[propName: string]: { icon: JSX.Element; subItems: { name: string; url: string; permissions: Roles[] }[] };
}

export const UseCasesPermissions: IUseCasesPermissions = {
	Trabajos: {
		icon: <BuildIcon />,
		subItems: []
	},
	Usuarios: {
		icon: <UserIcon />,
		subItems: [
			{
				name: 'Administrar',
				url: '/dashboard/usuarios/administrar',
				permissions: [Roles.Admin]
			}
		]
	},
	Vehiculos: {
		icon: <CarIcon />,
		subItems: []
	},
	Servicios: {
		icon: <ServicioIcon />,
		subItems: []
	},
	Repuestos: {
		icon: <RepuestoIcon />,
		subItems: []
	},
	Informes: {
		icon: <InformeIcon />,
		subItems: []
	}
};

export function canAcces(user: IUser, pathname: string): boolean {
	const props = Object.keys(UseCasesPermissions);
	return props.some((p) => UseCasesPermissions[p].subItems.some((sub) => sub.url === pathname && sub.permissions.some((p) => p === user.role)));
}

export function getTitle(pathname: string): string {
	const props = Object.values(UseCasesPermissions);
	const useCasesPermissions = props.find((i) => 
		i.subItems.some(e => e.url === pathname)
    );
    
    return useCasesPermissions?.subItems.find(f => f.url === pathname)?.name
}
