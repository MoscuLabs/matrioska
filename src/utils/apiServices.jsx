import axios from "axios";
import { URL } from "./apiConstants.jsx";

export const fetchNeighbors = () => {
  return new Promise((resolve, rejects) => {
    axios.get(URL + "Neighbors")
      .then(
        res => {
          const neighbors = res.data;
          resolve(neighbors);
        },
        err => {
          console.log('error en fetchNeighbors:', err);
          rejects();
        }
      );
  });
}


export const fetchRepresentatives = () => {
  return new Promise((resolve, rejects) => {
    axios.get(URL + "Neighbors?filter=%7B%22where%22%3A%7B%22representant%22%3Atrue%7D%7D")
      .then(
        res => {
          const representatives = res.data;
          resolve(representatives);
        },
        err => {
          console.log('error en fetchNeighbors:', err);
          rejects();
        }
      );
  });
}
