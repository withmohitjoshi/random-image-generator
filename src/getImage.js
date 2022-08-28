import axios from "axios";
async function getImage() {
  const randomNumber1 = Math.floor(Math.random() * 422);
  const randomNumber2 = Math.floor(Math.random() * 500);

  const res = await axios.get(
    `https://picsum.photos/id/728/info`
  );

  return res;
}

export default getImage;
