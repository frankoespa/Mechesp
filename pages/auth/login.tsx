import { useEffect } from 'react';
import * as firebase from 'firebase/app';
import PrimaryButton from '../../components/Utils/Button/PrimaryButton';
import { usePermission } from '../../src/hooks/usePermission';

function Login() {
	const { canAccess, user } = usePermission();

	const logout = async () => {
		await firebase.auth().signOut();
	};

	const refresh = async () => {
		await firebase.auth().currentUser.getIdToken(true);
	};

	const login = async () => {
		await firebase.auth().signInWithEmailAndPassword('frankoespa@gmail.com', '26688662');
	};

	useEffect(() => {
		console.log('Login rendered');
	}, []);

	if (canAccess)
		return (
			<div>
				Hola {JSON.stringify(user, null, 2)}
				{user && <PrimaryButton text='SALIR' onClick={logout} />}
				{user && <PrimaryButton text='REFRESH' onClick={refresh} />}
				{!user && <PrimaryButton text='LOGIN' onClick={login} />}
				ACCESS: {JSON.stringify(canAccess)}
			</div>
		);
	else return null;
}

export default Login;
