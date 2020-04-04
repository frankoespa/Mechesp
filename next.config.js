const { GOOGLE_MAP_KEY } = require('./config');

module.exports = (phase, { defaultConfig }) => {
	return {
		env: {
			GOOGLE_MAP_KEY,
			API_GOOGLE_MAP: `https://maps.googleapis.com/maps/api/place/details/json?placeid=ChIJ5eDTRPGrt5URTq156neafV8&key=${GOOGLE_MAP_KEY}&language=es`
		}
	};
};
