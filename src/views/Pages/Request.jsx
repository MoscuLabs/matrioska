import React from "react";
import PropTypes from "prop-types";

// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";

// @material-ui/icons

// core components
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import CustomInput from "components/CustomInput/CustomInput.jsx";
import Button from "components/CustomButtons/Button.jsx";
import Card from "components/Card/Card.jsx";
import CardBody from "components/Card/CardBody.jsx";
import CardHeader from "components/Card/CardHeader.jsx";
import CardFooter from "components/Card/CardFooter.jsx";

import loginPageStyle from "assets/jss/material-dashboard-pro-react/views/loginPageStyle.jsx";

import { makeRequest, validateRequest } from "utils/apiRequest.jsx";

class LoginPage extends React.Component {
  constructor(props) {
    super(props);
    // we use this to make the card to appear after the page has been rendered
    this.state = {
      neighborhoodFlag: false,
      cardAnimaton: "cardHidden",
      codigo: "",
      mensaje: "",
      loading: false
    };
    this.handleRequest = this.handleRequest.bind(this);
  }

  handleRequest = () => {
    let convecinos = JSON.parse(localStorage.getItem("convecinos"));
    if (this.state.codigo !== "") {
      let data = {
        //message: this.state.message
      };
      makeRequest(convecinos.userId, this.state.codigo, data);
    }
    console.log(this.state.codigo);
    console.log(this.state.mensaje);
  };

  change = (event, stateValue) => {
    if (stateValue === "codigo") {
      this.setState({ [stateValue]: event.target.value });
    }
    if(stateValue === "mensaje") {
      this.setState({ [stateValue]: event.target.value });
    }
  };

  componentDidMount() {
    // we add a hidden class to the card and after 700 ms we delete it and the transition appears
    validateRequest().then(rep => {
      if (rep === 2) {
        window.location = "/dashboard"
      } else if (rep === 1) {
        this.setState({ loading: true });
      }
    });
    this.timeOutFunction = setTimeout(
      function() {
        this.setState({ cardAnimaton: "" });
      }.bind(this),
      700
    );
  }

  componentWillUnmount() {
    clearTimeout(this.timeOutFunction);
    this.timeOutFunction = null;
  }

  render() {
    const { classes } = this.props;
    const { loading } = this.state;
    return (
      <div className={classes.container}>
        <GridContainer justify="center">
          <GridItem xs={12} sm={6} md={4}>
            <form>
              {
                loading ? (
                  <Card login className={classes[this.state.cardAnimaton]}>
                    <CardHeader
                      className={`${classes.cardHeader} ${classes.textCenter}`}
                      color="rose"
                    >
                      <h4 className={classes.cardTitle}>CONVECINOS</h4>
                    </CardHeader>
                    <CardBody>
                    <GridItem xs={12} sm={12} md={12}>
                        <h3 align="center">Procesando Solicitud...</h3>
                      </GridItem>
                    </CardBody>
                    <CardFooter className={classes.justifyContentCenter}>
                      <Button
                        color="rose"
                        simple
                        size="lg"
                        block
                        onClick={this.handleRequest}
                      >
                        Cancelar Solicitud
                      </Button>
                    </CardFooter>
                  </Card>
                ) : (
                  <Card login className={classes[this.state.cardAnimaton]}>
                    <CardHeader
                      className={`${classes.cardHeader} ${classes.textCenter}`}
                      color="rose"
                    >
                      <h4 className={classes.cardTitle}>Ingresar Código</h4>
                    </CardHeader>
                    <CardBody>
                      <CustomInput
                        labelText="Escribe el código de alguna comunidad"
                        id="codigo"
                        formControlProps={{
                          fullWidth: true
                        }}
                        inputProps={{
                          onChange: event => this.change(event, "codigo")
                        }}
                      />
                    </CardBody>
                    <CardFooter className={classes.justifyContentCenter}>
                      <Button
                        color="rose"
                        simple
                        size="lg"
                        block
                        onClick={this.handleRequest}
                      >
                        Solicitar
                      </Button>
                    </CardFooter>
                  </Card>
                )
              }
            </form>
          </GridItem>
        </GridContainer>
      </div>
    );
  }
}

LoginPage.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(loginPageStyle)(LoginPage);
