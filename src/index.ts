import { cleanImage } from './jimp';
import { getText } from './tesseract';

// const imagePath = './src/images/pic_1.jpeg';

// async function main() {
//   const cleanedImg = await cleanImage(imagePath);
//   const text = await getText(cleanedImg);

// }

// main();

export async function recognizeText(
  imgPath: string,
  options?: {
    ignoreCase: boolean;
  }
) {
  const cleanedImg = await cleanImage(imgPath);
  const text = await getText(cleanedImg);

  let result = text;
  if (options?.ignoreCase) {
    result = result.toLocaleLowerCase();
  }
  return result;
}
