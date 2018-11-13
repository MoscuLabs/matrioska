import React from "react";

// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";

// material-ui icons
import SwapHoriz from "@material-ui/icons/SwapHoriz";

// core components
import Heading from "components/Heading/Heading.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import Table from "components/Table/Table.jsx";
import Card from "components/Card/Card.jsx";
import CardHeader from "components/Card/CardHeader.jsx";
import CardIcon from "components/Card/CardIcon.jsx";
import CardBody from "components/Card/CardBody.jsx";

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

function Transparency({ ...props }) {
  const { classes } = props;
  return (
    <div>
      <Heading
        textAlign="center"
        title="Rendición de Cuentas"
        category={
          <span>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            veniam, quis nostrud exercitation ullamco laboris nisi ut nisi nisi
            minim veniam, quis nostrud exercitation ullamco laboris nisi ut nisi
            nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            sunt in culpa qui officia deserunt mollit anim id est laborum.
          </span>
        }
      />
      <GridContainer>
        <GridItem xs={12}>
          <Card>
            <CardHeader color="primary" icon>
              <CardIcon color="primary">
                <SwapHoriz />
              </CardIcon>
              <h4 className={classes.cardIconTitle}>
                Últimos movimientos del mes
              </h4>
            </CardHeader>
            <CardBody>
              <Table
                tableHeaderColor="primary"
                tableHead={[
                  "Responsable",
                  "Concepto",
                  "Beneficiario",
                  "Monto",
                  "Fecha"
                ]}
                tableData={[
                  ["Dakota Rice", "Niger", "Oud-Turnhout", "Oud-Turnhout", "$36,738"],
                  ["Minerva Hooper", "Curaçao", "Sinaai-Waas", "Oud-Turnhout", "$23,789"],
                  ["Sage Rodriguez", "Netherlands", "Baileux", "Oud-Turnhout", "$56,142"],
                  ["Philip Chaney", "Korea, South", "Overland Park", "Oud-Turnhout", "$38,735"],
                  ["Mason Porter", "Chile", "Gloucester", "Oud-Turnhout", "$78,615"]
                ]}
                coloredColls={[3]}
                colorsColls={["primary"]}
              />
            </CardBody>
          </Card>
        </GridItem>
      </GridContainer>
    </div>
  );
}

export default withStyles(style)(Transparency);
