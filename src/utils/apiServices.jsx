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

export const fetchExpenses = () => {
  return new Promise((resolve, rejects) => {
    axios.get(URL + "/Expenses?filter=%7B%22include%22%3A%5B%7B%22relation%22%3A%22neighbor%22%7D%5D%7D")
      .then(
        res => {
          const Expenses = res.data;
          resolve(Expenses)
        },
        err => {
          console.log('error en Expenses:', err);
          rejects();
        }
      );
  });
}

export const fetchProposals = () => {
  return new Promise((resolve, rejects) => {
    axios.get(URL + "/Proposals")
      .then(
        res => {
          const Proposals = res.data;
          resolve(Proposals)
        },
        err => {
          console.log('error en Proposals:', err);
          rejects();
        }
      );
  });
}

export const fetchProposalsToVote = (id) => {
  return new Promise((resolve, rejects) => {
    axios.get(URL + "/Proposals?filter={\"where\":{\"categoryId\":\""+id+"\"}}")
      .then(
        res => {
          const ProposalsToVote = res.data;
          resolve(ProposalsToVote)
        },
        err => {
          console.log('error en ProposalsToVote:', err);
          rejects();
        }
      );
  });
}

