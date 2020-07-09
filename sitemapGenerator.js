// Generate a sitemap.xml in out directory
const sitemap = require('nextjs-sitemap-generator');

sitemap({
	baseUrl: 'https://mecanicaesparza.com',
	pagesDirectory: __dirname + '\\pages',
	targetDirectory: 'out/'
})
	.then(() => {
		console.log(`✅ sitemap.xml generated!`);
	})
	.catch((e) => {
		console.log(e);
	});
