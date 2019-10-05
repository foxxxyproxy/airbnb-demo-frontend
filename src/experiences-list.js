const type = {
  0: "cooking class",
  1: "photography",
  2: "hiking"
};

//TODO: GET IT FROM API
//return list of Exrepiences
const List = [
  {
    href: "/",
    imgSrc:
      "https://raw.githubusercontent.com/foxxxyproxy/airbnb-demo-frontend/master/public/img/Image-5.jpg",
    type: type[0],
    title: "Authentic Thai Lesson",
    price: 80
  },
  {
    href: "/",
    imgSrc:
      "https://raw.githubusercontent.com/foxxxyproxy/airbnb-demo-frontend/master/public/img/Image-3.jpg",
    type: type[0],
    title: "Retro Photoshoot in NYC",
    price: 50
  },
  {
    href: "/",
    imgSrc:
      "https://raw.githubusercontent.com/foxxxyproxy/airbnb-demo-frontend/master/public/img/Image-4.jpg",
    type: type[0],
    title: "Sunset Hike",
    price: 30
  }
];

export default List;
