import Axios from "axios";
import getConfig from "next/config";

const { publicRuntimeConfig } = getConfig();
const { URL: url } = publicRuntimeConfig;
export async function getByteList(page: number) {
  const res = await Axios.get(`${url}/byte/list/?page=${page}`);
  const data = res.data;
  return data;
}

export async function getByte(id: number) {
  const res = await Axios.get(`${url}/byte/${id}`);
  return res.data;
}

export async function getNumPage() {
  const numBytePerPage = 10;
  const res = await Axios.get(`${url}/byte/count`);
  const numBytes = res.data.count;
  return Math.ceil(numBytes / numBytePerPage);
}

export async function loadFile(filePath: string) {
  return await Axios.get(filePath);
}
