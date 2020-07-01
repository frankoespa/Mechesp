import React from 'react';
import { Theme, makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';

interface IProps { }

const useStyles = makeStyles((theme: Theme) => ({
	root: {
		backgroundColor: theme.palette.primary.light
	}
}));

export default function Logos(props: IProps) {
    const classes = useStyles(props);
    
    const configCarrousel = {
		widthItems: 250,
		heightItems: 100
	};

    const logos = [
		{
			fileName: 'Volvo.svg',
			height: '100',
			width: '200'
		},
		{
			fileName: 'Susuki.svg',
			height: '100',
			width: '100'
		},
		{
			fileName: 'Toyota.svg',
			height: '100',
			width: '100'
		},
		{
			fileName: 'Volkswagen.svg',
			height: '70',
			width: '70'
		},
		{
			fileName: 'AlfaRomeo.svg',
			height: '70',
			width: '70'
		},
		{
			fileName: 'Audi.svg',
			height: '100',
			width: '100'
		},
		{
			fileName: 'Fiat.svg',
			height: '70',
			width: '70'
		},
		{
			fileName: 'Bmw.svg',
			height: '70',
			width: '70'
		},
		{
			fileName: 'Ford.svg',
			height: '100',
			width: '100'
		},
		{
			fileName: 'Jeep.svg',
			height: '100',
			width: '100'
		},
		{
			fileName: 'Kia.svg',
			height: '100',
			width: '100'
		},
		{
			fileName: 'MercedesBenz.svg',
			height: '70',
			width: '70'
		},
		{
			fileName: 'Mini.svg',
			height: '100',
			width: '100'
		},
		{
			fileName: 'Nissan.svg',
			height: '70',
			width: '70'
		},
		{
			fileName: 'Bosch.svg',
			height: '100',
			width: '100'
		}
    ];
    
    const allLogos = [...logos, ...logos]
    
	return (
		<Box className={classes.root}>
			<div className='slider'>
				<div className='slide-track'>
					{allLogos.map((logo, i) => (
						<div className='slide' key={i}>
							<img src={`/logosAutos/${logo.fileName}`} height={logo.height} width={logo.width} alt={logo.fileName} />
						</div>
					))}
				</div>
				<style jsx>{`
					@keyframes scroll {
						0% {
							transform: translateX(0);
						}
						100% {
							transform: translateX(calc(${-configCarrousel.widthItems}px * ${allLogos.length / 2}));
						}
					}
					.slider {
						box-shadow: 0 10px 20px -5px rgba(0, 0, 0, 0.125);
						height: ${configCarrousel.heightItems}px;
						margin: auto;
						overflow: hidden;
						position: relative;
						width: 100%;
					}
					.slider::before,
					.slider::after {
						background: linear-gradient(to right, white 0%, rgba(255, 255, 255, 0) 100%);
						content: '';
						height: ${configCarrousel.heightItems}px;
						position: absolute;
						width: ${configCarrousel.heightItems}px;
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
						display: flex;
						width: calc(${configCarrousel.widthItems}px * ${allLogos.length});
					}
					.slider .slide {
						height: ${configCarrousel.heightItems}px;
						width: ${configCarrousel.widthItems}px;
						display: flex;
						justify-content: center;
						align-items: center;
					}
				`}</style>
			</div>
		</Box>
	);
}
