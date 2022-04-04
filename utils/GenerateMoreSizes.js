const sharp = require("sharp");

export default async function (file, path) {
  console.log(file);
  const height = file.height;
  const width = file.width;
  const name = file.name;
  console.log("------ Sharp -----");
  console.log(path);
  sharp(file)
    .resize(width / 2, height / 2)
    .toFile(`${path}/${file.hash}@2x${file.ext}`);
}
