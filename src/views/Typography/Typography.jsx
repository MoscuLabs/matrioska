import React from "react";
import moment from 'moment'

// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
// core components
import GridItem from "components/Grid/GridItem.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import Table from "components/Table/Table.jsx";
import Card from "components/Card/Card.jsx";
import CardHeader from "components/Card/CardHeader.jsx";
import CardBody from "components/Card/CardBody.jsx";

import { fetchExpenses } from "utils/apiServices.jsx";

const styles = {
  cardCategoryWhite: {
    "&,& a,& a:hover,& a:focus": {
      color: "rgba(255,255,255,.62)",
      margin: "0",
      fontSize: "14px",
      marginTop: "0",
      marginBottom: "0"
    },
    "& a,& a:hover,& a:focus": {
      color: "#FFFFFF"
    }
  },
  cardTitleWhite: {
    color: "#FFFFFF",
    marginTop: "0px",
    minHeight: "auto",
    fontWeight: "300",
    fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
    marginBottom: "3px",
    textDecoration: "none",
    "& small": {
      color: "#777",
      fontSize: "65%",
      fontWeight: "400",
      lineHeight: "1"
    }
  }
};

class Typography extends React.Component {
  constructor(){
    super();
    this.state= {
      'items': [] 
    }
  }
  componentDidMount() {
    fetchExpenses().then(res => {
      this.setState({ 'items': res});
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
        <GridItem xs={12} sm={12} md={12}>
        {/*this.state.items.map((item,i) => <p key={i}>{item.concept}</p>)*/}
          <Card>
            <CardHeader color="primary">
              <h4 className={classes.cardTitleWhite}>Rendición de Cuentas</h4>
              <p className={classes.cardCategoryWhite}>
                Últimos moviemientos del mes
              </p>
            </CardHeader>
            <CardBody>
              <Table 
                tableHeaderColor="primary"
                tableHead={["Responsable", "Concepto", "Beneficiario", "Monto", "Fecha"]}
                tableData={[[this.state.items.map((item,i)=><p key={i} style ={{borderBottom: '1px solid #E0E0E0'}}>{item.neighbor.first_name}</p>),
                             this.state.items.map((item,i)=><p key={i} style ={{borderBottom: '1px solid #E0E0E0'}}>{item.concept}</p>),
                             this.state.items.map((item,i)=><p key={i} style ={{borderBottom: '1px solid #E0E0E0'}}>{item.beneficiary}</p>),
                             this.state.items.map((item,i)=><p key={i} style ={{borderBottom: '1px solid #E0E0E0'}}>$ {item.amount}</p>),
                             this.state.items.map((item,i)=><p key={i} style ={{borderBottom: '1px solid #E0E0E0'}}>{moment(item.issued_date).format('DD/MM/YYYY')}</p>)]
                    //this.state.items.map((item,i)=> `${item.neighbor.first_name}${item.concept}${item.beneficiary}${item.amount}${item.issued_date}${i}`)
                ]}
                  /*this.state.items.map((item,i) => <p key={i}>{item.concept}</p>)*/
                  /*this.state.items.map((item,i)=>`[${item.concept},${item.beneficiary},${item.neighbor.first_name},${item.amount},${i}]`),*/ 
                
              />
            </CardBody>
          </Card>
        </GridItem>
      </GridContainer>
    );
  }
}


export default withStyles(styles)(Typography);
