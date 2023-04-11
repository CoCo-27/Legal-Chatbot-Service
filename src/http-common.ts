import axios from "axios";

export default axios.create({
  baseURL: "http://user.gpt3bots.com/api",
  headers: {
    "Content-type": "application/json"
  }
});