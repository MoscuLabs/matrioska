import React from "react";

// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import Card from "components/Card/Card.jsx";
import CardHeader from "components/Card/CardHeader.jsx";
import CardBody from "components/Card/CardBody.jsx";
import CardFooter from "components/Card/CardFooter.jsx";

// core components
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";

import priceImage1 from "assets/img/card-2.jpeg";

import customSelectStyle from "assets/jss/material-dashboard-pro-react/customSelectStyle.jsx";

const style = {
  infoText: {
    fontWeight: "300",
    margin: "10px 0 30px",
    textAlign: "center"
  },
  ...customSelectStyle
};

class Step2 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      simpleSelect: "",
      desgin: false,
      code: false,
      develop: false
    };
  }
  sendState() {
    return this.state;
  }
  handleSimple = event => {
    this.setState({ [event.target.name]: event.target.value });
  };
  isValidated() {
    return true;
  }
  render() {
    const { classes } = this.props;
    return (
      <div>
        <h4 className={classes.infoText}>Banco de Propuestas</h4>
        <GridContainer>
          <GridItem xs={12} sm={12} md={4}>
            <Card product className={classes.cardHover}>
              <CardHeader image className={classes.cardHeaderHover}>
                <a href="#pablo" onClick={e => e.preventDefault()}>
                  <img src={priceImage1} alt="..." />
                </a>
              </CardHeader>
              <CardBody>
                <h4 className={classes.cardProductTitle}>
                  <a href="#pablo" onClick={e => e.preventDefault()}>
                    Pintar los topes
                  </a>
                </h4>
              </CardBody>
              <CardFooter product>
                <div className={classes.price}>
                  <h4>3/30 Votos</h4>
                </div>
              </CardFooter>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <Card product className={classes.cardHover}>
              <CardHeader image className={classes.cardHeaderHover}>
                <a href="#pablo" onClick={e => e.preventDefault()}>
                  <img src={priceImage1} alt="..." />
                </a>
              </CardHeader>
              <CardBody>
                <h4 className={classes.cardProductTitle}>
                  <a href="#pablo" onClick={e => e.preventDefault()}>
                    Pintar los topes
                  </a>
                </h4>
              </CardBody>
              <CardFooter product>
                <div className={classes.price}>
                  <h4>3/30 Votos</h4>
                </div>
              </CardFooter>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={12} md={4}>
            <Card product className={classes.cardHover}>
              <CardHeader image className={classes.cardHeaderHover}>
                <a href="#pablo" onClick={e => e.preventDefault()}>
                  <img src={priceImage1} alt="..." />
                </a>
              </CardHeader>
              <CardBody>
                <h4 className={classes.cardProductTitle}>
                  <a href="#pablo" onClick={e => e.preventDefault()}>
                    Pintar los topes
                  </a>
                </h4>
              </CardBody>
              <CardFooter product>
                <div className={classes.price}>
                  <h4>3/30 Votos</h4>
                </div>
              </CardFooter>
            </Card>
          </GridItem>
        </GridContainer>
      </div>
    );
  }
}

export default withStyles(style)(Step2);
