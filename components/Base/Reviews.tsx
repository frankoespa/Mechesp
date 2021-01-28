import React from 'react';
import AwesomeSlider from 'react-awesome-slider';
import withAutoplay from 'react-awesome-slider/dist/autoplay';
import { Theme, makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import IconStar from '@material-ui/icons/Star';
import Section from '../Utils/Sections/Section';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import SecondTitle from '../Utils/Text/SecondTitle';
import { IReview } from '../../src/interfaces/IReview';
import PrimaryButton from '../Utils/Button/PrimaryButton';

interface IProps {
	data: IReview[];
}

const useStyles = makeStyles((theme: Theme) => ({
	root: {
		height: '500px',
		backgroundColor: theme.palette.primary.main
	},
	content: {
		backgroundColor: theme.palette.primary.main,
		width: '100%',
		height: '100%',
		display: 'flex',
		flexDirection: 'column',
		justifyContent: 'center',
		alignItems: 'center'
	},
	avatar: {
		width: '80px'
	},
	nombre: {
		fontWeight: theme.typography.fontWeightMedium
	},
	star: {
		color: '#E7711B'
	},
	cita: {
		fontSize: '30px',
		fontWeight: theme.typography.fontWeightBold
	},
	actionBtn: {
		background: 'linear-gradient(45deg, #2196F3 30%, #21CBF3 90%)',
		color: theme.palette.text.primary
	},
	containerBtn: {
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center'
	}
}));

export default function Reviews(props: IProps) {
	const { data } = props;
	const classes = useStyles(props);
	const AutoplaySlider = withAutoplay(AwesomeSlider);

	return (
		<Section background='dark'>
			<Container fixed>
				<SecondTitle color='light' text='Nuestros Clientes' align='center' />
				<AutoplaySlider className={classes.root} play={true} bullets={false} cancelOnInteraction={false} interval={6000}>
					{data.map((r, i) => {
						let stars: JSX.Element[] = [];
						for (let index = 0; index < r.rating; index++) {
							stars.push(<IconStar className={classes.star} key={index} />);
						}

						return (
							<div className={classes.content} key={i}>
								<img src={r.profile_photo_url} alt={r.author_name} className={classes.avatar} />
								<Typography variant='subtitle1' component='p' gutterBottom className={classes.nombre}>
									{r.author_name.toUpperCase()}
								</Typography>
								<div>{stars}</div>
								<Typography variant='body1' component='p' gutterBottom align='center'>
									<span className={classes.cita}>"</span> {r.text} <span className={classes.cita}>"</span>
								</Typography>
							</div>
						);
					})}
				</AutoplaySlider>
				<Box className={classes.containerBtn}>
					<PrimaryButton text='Tu Opinión' href='https://g.page/r/CU6teep3mn1fEAI/review'></PrimaryButton>
				</Box>
			</Container>
		</Section>
	);
}
