const type = {
  0: "Entire apartment",
  1: "Private room",
  2: "Shared room"
};

//TODO: GET IT FROM API
//return list of homes
const List = [
  {
    href: "/",
    imgSrc:
      "https://raw.githubusercontent.com/foxxxyproxy/airbnb-demo-frontend/master/public/img/Image.jpg",
    type: type[0],
    title: "Quiet apartment",
    price: 80
  },
  {
    href: "/",
    imgSrc:
      "https://raw.githubusercontent.com/foxxxyproxy/airbnb-demo-frontend/master/public/img/Image-1.jpg",
    type: type[0],
    title: "Romantic abin with view",
    price: 80
  },
  {
    href: "/",
    imgSrc:
      "https://raw.githubusercontent.com/foxxxyproxy/airbnb-demo-frontend/master/public/img/Image-2.jpg",
    type: type[0],
    title: "Beautiful cozy room",
    price: 80
  }
];

console.log(process.env.PUBLIC_URL);
export default List;
