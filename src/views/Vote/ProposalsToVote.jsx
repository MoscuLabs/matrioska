import React from "react";
import { Link } from "react-router-dom";

// core components
import withStyles from "@material-ui/core/styles/withStyles";
import GridContainer from "components/Grid/GridContainer.jsx";
import Checkbox from "@material-ui/core/Checkbox";
import customSelectStyle from "assets/jss/material-dashboard-pro-react/customSelectStyle.jsx";
import customCheckboxRadioSwitch from "assets/jss/material-dashboard-pro-react/customCheckboxRadioSwitch.jsx";
import Button from "components/CustomButtons/Button.jsx";

const style = {
  infoText: {
    fontWeight: "300",
    margin: "10px 0 30px",
    textAlign: "center"
  },
  inputAdornmentIcon: {
    color: "#555"
  },
  choiche: {
    textAlign: "center",
    cursor: "pointer",
    marginTop: "20px"
  },
  ...customSelectStyle,
  ...customCheckboxRadioSwitch
};

class Vote extends React.Component {
  state = {
    selectedValue: ""
  };

  handleChange = event => {
    this.setState({ selectedValue: event.target.value });
  };

  render() {
    const { classes } = this.props;
    const { selectedValue } = this.state;
    console.log(selectedValue);
    return (
      <div>
        <GridContainer justify="center">
          <h4 className={classes.infoText}>Vota perro</h4>
        </GridContainer>
        <GridContainer justify="center">
          <div className={classes.choiche} style={{ marginRight: "50px" }}>
            <Checkbox
              tabIndex={-1}
              checked={this.state.selectedValue === "community"}
              onChange={this.handleChange}
              checkedIcon={
                <i className={"fas fa-home " + classes.iconCheckboxIcon} />
              }
              icon={<i className={"fas fa-home " + classes.iconCheckboxIcon} />}
              classes={{
                checked: classes.iconCheckboxChecked,
                root: classes.iconCheckbox
              }}
              value="community"
              aria-label="A"
            />
            <h6>Comunidad</h6>
          </div>
          <div className={classes.choiche} style={{ marginRight: "50px" }}>
            <Checkbox
              tabIndex={-1}
              checked={this.state.selectedValue === "security"}
              onChange={this.handleChange}
              checkedIcon={
                <i
                  className={"fas fa-shield-alt " + classes.iconCheckboxIcon}
                />
              }
              icon={
                <i
                  className={"fas fa-shield-alt " + classes.iconCheckboxIcon}
                />
              }
              classes={{
                checked: classes.iconCheckboxChecked,
                root: classes.iconCheckbox
              }}
              value="security"
              aria-label="B"
            />
            <h6>Seguridad</h6>
          </div>
          <div className={classes.choiche}>
            <Checkbox
              tabIndex={-1}
              checked={this.state.selectedValue === "administration"}
              onChange={this.handleChange}
              checkedIcon={
                <i className={"fas fa-server " + classes.iconCheckboxIcon} />
              }
              icon={
                <i className={"fas fa-server " + classes.iconCheckboxIcon} />
              }
              classes={{
                checked: classes.iconCheckboxChecked,
                root: classes.iconCheckbox
              }}
              value="administration"
              aria-label="C"
            />
            <h6>Administración</h6>
          </div>
        </GridContainer>
        {selectedValue ? (
          <GridContainer justify="center" style={{ marginTop: "50px" }}>
            <Link to="/vote">
              <Button color="info" size="lg" className={classes.marginRight}>
                Ver propuestas
              </Button>
            </Link>
          </GridContainer>
        ) : (
          <div />
        )}
      </div>
    );
  }
}

export default withStyles(style)(Vote);
