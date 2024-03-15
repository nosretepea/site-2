const fs = require('fs');
const path = require('path');
const sharp = require('sharp');

const inputFolder = path.join('src', 'lib', 'assets', 'photography');
const outputFolder = path.join('static', 'photography');
const outputFile = path.join('src', 'lib', 'images.ts');

const imageFiles = fs.readdirSync(inputFolder);

const imagesDataPromise = Promise.all(
	imageFiles.map(async (file) => {
		const inputPath = path.join(inputFolder, file);
		const outputPath = path.join(outputFolder, file.replace(/\..+$/, '.webp'));

		try {
			const metadata = await sharp(inputPath).metadata();

			const isLandscape = metadata.width > metadata.height;

			let transformer = sharp(inputPath).rotate();
			if (isLandscape) {
				transformer = transformer.resize(1400, null);
			} else {
				transformer = transformer.resize(null, 1400);
			}

			await transformer.toFormat('webp').toFile(outputPath);

			return {
				path: `/photography/${file.replace(/\..+$/, '.webp')}`,
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
