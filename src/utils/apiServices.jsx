import axios from "axios";
import { URL } from "./apiConstants.jsx";

export const fetchNeighbors = () => {
  axios.get(URL + "Neighbors").then(res => {
    const neighbors = res.data;
    console.log(neighbors);
  });
};
