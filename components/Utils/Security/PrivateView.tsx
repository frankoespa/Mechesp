import { useRouter } from 'next/router';
import { useAuth } from '../../../src/contexts/AuthContext';
import { canAcces } from '../../Dashboard/Drawer/UseCasesPermissions';
import Loading from '../Loading/Loading';

interface IProps {
	children: JSX.Element[] | JSX.Element;
}

export function PrivateView(props: IProps) {
	const { children } = props;
	const { push, pathname } = useRouter();
	const { user, loading } = useAuth();

	if (loading) {
		return <Loading />;
	} else if (!user && !loading) {
		push('/auth/login');
		return <Loading />;
	} else if (user && canAcces(user, pathname)) {
		return <>{children}</>;
	} else {
		push('/');
		return <Loading />;
	}
}
