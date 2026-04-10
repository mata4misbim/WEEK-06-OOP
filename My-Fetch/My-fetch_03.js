const url = "https://api.api-ninjas.com/v1/cats?name=abyssinian";
const options = {
  method: "GET",
  headers: {
    "X-api-Key": "pmpzInpQCz4k79ACCKhVTHmJ7SluqBBOyxy0xWPT",
    "Content-Type": "application/json",
  },
};

fetch(url, options)
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.log("Someting went wrong!", error);
  });
