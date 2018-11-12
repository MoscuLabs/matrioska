import React from "react";
import { Document, Page } from "react-pdf";

// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";

// @material-ui/icons
import KeyboardArrowLeft from "@material-ui/icons/KeyboardArrowLeft";
import KeyboardArrowRight from "@material-ui/icons/KeyboardArrowRight";

// core components
import Heading from "components/Heading/Heading.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import Button from "components/CustomButtons/Button.jsx";

import { cardTitle } from "assets/jss/material-dashboard-pro-react.jsx";

const style = {
  customCardContentClass: {
    paddingLeft: "0",
    paddingRight: "0"
  },
  cardIconTitle: {
    ...cardTitle,
    marginTop: "15px",
    marginBottom: "0px"
  }
};

class Rules extends React.Component {
  state = {
    numPages: 1,
    pageNumber: 1
  };

  onDocumentLoad = ({ numPages }) => {
    this.setState({ numPages });
  };

  previousPage = () => {
    if (this.state.pageNumber > 1) {
      this.setState({ pageNumber: this.state.pageNumber - 1 });
    }
  };

  nextPage = () => {
    if (this.state.pageNumber < this.state.numPages) {
      this.setState({ pageNumber: this.state.pageNumber + 1 });
    }
  };

  render() {
    const { pageNumber, numPages } = this.state;
    const { classes } = this.props;
    return (
      <div>
        <Heading
          textAlign="center"
          title="Reglamento"
          category={
            <span>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              veniam, quis nostrud exercitation ullamco laboris nisi ut nisi
              nisi nisi nisi minim veniam, quis nostrud exercitation ullamco
              nisi nisi ut aliquip ex ea commodo consequat. Duis aute irure
              dolor in reprehenderit in voluptate velit esse cillum dolore eu
              pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </span>
          }
        />
        <GridContainer align="center">
          <GridItem xs={12} sm={12} md={12}>
            <Document
              file="https://kremlin-api.herokuapp.com/api/Containers/reglamentos/download/1R.pdf"
              onLoadSuccess={this.onDocumentLoad}
            >
              <Page pageNumber={pageNumber} />
            </Document>
            <br />
            <p>
              Page {pageNumber} of {numPages}
            </p>
          </GridItem>
          <GridItem xs={12} sm={12} md={12}>
            <Button className={classes.marginRight} onClick={this.previousPage}>
              <KeyboardArrowLeft className={classes.icons} /> Atrás
            </Button>
            <Button className={classes.marginRight} onClick={this.nextPage}>
              Siguiente <KeyboardArrowRight className={classes.icons} />
            </Button>
          </GridItem>
        </GridContainer>
      </div>
    );
  }
}

export default withStyles(style)(Rules);
