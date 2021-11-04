// import axios from "axios"; // For get post put requests

// export default axios.create({
//   baseURL: "http://localhost:5000/api/v1/restaurants",
//   headers: {
//     "Content-type": "application/json",
//   },
// });

import axios from "axios";
export default axios.create({
  baseURL: "http://localhost:5000/api/v1/",
  headers: {
    "Content-type": "application/json",
  },
});
