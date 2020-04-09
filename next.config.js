require('dotenv').config();

module.exports = (phase, { defaultConfig }) => {
	return {
		env: {
			GOOGLE_MAP_KEY: process.env.GOOGLE_MAP_KEY,
			API_GOOGLE_MAP: `https://maps.googleapis.com/maps/api/place/details/json?placeid=ChIJ5eDTRPGrt5URTq156neafV8&key=${process.env.GOOGLE_MAP_KEY}&language=es`
		}
	};
};
