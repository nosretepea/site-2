const fs = require('fs');
const path = require('path');

const inputFolder = path.join('src', 'lib', 'assets', 'photography');
const outputFile = path.join('src', 'lib', 'images.ts');

fs.readdir(inputFolder, (err, files) => {
	if (err) {
		console.error('Error reading images directory: ', err);
		return;
	}

	const images = files.map((file) => `src/lib/assets/photography/${file}`).reverse();

	const tsContent = `export const images = ${JSON.stringify(images, null, 2)};\n`;

	fs.writeFile(outputFile, tsContent, (err) => {
		if (err) {
			console.error('Error writing images module: ', err);
			return;
		}
		console.log('Images module generated successfully.');
	});
});
