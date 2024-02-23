const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const inputFolder = path.join('static', 'photography');
const outputFile = path.join('src', 'lib', 'images.ts');
const imageFiles = fs.readdirSync(inputFolder);

const imagesDataPromise = Promise.all(
	imageFiles.map(async (file) => {
		const filePath = path.join(inputFolder, file);
		try {
			const buffer = await sharp(filePath).rotate().toBuffer();
			const metadata = await sharp(buffer).metadata();
			return {
				path: `/photography/${file}`,
				width: metadata.width,
				height: metadata.height,
				aspectRatio: metadata.width / metadata.height
			};
		} catch (error) {
			console.error(`Error processing file ${file}: `, error);
			return null;
		}
	})
);

imagesDataPromise
	.then((imagesData) => {
		if (imagesData.some((image) => image === null)) {
			throw new Error('One or more images could not be processed.');
		}

		const fileContent = `export const images = ${JSON.stringify(imagesData.reverse(), null, 2)};`;
		fs.writeFileSync(outputFile, fileContent);
		console.log('Images data generated successfully.');
	})
	.catch((error) => {
		console.error('An error occurred: ', error);
	});
