import React from "react";
import PropTypes from "prop-types";

// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import InputLabel from "@material-ui/core/InputLabel";

// @material-ui/icons
import PermIdentity from "@material-ui/icons/PermIdentity";

// core components
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import Button from "components/CustomButtons/Button.jsx";
import CustomInput from "components/CustomInput/CustomInput.jsx";
import Clearfix from "components/Clearfix/Clearfix.jsx";
import Card from "components/Card/Card.jsx";
import CardBody from "components/Card/CardBody.jsx";
import CardHeader from "components/Card/CardHeader.jsx";
import CardIcon from "components/Card/CardIcon.jsx";
import CardAvatar from "components/Card/CardAvatar.jsx";
import PictureUpload from "components/CustomUpload/PictureUpload.jsx";

import userProfileStyles from "assets/jss/material-dashboard-pro-react/views/userProfileStyles.jsx";

import avatar from "assets/img/faces/marc.jpg";

import { patchNeighbor } from "utils/apiServices.jsx";

class Profile extends React.Component {
  
  

  constructor(props) { 
    super(props);
    this.state = {user_name: '',
                  email: '',
                  name: '',
                  last_name: '',
                  about: ''};

    this.handleSubmit = this.handleSubmit.bind(this);
  }
  handleSubmit = (event, value) => {
    let convecinos = JSON.parse(localStorage.getItem("convecinos"));

    let data = {
      "first_name": this.state.name
    };
    
    console.log(convecinos.userId+" "+ this.state.name);
    patchNeighbor(convecinos.userId,data);
  };

  change = (event, stateValue) => {
    if(stateValue == 'user_name'){
      this.setState({[stateValue]:event.target.value});
    }
    else if(stateValue == 'email'){
      this.setState({[stateValue]:event.target.value});
    }
    else if(stateValue == 'name'){
      this.setState({[stateValue]:event.target.value});
    }
    else if(stateValue == 'last_name'){
      this.setState({[stateValue]:event.target.value});
    }
    else if(stateValue == 'about'){
      this.setState({[stateValue]:event.target.value});
    }
  };


  render() {
    const { classes } = this.props;
    const { user_name } = this.state;
    console.log(user_name);
    
    return (
      <div>
        <form>
          <GridContainer>
            <GridItem xs={12} sm={12} md={8}>
              <Card>
                <CardHeader color="rose" icon>
                  <CardIcon color="rose">
                    <PermIdentity />
                  </CardIcon>
                  <h4 className={classes.cardIconTitle}>
                    Tu perfil - <small>Completa o Edita tu perfil.</small>
                  </h4>
                </CardHeader>
                <CardBody>
                  <GridContainer>
                    <GridItem xs={12} sm={4}>
                      <PictureUpload />
                    </GridItem>
                    <GridItem xs={12} sm={12} md={4}>
                      <CustomInput
                        labelText="Nombre de usuario"
                        id="username"
                        formControlProps={{
                          fullWidth: true
                        }}
                        inputProps={{
                          onChange: event => this.change(event, "user_name")
                        }}
                      />
                    </GridItem>
                    <GridItem xs={12} sm={12} md={4}>
                      <CustomInput
                        labelText="Correo electrónico"
                        id="email-address"
                        formControlProps={{
                          fullWidth: true
                        }}
                        inputProps={{
                          onChange: event => this.change(event, "email")
                        }}
                      />
                    </GridItem>
                  </GridContainer>
                  <GridContainer>
                    <GridItem xs={12} sm={12} md={6}>
                      <CustomInput
                        labelText="Nombre"
                        id="first-name"
                        formControlProps={{
                          fullWidth: true
                        }}
                        inputProps={{
                          onChange: event => this.change(event, "name")
                        }}
                        />
                    </GridItem>
                    <GridItem xs={12} sm={12} md={6}>
                      <CustomInput
                        labelText="Apellidos"
                        id="last-name"
                        formControlProps={{
                          fullWidth: true
                        }}
                        inputProps={{
                          onChange: event => this.change(event, "last_name")
                        }}
                      />
                    </GridItem>
                  </GridContainer>
                  <GridContainer>
                    <GridItem xs={12} sm={12} md={12}>
                      <InputLabel style={{ color: "#AAAAAA" }}>Sobre mí</InputLabel>
                      <CustomInput
                        labelText="Escribe un texto corto para que la gente sepa quién eres..."
                        id="about-me"
                        formControlProps={{
                          fullWidth: true
                        }}
                        inputProps={{
                          multiline: true,
                          rows: 5
                        }}
                        inputProps={{
                          onChange: event => this.change(event, "about")
                        }}
                      />
                    </GridItem>
                  </GridContainer>
                  <Button color="rose" className={classes.updateProfileButton} onClick={this.handleSubmit}>
                    Actualizar Perfil
                  </Button>
                  <Clearfix />
                </CardBody>
              </Card>
            </GridItem>
            <GridItem xs={12} sm={12} md={4}>
              <Card profile>
                <CardAvatar profile>

                  <a href="#pablo" onClick={e => e.preventDefault()}>
                    <img src={avatar} alt="..." />
                  </a>
                </CardAvatar>
                <CardBody profile>
                  <h6 className={classes.cardCategory}>CEO / CO-FOUNDER</h6>
                  <h4 className={classes.cardTitle}>Alec Thompson</h4>
                  <p className={classes.description}>
                    Don't be scared of the truth because we need to restart the
                    human foundation in truth And I love you like Kanye loves Kanye
                    I love Rick Owens’ bed design but the back is...
                  </p>
                </CardBody>
              </Card>
            </GridItem>
          </GridContainer>
        </form>
      </div>
    );
  }
}

Profile.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(userProfileStyles)(Profile);