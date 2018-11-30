import axios from "axios";
import { URL } from "./apiConstants.jsx";

export const makeRequest = (id, fk, data) => {
  return new Promise((resolve, rejects) => {
    axios.get(URL + "Neighborhoods/" + fk).then(
      () => {
        axios.post(URL + "Neighbors/" + id + "/request/" + fk, data).then(
          res => {
            resolve(res.data);
          },
          err => {
            // eslint-disable-next-line no-console
            console.log("error en makeRequest:", err);
            rejects();
          }
        );
      },
      () => {
        rejects("Not found");
      }
    );
  });
};

export const cancelRequest = id => {
  return new Promise((resolve, rejects) => {
    axios
      .get(URL + 'Requests?filter={"where":{"neighborId":"' + id + '"}}')
      .then(
        res => {
          axios
            .delete(URL + 'Requests/' + res.data[0].id)
            .then(
              res2 => {
                console.log(res2.data);
                resolve(res2.data);
              },
              err2 => {
                rejects("Error en validateRepresentant, fetchRequests: ", err2);
              }
            );
        },
        err => {
          rejects("Error en validateRepresentant, fetchRequests: ", err);
        }
      );
  });
};

export const validateRequest = () => {
  return new Promise((resolve, rejects) => {
    let convecinos = JSON.parse(localStorage.getItem("convecinos"));
    if (convecinos === null) {
      rejects(false);
    } else {
      axios
        .get(
          URL +
            "Neighbors/" +
            convecinos.userId +
            '?filter={"fields":["neighborhoodId"]}'
        )
        .then(
        res => {
          if (res.data.neighborhoodId) {
            resolve(2);
          } else {
              axios
                .get(
                  URL +
                    'Requests?filter={"where":{"neighborId":"' +
                    convecinos.userId +
                    '"}}'
                )
                .then(
              res2 => {
                if (res2.data.length) {
                  resolve(1);
                } else {
                  resolve(0);
                }
              },
              err => {
                rejects("Error en validateRepresentant, fetchRequests: ", err);
              }
            );
          }
        },
        err => {
          console.log("ERROR!", err);
          rejects(err);
        }
      );
    }
  });
};
