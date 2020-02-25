const type = {
  0: "Entire apartment",
  1: "Private room",
  2: "Shared room"
};

//TODO: GET IT FROM API
//return list of homes
const Response = {
  items: [
    {
      id: 1,
      href: "/",
      imgSrc:
        "https://raw.githubusercontent.com/foxxxyproxy/airbnb-demo-frontend/master/public/img/Image",
      type: type[0],
      title: "Quiet apartment",
      price: 80
    },
    {
      id: 2,
      href: "/",
      imgSrc:
        "https://raw.githubusercontent.com/foxxxyproxy/airbnb-demo-frontend/master/public/img/Image-1",
      type: type[0],
      title: "Romantic abin with view",
      price: 80
    },
    {
      id: 3,
      href: "/",
      imgSrc:
        "https://raw.githubusercontent.com/foxxxyproxy/airbnb-demo-frontend/master/public/img/Image-2",
      type: type[0],
      title: "Beautiful cozy room",
      price: 80
    }
  ],
  pagination: {
    total: 258,
    limit: 32,
    offset: 0
  }
};

export default Response;
