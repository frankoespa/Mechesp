import { useRouter } from 'next/router';
import { RolesPermission } from '../global/RolesPermission';
import { UserContext } from '../contexts/user';
import { useContext } from 'react';

export const usePermission = () => {
	const user = useContext(UserContext);
	const router = useRouter();
	const url = router.pathname;
	let canAccess: boolean;

	const rolePermission = RolesPermission.find((p) => p.url == url);

	if (user && rolePermission.permissions.includes(user.role)) {
		canAccess = true;
    } else if (user && !rolePermission.permissions.includes(user.role)) {
        canAccess = false;
		router.push('/');
    } else {
        canAccess = false;
    }

	return {
		user,
		canAccess
	};
};
