import axios from "axios";
import { URL } from "./apiConstants.jsx";
import moment from "moment";


export const patchNeighbor = (id, data) => {
  return new Promise((resolve, rejects) => {
    axios.patch(URL + "Neighbors/"+id, data).then(
      res => {
          const neighbors = res.data;
          resolve(neighbors);
        },
        err => {
          console.log('error en patchNeighbor:', err);
          rejects();
        }
      );
  });
}
// {"where":{"neighborhoodId":"5bc752c00bc8e9036dfbc1ef"}}
// http://kremlin-api.herokuapp.com/api/Neighbors?filter={"where":{"neighborhoodId":"5bc752c00bc8e9036dfbc1ef"}}
export const createProposal = (id,data) => {
  return new Promise((resolve, rejects) => {
    let convecinos = JSON.parse(localStorage.getItem("convecinos"));
    axios.get(URL + 'Neighbors?filter={"where":{"neighborhoodId":"'+id+'"}}').then(
      res => {
        let datos ={
          name: data.name,
          description: data.description,
          categoryId: data.categoryId,
          neighborId: String(convecinos.userId),
          neighborhoodId: String(convecinos.neighborhoodId),
          max_votes: res.data.length
        }
        console.log(datos);
        axios.post(URL + "Proposals", datos).then(
          res2 => {
              const neighbors = res2.data;
              resolve(neighbors);
            },
            err2 => {
              console.log('error en createProposal:', err2);
              rejects();
            }
          );
          const neighbors = res.data;
          resolve(neighbors);
        },
        err => {
          console.log('error en createProposal:', err);
          rejects();
        }
      );
  });
}

export const makeNotice = data => {
  return new Promise((resolve, rejects) => {
    axios.post(URL + 'Notices', data).then(
      res => {
          const neighbors = res.data;
          resolve(neighbors);
        },
        err => {
          console.log('error en makeNotice:', err);
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
        console.log('error en makeTransaction:', err);
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
        console.log("error en fetchRepresentatives:", err);
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
          console.log(proposals[0].name);
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
    axios.get(URL + '/Neighbors').then(
      res => {
        const neighbor = res.data;
        let length = neighbor.length;
        let array = [];
        for (let i = 0; i < length; i++) {
          let cell = new Array(
            neighbor[i].first_name + " " + neighbor[i].last_name,


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
        console.log("success: ", res);
        resolve(res.data);
      },
      err => {
        // eslint-disable-next-line no-console
        console.log("error en ProposalsToVote:", err);
      }
    );
  });
}
