import React, { Fragment } from 'react';
import { GetStaticProps, NextPageContext } from 'next';
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

interface IProps {
	allReviews: IReview[];
}

export default function Home(props: IProps) {
	const { allReviews } = props;
	return (
		<Fragment>
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
	const allReviews = await Axios.get(process.env.API_GOOGLE_MAP).then((response) => response.data.result.reviews as IReview[]);

	return {
		props: {
			allReviews
		}
	};
};
