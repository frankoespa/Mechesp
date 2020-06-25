import App from 'next/app';
import Error from 'next/error'
import { CssBaseline } from '@material-ui/core';
import 'react-awesome-slider/dist/styles.css';
import { ThemeProvider } from '@material-ui/core/styles';
import theme from '../src/theme';
import BaseLayout from '../components/Layouts/BaseLayout';
import Layout from '../components/Layouts/Layout';
import LiveChat from 'react-messenger-customer-chat';
export default class MyApp extends App {
	constructor(props) {
		super(props);
	}

	componentDidMount() {
		// Remove the server-side injected CSS.
		const jssStyles = document.querySelector('#jss-server-side');
		if (jssStyles) {
			jssStyles.parentNode.removeChild(jssStyles);
		}
	}

	render() {
		const { Component, pageProps, router } = this.props;
		// if (!router.pathname.includes('repadmin')) {
			return (
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
}
