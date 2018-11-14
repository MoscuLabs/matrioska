import axios from "axios";
import { URL } from "./apiConstants.jsx";
import moment from "moment";

export const fetchRepresentatives = () => {
  return new Promise((resolve, rejects) => {
    axios.get(URL + 'Neighbors?filter={"where":{"representant":true}}').then(
      res => {
        const representatives = res.data;
        resolve(representatives);
      },
      err => {
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
          console.log("error en Proposals:", err);
          rejects();
        }
      );
  });
};

export const fetchProposalsToVote = id => {
  return new Promise((resolve, rejects) => {
    axios
      .get(URL + '/Proposals?filter={"where":{"categoryId":"' + id + '"}}')
      .then(
        res => {
          const ProposalsToVote = res.data;
          resolve(ProposalsToVote);
        },
        err => {
          console.log("error en ProposalsToVote:", err);
          rejects();
        }
      );
  });
};
