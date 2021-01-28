import { Roles } from '../../security/Roles';

export interface IUser {
	uid: string;
	role: Roles;
}
export interface IAuth {
	user: IUser;
	loading: boolean;
}
