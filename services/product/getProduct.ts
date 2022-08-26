import axios from "axios";
export default async function getProduct(id: string) {
  const url = `${process.env.NEXT_PUBLIC_BASE_URL}/products`;
  const data = await axios.get(url);

  if (data.status === 200) return data.data;
}
