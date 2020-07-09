import React, { Fragment } from 'react';
import { GetStaticProps, NextPageContext } from 'next';
import Head from 'next/head';
import Axios from 'axios';
import Cover from '../components/Base/Cover';
import Services from '../components/Base/Services';
import About from '../components/Base/About';
import Map from '../components/Base/Map';
import Reviews from '../components/Base/Reviews';
import Logos from '../components/Base/Logos';
import ActionScroll from '../components/Utils/ActionScroll';
import Footer from '../components/Base/Footer';
import { IReview } from '../src/interfaces/IReview';
import Contact from '../components/Base/Contact';
import { Global } from '../src/global/Global';

interface IProps {
	allReviews: IReview[];
}

export default function Home(props: IProps) {
	const { allReviews } = props;
	return (
		<Fragment>
			<Head>
				<title>Taller Mecánico en Rosario | Mecánica Esparza</title>
				<meta
					name='description'
					content='Somos una empresa de Rosario(Zona Sur) especializada en servicios de mecánica integral automotriz desde hace 30 años, contando con un equipo de profesionales experimentados, equipamiento y tecnología de vanguardia'
				/>
			</Head>
			<ActionScroll></ActionScroll>
			<Cover></Cover>
			<Services></Services>
			<About></About>
			<Logos></Logos>
			<Reviews data={allReviews}></Reviews>
			<Contact></Contact>
			<Map></Map>
			<Footer></Footer>
		</Fragment>
	);
}

export const getStaticProps: GetStaticProps = async (context) => {
    const reviewsResponse = await Axios.get(Global.API_GOOGLE_MAP);
    const allReviews = reviewsResponse.data.result.reviews as IReview[];

	return {
		props: {
			allReviews
		}
	};
};
