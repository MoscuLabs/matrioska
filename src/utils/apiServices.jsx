import axios from "axios";
import { URL } from "./apiConstants.jsx";
import moment from "moment";

export const fetchNeighbors = () => {
  return new Promise((resolve, rejects) => {
    axios.get(URL + "Neighbors").then(
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

export const patchNeighbor = (id, data) => {
  return new Promise((resolve, rejects) => {
    axios.patch(URL + "Neighbors/"+id, data).then(
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
