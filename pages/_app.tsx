import { CssBaseline } from '@material-ui/core';
import 'react-awesome-slider/dist/styles.css';
import { ThemeProvider } from '@material-ui/core/styles';
import theme from '../components/Themes/theme';
import themeDashboard from '../components/Themes/themeDashboard';
import BaseLayout from '../components/Layouts/BaseLayout';
import { DashboardLayout } from '../components/Layouts/DashboardLayout';
import LiveChat from 'react-messenger-customer-chat';
import 'firebase/auth';
import { AuthProvider } from '../src/contexts/AuthContext';
import { useEffect, useState } from 'react';
import { IAuth } from '../src/interfaces/auth/IUserAuth';
import { Routes } from '../src/global/Routes';
import { NotificationManager } from '../components/Utils/Notification/NotificationManager';
import { OnAuthStateChange, InitializeFirebase } from '../src/utils/firebase/firebaseUtils';
import { PrivateView } from '../components/Utils/Security/PrivateView';

InitializeFirebase();

console.log('Firebase inicializado');

function MyApp({ Component, pageProps, router }) {
	const [auth, setAuth] = useState<IAuth>({user: null, loading: true});

	useEffect(() => {
        console.log('myApp rendered')
		//Remove the server-side injected CSS.
		const jssStyles = document.querySelector('#jss-server-side');
		if (jssStyles) {
			jssStyles.parentNode.removeChild(jssStyles);
		}

		let unsuscribe = OnAuthStateChange(setAuth);

		return unsuscribe;
	}, []);

	if (router.pathname.includes(Routes.Login)) {
		return (
			<AuthProvider value={{ user: auth.user, loading: auth.loading}}>
				<ThemeProvider theme={theme}>
					<NotificationManager>
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
					</NotificationManager>
				</ThemeProvider>
			</AuthProvider>
		);
	} else if (router.pathname.includes('/dashboard')) {
		return (
			<AuthProvider value={{ user: auth.user, loading: auth.loading}}>
				<ThemeProvider theme={themeDashboard}>
					<NotificationManager>
						<CssBaseline />
						<PrivateView>
							<DashboardLayout>
								<Component {...pageProps} />
							</DashboardLayout>
						</PrivateView>
					</NotificationManager>
				</ThemeProvider>
			</AuthProvider>
		);
	} else {
		return (
			<AuthProvider value={{ user: auth.user, loading: auth.loading}}>
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
			</AuthProvider>
		);
	}
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
