import axios from "axios";
async function getImage() {
  const randomNumber1 = Math.floor(Math.random() * 500);
  const randomNumber2 = Math.floor(Math.random() * 500);

  const res = await axios.get(
    `https://picsum.photos/id/${randomNumber1 + randomNumber2 + 1}/info`
  );

  return res;
}

export default getImage;
