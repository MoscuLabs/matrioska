import React from "react";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";

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
import { fetchProposals } from "utils/apiServices.jsx";

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
    approved: [],
    ongoing: []
  };
  componentDidMount() {
    fetchProposals(3).then(rep => {
      this.setState({ approved: rep });
    });
    fetchProposals(2).then(rep => {
      this.setState({ ongoing: rep });
    });
  }
  render() {
    const { classes } = this.props;
    const { approved, ongoing } = this.state;
    return (
      <div>
        <Heading
          textAlign="center"
          title="Propuestas"
          category={
            <span>
              El voto es un derecho. Éste nos da la oportunidad de hacernos 
              escuchar y expresar nuestras opiniones, sugerencias e inconformidades. 
              Votar consiste en brindar apoyo a una propuesta en forma anónima, pues 
              mediante este acto de participación ciudadana que ejercemos de acuerdo 
              a nuestros ideales, se define los caminos a seguir por parte de una comunidad.
              Es  por esto que es esencial estar informados sobre las propuestas que se 
              encuentran en gestión en la asociación vecinal y ejercer nuestro derecho.
            </span>
          }
        />
        <GridContainer>
          <GridItem xs={12} sm={12} md={6}>
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
          <GridItem xs={12} sm={12} md={6}>
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
            <Link to="/vote">
              <Button color="info" size="lg" className={classes.marginRight}>
                ¡Vota!
              </Button>
            </Link>
            <Link to="/CreateProposal">
              <Button color="info" size="lg" className={classes.marginRight}>
                ¡Crear Propuesta!
              </Button>
            </Link>

          </GridItem>
        </GridContainer>
      </div>
    );
  }
}

export default withStyles(styles)(Proposals);
