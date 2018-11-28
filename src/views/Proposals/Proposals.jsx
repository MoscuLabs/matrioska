import React from "react";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";

// material-ui icons
import HowToVote from "@material-ui/icons/HowToVote";

// core components
import Heading from "components/Heading/Heading.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import Table from "components/Table/Table.jsx";
import Card from "components/Card/Card.jsx";
import CardHeader from "components/Card/CardHeader.jsx";
import CardText from "components/Card/CardText.jsx";
import CardBody from "components/Card/CardBody.jsx";
import Button from "components/CustomButtons/Button.jsx";

import { Link } from "react-router-dom";
import { fetchBankProposals, fetchProposals } from "utils/apiServices.jsx";

import {
  cardTitle,
  roseColor
} from "assets/jss/material-dashboard-pro-react.jsx";

const styles = {
  cardTitle,
  cardTitleWhite: {
    ...cardTitle,
    color: "#FFFFFF",
    marginTop: "0"
  },
  cardCategoryWhite: {
    margin: "0",
    color: "rgba(255, 255, 255, 0.8)",
    fontSize: ".875rem"
  },
  cardCategory: {
    color: "#999999",
    marginTop: "10px"
  },
  icon: {
    color: "#333333",
    margin: "10px auto 0",
    width: "130px",
    height: "130px",
    border: "1px solid #E5E5E5",
    borderRadius: "50%",
    lineHeight: "174px",
    "& svg": {
      width: "55px",
      height: "55px"
    },
    "& .fab,& .fas,& .far,& .fal,& .material-icons": {
      width: "55px",
      fontSize: "55px"
    }
  },
  iconRose: {
    color: roseColor
  },
  marginTop30: {
    marginTop: "30px"
  },
  testimonialIcon: {
    marginTop: "30px",
    "& svg": {
      width: "40px",
      height: "40px"
    }
  },
  cardTestimonialDescription: {
    fontStyle: "italic",
    color: "#999999"
  }
};

class Proposals extends React.Component {
  state = {
    listOfProposals: [],
    approved: [],
    ongoing: []
  };
  componentDidMount() {
    fetchProposals(2).then(rep => {
      this.setState({ ongoing: rep });
    });
    fetchProposals(3).then(rep => {
      this.setState({ approved: rep });
    });
    fetchBankProposals().then(rep => {
      this.setState({ listOfProposals: rep });
    });
  }
  render() {
    const { classes } = this.props;
    const { listOfProposals, approved, ongoing } = this.state;
    return (
      <div>
        <Heading
          textAlign="center"
          title="Propuestas"
          category={
            <span>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </span>
          }
        />
      <GridContainer justify="center">
          <GridItem xs={12} sm={12} md={4} align="center">
            <Card>
              <CardBody>
                <div className={classes.center}>
                  <h5>
                    Apoya a tu comunidad votando por las propuestas de tus
                    convecinos
                  </h5>
                  <Link to="/vote">
                    <Button
                      color="info"
                      size="lg"
                      className={classes.marginRight}
                    >
                      ¡Vota!
                    </Button>
                  </Link>
                </div>
              </CardBody>
            </Card>
          </GridItem>
        </GridContainer>
        <GridContainer>
          <GridItem xs={12} sm={12} md={6} align="left">
            <Card>
              <CardHeader color="primary" text>
                <CardText color="primary">
                  <h4 className={classes.cardTitleWhite}>Aprobadas</h4>
                </CardText>
              </CardHeader>
              <CardBody>
                <Table
                  hover
                  tableHeaderColor="warning"
                  tableHead={["Nombre", "Categoría", "Autor", "Votos"]}
                  tableData={approved}
                />
              </CardBody>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={12} md={6} align="right">
            <Card>
              <CardHeader color="primary" text>
                <CardText color="primary">
                  <h4 className={classes.cardTitleWhite}>En Gestión</h4>
                </CardText>
              </CardHeader>
              <CardBody>
                <Table
                  hover
                  tableHeaderColor="warning"
                  tableHead={["Nombre", "Categoría", "Autor", "Votos"]}
                  tableData={ongoing}
                />
              </CardBody>
            </Card>
          </GridItem>
        </GridContainer>
        <GridContainer align="center">
          <GridItem xs={12} sm={12} md={12}>
            <Card>
              <CardHeader color="primary" text>
                <CardText color="primary">
                  <h4 className={classes.cardTitleWhite}>
                    Tus votos
                  </h4>
                </CardText>
              </CardHeader>
              <CardBody>
                <Table
                  hover
                  tableHeaderColor="warning"
                  tableHead={["Nombre", "Descripción", "Categoría", "Autor"]}
                  tableData={listOfProposals}
                />
              </CardBody>
            </Card>
          </GridItem>
        </GridContainer>
      </div>
    );
  }
}

export default withStyles(styles)(Proposals);
