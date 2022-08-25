import axios from "axios";
export default async function getProducts() {
  var config = {
    method: "get",
    url: `${process.env.NEXT_PUBLIC_BASE_URL}/products?populate=images`,
  };

  const data = await axios.get(config.url);
  const products = data.data;
  return products;
}
