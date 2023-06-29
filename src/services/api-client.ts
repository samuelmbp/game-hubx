import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "8d07fb15205341d19f0e48c6b77600b6",
  },
});
