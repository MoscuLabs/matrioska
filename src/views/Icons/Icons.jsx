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

import { fetchRepresentatives } from "utils/apiServices.jsx";


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

class Icons extends React.Component {
  constructor(){
    super();
    this.state= {
      'items': [] 
    }
  }

  componentDidMount() {
    fetchRepresentatives().then(res => {
      this.setState({ 'items': res });
    });  
  }

  handleChange = (event, value) => {
  };

  handleChangeIndex = index => {
  };

    render() {
      const { classes } = this.props;
      console.log(this.state.items)
      return (
      <GridContainer>
          {/*this.state.items.map((item,i) => <h4 key={i}>{
              item.position? item.first_name:'' 
            }</h4>)*/}
        {this.state.items.map((item,i) =><GridItem xs={12} sm={12} md={3} key={i}>
          <Card profile >
            <CardAvatar profile>
              <a href="#pablo" onClick={e => e.preventDefault()}>
                <img src={avatar} alt="..." />
              </a>
            </CardAvatar>
            <CardBody profile>
              <h6 className={classes.cardCategory} key={i}>{
                item.position? item.position:'Secretario' 
              }</h6>
              <h4 className={classes.cardTitle}>{item.first_name} {item.last_name}</h4>
              <a className={classes.cardTitle} href={`mailto:${item.email},`}> {item.email} </a>
              <Button color="primary" round>
                Follow
              </Button>
            </CardBody>
          </Card>       
        </GridItem>
        )}
      </GridContainer>
      );
    }
  }


Icons.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(iconsStyle)(Icons);
