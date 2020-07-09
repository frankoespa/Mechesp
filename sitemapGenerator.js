// Generate a sitemap.xml in out directory
const sitemap = require('nextjs-sitemap-generator');

// In Production
if (process.env.GITHUB_WORKSPACE) {
sitemap({
	baseUrl: 'https://mecanicaesparza.com',
	pagesDirectory: process.env.GITHUB_WORKSPACE + '/pages',
	targetDirectory: process.env.GITHUB_WORKSPACE + '/out'
})
	.then(() => {
		console.log(`✅ sitemap.xml generated!`);
	})
	.catch((e) => {
		console.log(e);
	});
} else {
    console.log('sitemap.xml not generated')
}


