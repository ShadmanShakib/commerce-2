import axios from "axios";
export default async function getProducts() {
  var config = {
    method: "get",
    url: `${process.env.NEXT_PUBLIC_BASE_URL}/products`,
    headers: {
      Authorization: `Bearer ${process.env.NEXT_PUBLIC_API_KEY}`,
    },
  };

  axios(config)
    .then((response) => {
      console.log(response.data);
    })
    .catch(function (error) {
      console.log(error);
    });
}
