import { useRouter } from 'next/router';
import { RolesPermission } from '../security/RolesPermission';
import { AuthContext } from '../contexts/AuthContext';
import { useContext } from 'react';

export const useUserWithPermission = () => {
	const { user } = useContext(AuthContext);
	const router = useRouter();
	const url = router.pathname;
	let canAccess: boolean;
	let checking: boolean;
	let havePermissionForThisUrl: boolean;

	console.log('El user es: ' + user);

	const rolePermission = RolesPermission.find((p) => p.url == url);

	if (!rolePermission) throw new Error(`Can´t find a permission for: ${url}`);

	if (user) {
		havePermissionForThisUrl = rolePermission.permissions.some(r => r === user.role);

		switch (havePermissionForThisUrl) {
			case true:
				canAccess = true;
				checking = false;
				break;
			default:
				canAccess = false;
				checking = false;
				break;
		}

		return {
			user,
			canAccess,
			checking
		};
	} else if (user === undefined) {
		canAccess = false;
		checking = true;

		return {
			user: null,
			canAccess,
			checking
		};
	} else {
		canAccess = false;
		checking = false;

		return {
			user,
			canAccess,
			checking
		};
	}
};
