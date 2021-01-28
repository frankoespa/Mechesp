import React, { Component } from 'react';
import { Marker, Map, GoogleApiWrapper } from 'google-maps-react';
import { Global } from '../../../src/global/Global';

interface IProp {
	google: any;
}

class MapContainer extends Component<IProp> {
	render() {
		return (
			<Map
				google={this.props.google}
				center={{
					lat: -32.9976922,
					lng: -60.670411
				}}
				gestureHandling='cooperative'
				zoom={18}
				style={{
					width: '100%',
					height: '100%'
				}}
				initialCenter={{
					lat: -32.997629,
					lng: -60.668222
				}}>
				<Marker
					title={'Mecánica Esparza'}
					name={'Mecánica Esparza'}
					animation={this.props.google.maps.Animation.BOUNCE}
					position={{ lat: -32.9976529, lng: -60.6684383 }}
				/>
			</Map>
		);
	}
}

export default GoogleApiWrapper({
	apiKey: Global.GOOGLE_MAP_KEY
})(MapContainer);
