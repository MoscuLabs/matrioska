import React from "react";
import PropTypes from "prop-types";
// @material-ui/core components
import Hidden from "@material-ui/core/Hidden";


import iconsStyle from "assets/jss/material-dashboard-react/views/iconsStyle.jsx";


// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";

// core components
import GridItem from "components/Grid/GridItem.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import Button from "components/CustomButtons/Button.jsx";
import Card from "components/Card/Card.jsx";
import CardHeader from "components/Card/CardHeader.jsx";
import CardAvatar from "components/Card/CardAvatar.jsx";
import CardBody from "components/Card/CardBody.jsx";

import avatar from "assets/img/faces/marc.jpg";

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
};



function Icons(props) {
  const { classes } = props;
  return (
    <GridContainer>
      <GridItem xs={12} sm={12} md={3}>
      <Card profile>
        <CardAvatar profile>
          <a href="#pablo" onClick={e => e.preventDefault()}>
            <img src={avatar} alt="..." />
          </a>
        </CardAvatar>
        <CardBody profile>
          <h6 className={classes.cardCategory}>Presidente</h6>
          <h4 className={classes.cardTitle}>Alec Thompson</h4>
          <p className={classes.description}>
            Don't be scared of the truth because we need to restart the
            human foundation in truth And I love you like Kanye loves Kanye
            I love Rick Owens’ bed design but the back is...
          </p>
          <Button color="primary" round>
            Follow
          </Button>
        </CardBody>
      </Card>
    </GridItem>
    <GridItem xs={12} sm={12} md={3}>
      <Card profile>
        <CardAvatar profile>
          <a href="#pablo" onClick={e => e.preventDefault()}>
            <img src={avatar} alt="..." />
          </a>
        </CardAvatar>
        <CardBody profile>
          <h6 className={classes.cardCategory}>Tesorero</h6>
          <h4 className={classes.cardTitle}>Alec Thompson</h4>
          <p className={classes.description}>
            Don't be scared of the truth because we need to restart the
            human foundation in truth And I love you like Kanye loves Kanye
            I love Rick Owens’ bed design but the back is...
          </p>
          <Button color="primary" round>
            Follow
          </Button>
        </CardBody>
      </Card>
    </GridItem>
    <GridItem xs={12} sm={12} md={3}>
      <Card profile>
        <CardAvatar profile>
          <a href="#pablo" onClick={e => e.preventDefault()}>
            <img src={avatar} alt="..." />
          </a>
        </CardAvatar>
        <CardBody profile>
          <h6 className={classes.cardCategory}>Secretario</h6>
          <h4 className={classes.cardTitle}>Alec Thompson</h4>
          <p className={classes.description}>
            Don't be scared of the truth because we need to restart the
            human foundation in truth And I love you like Kanye loves Kanye
            I love Rick Owens’ bed design but the back is...
          </p>
          <Button color="primary" round>
            Follow
          </Button>
        </CardBody>
      </Card>
    </GridItem>
    <GridItem xs={12} sm={12} md={3}>
      <Card profile>
        <CardAvatar profile>
          <a href="#pablo" onClick={e => e.preventDefault()}>
            <img src={avatar} alt="..." />
          </a>
        </CardAvatar>
        <CardBody profile>
          <h6 className={classes.cardCategory}>Asistente</h6>
          <h4 className={classes.cardTitle}>Alec Thompson</h4>
          <p className={classes.description}>
            Don't be scared of the truth because we need to restart the
            human foundation in truth And I love you like Kanye loves Kanye
            I love Rick Owens’ bed design but the back is...
          </p>
          <Button color="primary" round>
            Follow
          </Button>
        </CardBody>
      </Card>
    </GridItem>
    </GridContainer>
  );
}

Icons.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(iconsStyle)(Icons);
