import axios from "axios";
import { URL } from "./apiConstants.jsx";

export const makeRequest = (id, fk, data) => {
  return new Promise((resolve, rejects) => {
    axios.post(URL + 'Neighbors/' + id + '/request/' + fk, data).then(
      res => {
        const representatives = res.data;
        resolve(representatives);
      },
      err => {
        // eslint-disable-next-line no-console
        console.log("error en fetchNeighbors:", err);
        rejects();
      }
    );
  });
};
