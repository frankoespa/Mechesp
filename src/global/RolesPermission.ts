import { Roles } from './Roles';

interface IRolePermission {
	url: string;
	permissions: Roles[];
}

export const RolesPermission: IRolePermission[] = [
	{
		url: '/auth/login',
		permissions: [Roles.Admin]
	}
];
