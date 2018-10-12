import React from "react";
import { Document, Page } from 'react-pdf';

// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import InputLabel from "@material-ui/core/InputLabel";
// core components
import GridItem from "components/Grid/GridItem.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import CustomInput from "components/CustomInput/CustomInput.jsx";
import Button from "components/CustomButtons/Button.jsx";
import Card from "components/Card/Card.jsx";
import CardHeader from "components/Card/CardHeader.jsx";
import CardAvatar from "components/Card/CardAvatar.jsx";
import CardBody from "components/Card/CardBody.jsx";
import CardFooter from "components/Card/CardFooter.jsx";
import CloudDownload from "@material-ui/icons/CloudDownload";

import avatar from "assets/img/faces/marc.jpg";

import LoadPDF from "components/load-pdf.jsx";

const styles = {
  cardCategoryWhite: {
    color: "rgba(255,255,255,.62)",
    margin: "0",
    fontSize: "14px",
    marginTop: "0",
    marginBottom: "0"
  },
  cardTitleWhite: {
    color: "#FFFFFF",
    marginTop: "0px",
    minHeight: "auto",
    fontWeight: "300",
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    marginBottom: "3px",
    textDecoration: "none"
  }
  ,
  state: {
    numPages: null,
    pageNumber: 1,
  }
};



function UserProfile(props, state) {
  const { classes } = props;
  const { pageNumber, numPages } = state;

  return (
    <div>
      <GridContainer>
      {/* <GridItem xs={12} sm={12} md={2}>
      </GridItem> */}
      <GridItem xs={12} sm={12} md={5}>
          <Card>
            <CardHeader color="primary">
              <h4 className={classes.cardTitleWhite}>Reglamento</h4>
              <p className={classes.cardCategoryWhite}>Esta es una vista previa del documento de reglas de tu comunidad. <br/>Debajo de este podrás encontrar un enlace de descarga.</p>
            </CardHeader>
            <CardBody>
            

              
        <Document
          file="reglamento.pdf"
          //onLoadSuccess={LoadPDF}
          onLoadSuccess = { numPages => 6}
        >
          <Page pageNumber={1} />
        </Document>
        <p>Page {/*pageNumber} of {numPages*/}1 of 6</p>
                 


            </CardBody>
            <CardFooter>
              {/* <form method="get" action="reglamento.pdf"> 
              <Button color="primary" type="download">Abrir</Button> 
              </form> */}
              <a href="reglamento.pdf" color="primary" target="_blank">Abrir en otra Pestaña</a>

                <a href="reglamento.pdf" color="primary" download>
              Descargar Reglamento</a>

            </CardFooter>
          </Card>
        </GridItem>
        <GridItem xs={12} sm={12} md={2}>
        </GridItem>

      </GridContainer>
    </div>
  );
}

export default withStyles(styles)(UserProfile);
