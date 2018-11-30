import axios from "axios";
import { URL } from "./apiConstants.jsx";
import moment from "moment";

export const fetchNeighborInfo = () => {
  return new Promise((resolve, rejects) => {
    let convecinos = JSON.parse(localStorage.getItem("convecinos"));
    if (convecinos === null) {
      rejects(false);
    } else {
      axios.get(URL + "Neighbors/" + convecinos.userId).then(
        res => {
          resolve(res.data);
        },
        err => {
          console.log("ERROR!", err);
          rejects(err);
        }
      );
    }
  });
};

export const editProfileInfo = data => {
  return new Promise((resolve, rejects) => {
    let convecinos = JSON.parse(localStorage.getItem("convecinos"));
    axios
      .patch(
        URL +
          "Neighbors/" +
          convecinos.userId +
          "?access_token=" +
          convecinos.access_token,
        data
      )
      .then(
        res => {
          console.log(res.data);
          resolve(res.data);
        },
        err => {
          console.log("error en fetchNeighbors:", err);
          rejects();
        }
      );
  });
};

export const makeNotice = data => {
  return new Promise((resolve, rejects) => {
    axios.post(URL + 'Notices', data).then(
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

export const makeTransaction = data => {
  return new Promise((resolve, rejects) => {
    axios.post(URL + 'Expenses', data).then(
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
    axios.get(URL + 'Neighbors?filter={"where":{"representant":true}}').then(
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

export const fetchExpenses = () => {
  return new Promise((resolve, rejects) => {
    axios
      .get(
        URL +
          '/Expenses?filter={"include":[{"relation":"neighbor","scope":{"fields":["first_name","last_name"]}}]}'
      )
      .then(
        res => {
          const expenses = res.data;
          let length = expenses.length;
          let array = [];
          for (let i = 0; i < length; i++) {
            // eslint-disable-next-line
            let cell = new Array(
              expenses[i].neighbor.first_name +
                " " +
                expenses[i].neighbor.last_name,
              expenses[i].concept,
              expenses[i].beneficiary,
              "$ " + expenses[i].amount,
              moment(expenses[i].issued_date).format("DD/MM/YYYY")
            );
            array[i] = cell;
          }
          resolve(array);
        },
        err => {
          // eslint-disable-next-line no-console
          console.log("error en Expenses:", err);
          rejects();
        }
      );
  });
};

export const fetchProposals = status => {
  return new Promise((resolve, rejects) => {
    axios
      .get(
        URL +
          '/Proposals?filter={"where":{"status":' +
          status +
          '},"include":[{"relation":"category","scope":{"fields":["name"]}},{"relation":"neighbor","scope":{"fields":["first_name","last_name"]}}]}'
      )
      .then(
        res => {
          const proposals = res.data;
          let length = proposals.length;
          let array = [];
          for (let i = 0; i < length; i++) {
            // eslint-disable-next-line
            let cell = new Array(
              proposals[i].name,
              proposals[i].category.name,
              proposals[i].neighbor.first_name,
              proposals[i].current_votes + "/" + proposals[i].max_votes
            );
            array[i] = cell;
          }
          resolve(array);
        },
        err => {
          // eslint-disable-next-line no-console
          console.log("error en Proposals:", err);
          rejects();
        }
      );
  });
};

export const fetchBankProposals = () => {
  return new Promise((resolve, rejects) => {
    axios
      .get(
        URL +
          '/Proposals?filter={"include":[{"relation":"category","scope":{"fields":["name"]}},{"relation":"neighbor","scope":{"fields":["first_name","last_name"]}}]}'
      )
      .then(
        res => {
          const proposals = res.data;
          let length = proposals.length;
          let array = [];
          for (let i = 0; i < length; i++) {
            let cell = new Array(
              proposals[i].name,
              proposals[i].description,
              proposals[i].category.name,
              proposals[i].neighbor.first_name
            );
            array[i] = cell;
          }
          resolve(array);
        },
        err => {
          console.log("error en Proposals:", err);
          rejects();
        }
      );
  });
};

export const fetchToVoteProposals = categoryId => {
  return new Promise((resolve, rejects) => {
    axios
      .get(
        URL +
          '/Proposals?filter={"where":{"categoryId":"' +
          categoryId +
          '"}, "include":[{"relation":"neighbor","scope":{"fields":["first_name","last_name"]}}]}'
      )
      .then(
        res => {
          resolve(res.data);
        },
        err => {
          // eslint-disable-next-line no-console
          console.log("error en ProposalsToVote:", err);
          rejects();
        }
      );
  });
};


export const fetchAllProposals = status => {
  return new Promise((resolve, rejects) => {
    axios
      .get(
        URL +
          '/Proposals?filter={"include":[{"relation":"category","scope":{"fields":["name"]}},{"relation":"neighbor","scope":{"fields":["first_name","last_name"]}}]}'
      )
      .then(
        res => {
          const proposals = res.data;
          let length = proposals.length;
          let array = [];
          for (let i = 0; i < length; i++) {
            let cell = new Array(
              proposals[i].name,
              proposals[i].category.name,
              proposals[i].neighbor.first_name,
              proposals[i].current_votes + "/" + proposals[i].max_votes,
              proposals[i].status

            );
            array[i] = cell;
          }
          resolve(array);
        },
        err => {
          console.log("error en Proposals:", err);
          rejects();
        }
      );
  });
};

export const fetchNeighbors = () => {
  return new Promise((resolve, rejects) => {
    axios.get(URL + "Neighbors").then(
      res => {
        const neighbor = res.data;
        let length = neighbor.length;
        let array = [];
        for (let i = 0; i < length; i++) {
          let cell = new Array(
            neighbor[i].first_name + " " + neighbor[i].last_name
          );
          array[i] = cell;
        }
        resolve(array);
      },
      err => {
        console.log("error en fetchNeighbors:", err);
        rejects();
      }
    );
  });
};

export const uploadFile = file => {
  const formData = new FormData();
  formData.append("file", file);
  return new Promise((resolve, rejects) => {
    axios.post(URL + "Containers/reglamentos/upload", formData).then(
      res => {
        let img_url =
          "https://kremlin-api.herokuapp.com/api/Containers/reglamentos/download/" +
          res.data.result[0].filename;
        resolve(img_url);
      },
      err => {
        // eslint-disable-next-line no-console
        console.log("error en ProposalsToVote:", err);
      }
    );
  });
}
