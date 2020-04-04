import React, { useEffect, useState } from 'react';

export default function ActionScroll() {
	const [visibilityIconScroll, setVisibilityScroll] = useState<boolean>(false);

	let unsuscribeScroll = () => {
		window.removeEventListener('scroll', handleVisibilityIconScroll);
	};

	let handleVisibilityIconScroll = () => {
		if (window.scrollY !== 0) {
			setVisibilityScroll(false);
		} else {
			setVisibilityScroll(true);
		}
	};

	useEffect(() => {
		handleVisibilityIconScroll();
		window.addEventListener('scroll', handleVisibilityIconScroll);

		return unsuscribeScroll;
	}, []);

	if (visibilityIconScroll)
		return (
			visibilityIconScroll && (
				<span className='scroll-icon'>
					<span className='scroll-icon__wheel-outer'>
						<span className='scroll-icon__wheel-inner'></span>
					</span>
					<style jsx>{`
						@keyframes scroll_1 {
							0% {
								transform: translateY(0);
							}
							25% {
								transform: translateY(-7.5px);
							}
							50% {
								transform: translateY(0);
							}
							75% {
								transform: translateY(7.5px);
							}
							100% {
								transform: translateY(0);
							}
						}
						.scroll-icon {
							position: fixed;
							left: 50%;
							bottom: 20px;
							height: 40px;
							width: 20px;
							border: 3px solid #536dfe;
							border-radius: 10px;
							box-shadow: 0px 0px 10px white;
						}

						.scroll-icon__wheel-outer {
							display: block;
							position: absolute;
							left: 50%;
							margin-left: -3px;
							top: 8px;
							height: 15px;
							width: auto;
							border-radius: 10px;
							overflow: hidden;
						}

						.scroll-icon__wheel-inner {
							display: block;
							height: 100%;
							width: 0px;
							border-radius: inherit;
							border: 3px solid white;
							animation: scroll_1 3s ease-in-out infinite;
						}
					`}</style>
				</span>
			)
		);
	else return null;
	// return (
	// 	<span className='scroll-icon' ref={iconScroll}>
	// 		<span className='scroll-icon__wheel-outer'>
	// 			<span className='scroll-icon__wheel-inner'></span>
	// 		</span>
	// 		<style jsx>{`
	// 			@keyframes scroll_1 {
	// 				0% {
	// 					transform: translateY(0);
	// 				}
	// 				25% {
	// 					transform: translateY(-7.5px);
	// 				}
	// 				50% {
	// 					transform: translateY(0);
	// 				}
	// 				75% {
	// 					transform: translateY(7.5px);
	// 				}
	// 				100% {
	// 					transform: translateY(0);
	// 				}
	// 			}
	// 			.scroll-icon {
	// 				display: none;
	// 				position: fixed;
	// 				left: 50%;
	// 				bottom: 20px;
	// 				height: 40px;
	// 				width: 20px;
	// 				border: 3px solid #536dfe;
	// 				border-radius: 10px;
	// 				box-shadow: 0px 0px 10px white;
	// 			}

	// 			.scroll-icon__wheel-outer {
	// 				display: block;
	// 				position: absolute;
	// 				left: 50%;
	// 				margin-left: -3px;
	// 				top: 8px;
	// 				height: 15px;
	// 				width: auto;
	// 				border-radius: 10px;
	// 				overflow: hidden;
	// 			}

	// 			.scroll-icon__wheel-inner {
	// 				display: block;
	// 				height: 100%;
	// 				width: 0px;
	// 				border-radius: inherit;
	// 				border: 3px solid white;
	// 				animation: scroll_1 3s ease-in-out infinite;
	// 			}
	// 		`}</style>
	// 	</span>
	// );
}
