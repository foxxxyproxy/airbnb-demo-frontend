const type = {
  0: "cooking class",
  1: "photography",
  2: "hiking"
};

//TODO: GET IT FROM API
//return list of Exrepiences
const Response = {
  items: [
    {
      id: 1,
      href: "/",
      imgSrc:
        "https://raw.githubusercontent.com/foxxxyproxy/airbnb-demo-frontend/master/public/img/Image-5.jpg",
      type: type[0],
      title: "Authentic Thai Lesson",
      price: 80
    },
    {
      id: 2,
      href: "/",
      imgSrc:
        "https://raw.githubusercontent.com/foxxxyproxy/airbnb-demo-frontend/master/public/img/Image-3.jpg",
      type: type[0],
      title: "Retro Photoshoot in NYC",
      price: 50
    },
    {
      id: 3,
      href: "/",
      imgSrc:
        "https://raw.githubusercontent.com/foxxxyproxy/airbnb-demo-frontend/master/public/img/Image-4.jpg",
      type: type[0],
      title: "Sunset Hike",
      price: 30
    }
  ],
  pagination: {
    total: 258,
    limit: 32,
    offset: 0
  }
};

export default Response;
