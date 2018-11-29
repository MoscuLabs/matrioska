import axios from "axios";
import { URL } from "./apiConstants.jsx";

export const register = data => {
  return new Promise((resolve, rejects) => {
    axios.post(URL + "Neighbors", data).then(
      res => {
        let convecinos = {
          userId: res.data.id
        };
        localStorage.setItem("convecinos", JSON.stringify(convecinos));
        resolve(res.data);
      },
      err => {
        console.log('error en register', err);
        rejects();
      }
    );
  });
};

export const login = data => {
  return new Promise((resolve, rejects) => {
    axios.post(URL + "Neighbors/login", data).then(
      res => {
        let convecinos = {
          access_token: res.data.id,
          userId: res.data.userId
        };
        localStorage.setItem("convecinos", JSON.stringify(convecinos));
        resolve(res.data);
      },
      err => {
        console.log('error en login', err);
        rejects();
      }
    );
  });
};

export const logout = () => {
  localStorage.clear();
};

export const validateAccess = () => {
  return new Promise((resolve, rejects) => {
    let convecinos = JSON.parse(localStorage.getItem("convecinos"));
    if (convecinos === null) {
      rejects(false);
    }
    else {
      axios
        .get(
          URL +
            "/Neighbors/" +
            convecinos.userId +
            "/accessTokens/" +
            convecinos.access_token
        )
        .then(
          res => {
            resolve(true);
          },
          err => {
            resolve(false);
          }
      );
    }
  });
};
