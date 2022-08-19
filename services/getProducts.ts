import axios from "axios";
export default async function getProducts() {
  var config = {
    method: "get",
    url: `${process.env.NEXT_PUBLIC_BASE_URL}/products?populate=images`,
  };

  axios(config)
    .then((response) => {
      console.log(response.data.data);
    })
    .catch(function (error) {
      console.log(error);
    });
}
