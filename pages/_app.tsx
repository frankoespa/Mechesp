import { CssBaseline } from '@material-ui/core';
import 'react-awesome-slider/dist/styles.css';
import { ThemeProvider } from '@material-ui/core/styles';
import theme from '../src/theme';
import BaseLayout from '../components/Layouts/BaseLayout';
import LiveChat from 'react-messenger-customer-chat';
import * as firebase from 'firebase/app';
import 'firebase/auth';
import { UserProvider } from '../src/contexts/user';
import { useEffect, useState } from 'react';
import { IUserAuth } from '../src/interfaces/auth/IUserAuth';
import { Roles } from '../src/global/Roles';
// export default class MyApp extends App<any, any, { user: { uid: string, role: 'admin' | 'customer'}}> {
// 	constructor(props) {
//         super(props);
//         this.state= {user: null}
// 	}

// 	componentDidMount() {
// 		// Remove the server-side injected CSS.
// 		const jssStyles = document.querySelector('#jss-server-side');
// 		if (jssStyles) {
// 			jssStyles.parentNode.removeChild(jssStyles);
// 		}

// 		Firebase.initializeApp({
// 			apiKey: 'AIzaSyAz5v9dOmdkNJYSNIRC-U-VJvemHD9owxs',
// 			projectId: 'mecanicaesparza-test',
// 			appId: '1:232005837121:web:b75f81770788bc501441c0'
// 		});
// 	}

// 	render() {
// 		const { Component, pageProps, router } = this.props;
// 		if (router.pathname.includes('login')) {
// 			return (
// 				<ThemeProvider theme={theme}>
// 					<CssBaseline />
// 					<Component {...pageProps} />
// 					<LiveChat
// 						pageId='1312661855504776'
// 						appId='341667103096684'
// 						language='es_LA'
// 						shouldShowDialog={true}
// 						loggedInGreeting='Hola, ¿en qué podemos ayudarlo?'
// 						loggedOutGreeting='Hola, ingresa para hablar con nosotros'
// 						greetingDialogDisplay='show'
// 						greetingDialogDelay={5}
// 					/>
// 				</ThemeProvider>
// 			);
// 		}
// 		// if (!router.pathname.includes('repadmin')) {
// 		return (
// 			<UserProvider value={}>
// 				<ThemeProvider theme={theme}>
// 					<CssBaseline />
// 					<BaseLayout>
// 						<Component {...pageProps} />
// 						<LiveChat
// 							pageId='1312661855504776'
// 							appId='341667103096684'
// 							language='es_LA'
// 							shouldShowDialog={true}
// 							loggedInGreeting='Hola, ¿en qué podemos ayudarlo?'
// 							loggedOutGreeting='Hola, ingresa para hablar con nosotros'
// 							greetingDialogDisplay='show'
// 							greetingDialogDelay={5}
// 						/>
// 					</BaseLayout>
// 				</ThemeProvider>
// 			</UserProvider>
// 		);
// 		// }
// 		// else {
// 		// 	return (
// 		// 		<ThemeProvider theme={theme}>
// 		// 			<CssBaseline />
// 		// 			<Layout>
// 		// 				<Component {...pageProps} />
// 		// 			</Layout>
// 		// 		</ThemeProvider>
// 		// 	);
// 		// }
// 	}
// }
// // import App from 'next/app'

if (!firebase.apps.length) {
	firebase.initializeApp({
		apiKey: 'AIzaSyAz5v9dOmdkNJYSNIRC-U-VJvemHD9owxs',
		projectId: 'mecanicaesparza-test',
		appId: '1:232005837121:web:b75f81770788bc501441c0'
	});
}

function MyApp({ Component, pageProps, router }) {
	const [user, setUser] = useState<IUserAuth>(null);

    useEffect(() => {
        console.log('Render App')
		let unsuscribe = firebase.auth().onIdTokenChanged(function (user) {
            if (user) {
                console.log('EXISTS USER');
                console.log(user)

				user.getIdTokenResult().then(({claims, token}) => {
					const role: Roles = claims.role ? claims.role : null;
					setUser({
						uid: user.uid,
                        role,
                        token 
					});
				});
			} else {
				console.log('NOT USER');

				setUser(null);
			}
		});

		return unsuscribe;
	}, []);

	if (router.pathname.includes('login')) {
		return (
			<UserProvider value={user}>
				<ThemeProvider theme={theme}>
					<CssBaseline />
					<Component {...pageProps} />
					<LiveChat
						pageId='1312661855504776'
						appId='341667103096684'
						language='es_LA'
						shouldShowDialog={true}
						loggedInGreeting='Hola, ¿en qué podemos ayudarlo?'
						loggedOutGreeting='Hola, ingresa para hablar con nosotros'
						greetingDialogDisplay='show'
						greetingDialogDelay={5}
					/>
				</ThemeProvider>
			</UserProvider>
		);
	}
	// if (!router.pathname.includes('repadmin')) {
	return (
		<UserProvider value={user}>
			<ThemeProvider theme={theme}>
				<CssBaseline />
				<BaseLayout>
					<Component {...pageProps} />
					<LiveChat
						pageId='1312661855504776'
						appId='341667103096684'
						language='es_LA'
						shouldShowDialog={true}
						loggedInGreeting='Hola, ¿en qué podemos ayudarlo?'
						loggedOutGreeting='Hola, ingresa para hablar con nosotros'
						greetingDialogDisplay='show'
						greetingDialogDelay={5}
					/>
				</BaseLayout>
			</ThemeProvider>
		</UserProvider>
	);
	// }
	// else {
	// 	return (
	// 		<ThemeProvider theme={theme}>
	// 			<CssBaseline />
	// 			<Layout>
	// 				<Component {...pageProps} />
	// 			</Layout>
	// 		</ThemeProvider>
	// 	);
	// }
}

// Only uncomment this method if you have blocking data requirements for
// every single page in your application. This disables the ability to
// perform automatic static optimization, causing every page in your app to
// be server-side rendered.
//
// MyApp.getInitialProps = async (appContext) => {
//   // calls page's `getInitialProps` and fills `appProps.pageProps`
//   const appProps = await App.getInitialProps(appContext);
//
//   return { ...appProps }
// }

export default MyApp;
