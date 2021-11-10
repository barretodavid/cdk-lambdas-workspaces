import { url } from "@local/cdk";
import axios from "axios";

const init = async () => {
  const urlA = `${url}lambda-a`;
  const urlB = `${url}lambda-b`;
  const { data: responseA } = await axios.get(urlA);
  const { data: responseB } = await axios.get(urlB);
  console.log(`lambda-a: ${responseA}`);
  console.log(`lambda-b: ${responseB}`);
};

init();
