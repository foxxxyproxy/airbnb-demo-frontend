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
    imgSrc: process.env.PUBLIC_URL + "/img/image.jpg",
    type: type[0],
    title: "Quiet apartment",
    price: 80
  },
  {
    href: "/",
    imgSrc: process.env.PUBLIC_URL + "/img/image-1.jpg",
    type: type[0],
    title: "Romantic abin with view",
    price: 80
  },
  {
    href: "/",
    imgSrc: process.env.PUBLIC_URL + "/img/image-2.jpg",
    type: type[0],
    title: "Beautiful cozy room",
    price: 80
  }
];

export default List;
