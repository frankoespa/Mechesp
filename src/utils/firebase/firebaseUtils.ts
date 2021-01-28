import * as firebase from 'firebase/app';
import { Roles } from '../../security/Roles';
import { Dispatch, SetStateAction } from 'react';
import { IAuth } from '../../interfaces/auth/IUserAuth';

export function InitializeFirebase() {
	if (!firebase.apps.length) {
		firebase.initializeApp({
			apiKey: 'AIzaSyAz5v9dOmdkNJYSNIRC-U-VJvemHD9owxs',
			projectId: 'mecanicaesparza-test',
			appId: '1:232005837121:web:b75f81770788bc501441c0'
		});
	}
}

export function OnAuthStateChange(setAuth: Dispatch<SetStateAction<IAuth>>) {
	return firebase.auth().onAuthStateChanged(function (user) {
		if (user) {
			console.log('EXISTS USER');

			user.getIdTokenResult().then(({ claims }) => {
				const uid = user.uid;
				const role: Roles = claims.role ? claims.role : null;
				setAuth({
					user: { uid, role },
					loading: false
				});
			});
		} else {
			console.log('NOT USER');

			setAuth({user: null, loading: false});
		}
	});
}