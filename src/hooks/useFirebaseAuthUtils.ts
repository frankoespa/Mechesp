import * as firebase from 'firebase/app';
import { IUserSignin } from '../interfaces/auth/IUserSignin';
import { useNotification } from './useNotification';

export const useFirebaseAuthUtils = () => {
    
	if (!firebase.apps.length) {
		throw new Error('Firebase is not initialized. Call Initialize method in the _app.tsx');
    }
    
    const { showNotificationFail } = useNotification();
    
	let firebaseAuth: firebase.auth.Auth = firebase.auth();

	async function Logout() {
		await firebaseAuth.signOut();
	}

	function GetCurrentUser(): firebase.User | null {
		return firebaseAuth.currentUser;
	}

	async function RefreshClaims() {
		await firebaseAuth.currentUser.getIdToken(true);
	}

	async function GetTokenUser(): Promise<string> {
		const userLogged = GetCurrentUser();

		if (!userLogged) throw new Error('There is not user logged');

		const token = await userLogged.getIdToken();

		return token;
	}

	async function SignIn(userSignin: IUserSignin): Promise<firebase.auth.UserCredential> {
		try {
			return await firebaseAuth.signInWithEmailAndPassword(userSignin.Email, userSignin.Password);
		} catch (error) {
			AdminErrorsSignin(error);
			throw new Error(error.message);
		}
	}

	function AdminErrorsSignin(error: any) {
		const { code } = error;
		switch (code) {
			case 'auth/wrong-password':
				showNotificationFail('Contraseña inválida');
				break;
			case 'auth/invalid-email':
				showNotificationFail('Email inválido');
				break;
			case 'auth/user-disabled':
				showNotificationFail('El usuario se encuentra desahabilitado');
				break;
			case 'auth/user-not-found':
				showNotificationFail('El email no corresponde a un usuario existente');
				break;
			default:
				break;
		}
	}

	// function AdminErrorsSignup(error: any) {
	// 	const { code } = error;
	// 	switch (code) {
	// 		case 'auth/email-already-in-use':
	// 			showNotificationFail('Contraseña inválida');
	// 			break;
	// 		case 'auth/invalid-email ':
	// 			showNotificationFail('Email inválido');
	// 			break;
	// 		case 'auth/operation-not-allowed':
	// 			showNotificationFail('El usuario se encuentra desahabilitado');
	// 			break;
	// 		case 'auth/weak-password':
	// 			showNotificationFail('El email no corresponde a un usuario existente');
	// 			break;
	// 		default:
	// 			break;
	// 	}
	// }

	// async function SignUp(userSignup: IUserSignup): Promise<firebase.auth.UserCredential> {
	// 	try {
	// 		return await firebaseAuth.createUserWithEmailAndPassword(userSignup.Email, userSignup.Password);
	// 	} catch (error) {
	// 		AdminErrorsSignup(error);
	// 	}
	// }

	return {
		Logout,
		GetCurrentUser,
		GetTokenUser,
		RefreshClaims,
		SignIn
	};
};
