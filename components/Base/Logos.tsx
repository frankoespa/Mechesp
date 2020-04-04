import React from 'react';
import { Theme, makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';

interface IProps {}
const useStyles = makeStyles((theme: Theme) => ({
	root: {
		backgroundColor: theme.palette.primary.light
	}
}));

export default function Logos(props: IProps) {
	const classes = useStyles(props);

	return (
		<Box className={classes.root}>
			<div className='slider'>
				<div className='slide-track'>
					<div className='slide'>
						<img src='/logosAutos/Volvo.svg' height='100' width='200' alt='' />
					</div>
					<div className='slide'>
						<img src='/logosAutos/Susuki.svg' height='100' width='100' alt='' />
					</div>
					<div className='slide'>
						<img src='/logosAutos/Toyota.svg' height='100' width='100' alt='' />
					</div>
					<div className='slide'>
						<img src='/logosAutos/Volkswagen.svg' height='70' width='70' alt='' />
					</div>
					<div className='slide'>
						<img src='/logosAutos/AlfaRomeo.svg' height='70' width='70' alt='' />
					</div>
					<div className='slide'>
						<img src='/logosAutos/Audi.svg' height='100' width='100' alt='' />
					</div>
					<div className='slide'>
						<img src='/logosAutos/Fiat.svg' height='70' width='70' alt='' />
					</div>
					<div className='slide'>
						<img src='/logosAutos/Bmw.svg' height='70' width='70' alt='' />
					</div>
					<div className='slide'>
						<img src='/logosAutos/Ford.svg' height='100' width='100' alt='' />
					</div>
					<div className='slide'>
						<img src='/logosAutos/Jeep.svg' height='100' width='100' alt='' />
					</div>
					<div className='slide'>
						<img src='/logosAutos/Kia.svg' height='100' width='100' alt='' />
					</div>
					<div className='slide'>
						<img src='/logosAutos/MercedesBenz.svg' height='70' width='70' alt='' />
					</div>
					<div className='slide'>
						<img src='/logosAutos/Mini.svg' height='100' width='100' alt='' />
					</div>
					<div className='slide'>
						<img src='/logosAutos/Nissan.svg' height='70' width='70' alt='' />
					</div>
					<div className='slide'>
						<img src='/logosAutos/Bosch.svg' height='100' width='100' alt='' />
					</div>
					<div className='slide'>
						<img src='/logosAutos/Volvo.svg' height='100' width='200' alt='' />
					</div>
					<div className='slide'>
						<img src='/logosAutos/Susuki.svg' height='100' width='100' alt='' />
					</div>
					<div className='slide'>
						<img src='/logosAutos/Toyota.svg' height='100' width='100' alt='' />
					</div>
					<div className='slide'>
						<img src='/logosAutos/Volkswagen.svg' height='70' width='70' alt='' />
					</div>
					<div className='slide'>
						<img src='/logosAutos/AlfaRomeo.svg' height='70' width='70' alt='' />
					</div>
					<div className='slide'>
						<img src='/logosAutos/Audi.svg' height='100' width='100' alt='' />
					</div>
					<div className='slide'>
						<img src='/logosAutos/Fiat.svg' height='70' width='70' alt='' />
					</div>
					<div className='slide'>
						<img src='/logosAutos/Bmw.svg' height='70' width='70' alt='' />
					</div>
					<div className='slide'>
						<img src='/logosAutos/Ford.svg' height='100' width='100' alt='' />
					</div>
					<div className='slide'>
						<img src='/logosAutos/Jeep.svg' height='100' width='100' alt='' />
					</div>
					<div className='slide'>
						<img src='/logosAutos/Kia.svg' height='100' width='100' alt='' />
					</div>
					<div className='slide'>
						<img src='/logosAutos/MercedesBenz.svg' height='70' width='70' alt='' />
					</div>
					<div className='slide'>
						<img src='/logosAutos/Mini.svg' height='100' width='100' alt='' />
					</div>
					<div className='slide'>
						<img src='/logosAutos/Nissan.svg' height='70' width='70' alt='' />
					</div>
					<div className='slide'>
						<img src='/logosAutos/Bosch.svg' height='100' width='100' alt='' />
					</div>
				</div>

				<style jsx>{`
					@keyframes scroll {
						0% {
							transform: translateX(0);
						}
						100% {
							transform: translateX(calc(-250px * 15));
						}
					}
					.slider {
						box-shadow: 0 10px 20px -5px rgba(0, 0, 0, 0.125);
						height: 100px;
						margin: auto;
						overflow: hidden;
						position: relative;
						width: 100%;
					}
					.slider::before,
					.slider::after {
						background: linear-gradient(to right, white 0%, rgba(255, 255, 255, 0) 100%);
						content: '';
						height: 100px;
						position: absolute;
						width: 100px;
						z-index: 2;
					}
					.slider::after {
						right: 0;
						top: 0;
						transform: rotateZ(180deg);
					}
					.slider::before {
						left: 0;
						top: 0;
					}
					.slider .slide-track {
						animation: scroll 50s linear infinite;
						display: -webkit-box;
						display: flex;
						width: calc(250px * 30);
					}
					.slider .slide {
						height: 100px;
						width: 250px;
						display: flex;
						justify-content: center;
						align-items: center;
					}
				`}</style>
			</div>
		</Box>
	);
}
