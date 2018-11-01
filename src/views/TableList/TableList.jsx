import React from "react";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
// core components
import Card from "components/Card/Card.jsx";
import CardHeader from "components/Card/CardHeader.jsx";
import CardBody from "components/Card/CardBody.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import Button from "components/CustomButtons/Button.jsx";


import { fetchProposals } from "utils/apiServices.jsx";


const style = {
  typo: {
    paddingLeft: "25%",
    marginBottom: "40px",
    position: "relative"
  },
  note: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    bottom: "10px",
    color: "#c0c1c2",
    display: "block",
    fontWeight: "400",
    fontSize: "13px",
    lineHeight: "13px",
    left: "0",
    marginLeft: "20px",
    position: "absolute",
    width: "260px"
  },
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

class TableList extends React.Component {
  constructor(){
    super();
    this.state= {
      'items': [] 
    }
  }
  componentDidMount() {
    fetchProposals().then(res => {
      this.setState({ 'items': res });
    });  
  }

  handleChange = (event, value) => {
  };

  handleChangeIndex = index => {
  };
    render() {


      const { classes } = this.props;


      return (
      <GridContainer>
        <CardHeader color="primary" style ={{width: '100%'}}>
            <h4 className={classes.cardTitleWhite}>Sección de Propuestas</h4>
            <p className={classes.cardCategoryWhite} style ={{fontWeight: 'bold'}}>
            Recuerda que para poder generar una propuesta deberás haber votado por una ya existente.
            </p>
        </CardHeader>
        <GridItem xs={12} sm={12} md={6} >
            <Card>
              <h4 style ={{fontWeight: 'bold', textAlign: 'center'}}>Aprobadas</h4>
                <center>
                  {this.state.items.map((item,i) => {
                      return (
                      
                      item.status=='3'?<p key={i}> {item.name}</p>:""
                      
                    )
                  })}
                </center>
 
            </Card>       
          </GridItem>

          <GridItem xs={12} sm={12} md={6}>
            <Card>
              <h4 style ={{fontWeight: 'bold', textAlign: 'center'}}>En Gestión </h4>
            
              <center>
                  {this.state.items.map((item,i) => {
                      return (
                      
                      item.status=='2'?<p key={i}> {item.name}</p>:""
                      
                    )
                  })}
                </center>
              
            </Card>       
          </GridItem>
          <Button color="primary" round style={{marginLeft: 'auto', marginRight: 'auto', display: 'block',fontWeight: 'bold'}}>¡Votar!</Button>        
        </GridContainer>
    );
  }
}

export default withStyles(style)(TableList);

