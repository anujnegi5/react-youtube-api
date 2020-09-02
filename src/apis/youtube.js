import axios from "axios";

const KEY = "AIzaSyDBQQt8MY0Lzh4ung05DbKHP1ekAHwMpSU";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResults: 5,
    key: KEY,
  },
});
