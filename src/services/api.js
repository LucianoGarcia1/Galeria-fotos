import axios from "axios"
const Api = axios.create({
  baseURL: `https://pixabay.com/api`,
  headers: {
    "Content-Type": "application/json",
  },
});
export default Api;

//&q=${names}&per_page=50