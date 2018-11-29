import React from "react";
import PropTypes from "prop-types";

// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import dashboardStyle from "assets/jss/material-dashboard-pro-react/views/dashboardStyle";
import PictureUpload from "components/CustomUpload/FileUpload.jsx";

// @material-ui/icons
import Announcement from "@material-ui/icons/Announcement";
import AssignmentInd from "@material-ui/icons/AssignmentInd";
import NoteAdd from "@material-ui/icons/NoteAdd";
import Add from "@material-ui/icons/Add";
import FormatListBulleted from "@material-ui/icons/FormatListBulleted";


// core components
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import Card from "components/Card/Card.jsx";
import CardHeader from "components/Card/CardHeader.jsx";
import NavPills from "components/NavPills/NavPills.jsx";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";


import CardWBackground from "components/Card/CardWBackground.jsx";
import CustomInput from "components/CustomInput/CustomInput.jsx";
import Button from "components/CustomButtons/Button.jsx";
import Table from "components/Table/Table.jsx";


import { fetchAllProposals } from "utils/apiServices.jsx";
import { fetchNeighbors } from "utils/apiServices.jsx";



class Administration extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            proposals: [],
            neighbors: [],
            Responsable: "",
            Concepto: "",
            Beneficiario: "",
            Monto: "",
            //Fecha:
            Aviso: "",
            startDate: new Date()
            
          };
        this.SubmitBoton = this.SubmitBoton.bind(this);
        this.handleChange = this.handleChange.bind(this);
    
    };

      componentDidMount() {
        fetchAllProposals().then(rep => {
          this.setState({ proposals: rep });
        });
        fetchNeighbors().then(rep => {
            this.setState({ neighbors: rep });
          });

      }

    Change(event, stateName){
        if(stateName=="Responsable"){
            this.setState({ [stateName]: event.target.value });        
        }
        if(stateName=="Concepto"){
            this.setState({ [stateName]: event.target.value });        
        }
        if(stateName=="Beneficiario"){
            this.setState({ [stateName]: event.target.value });        
        }
        if(stateName=="Monto"){
            this.setState({ [stateName]: event.target.value });        
        }
        //Fecha
        if(stateName=="Aviso"){
            this.setState({ [stateName]: event.target.value });        
        }
    }

    handleChange(date) {
        this.setState({
          startDate: date
        });
      }

    SubmitBoton(){
        console.log(this.state.Responsable)
        console.log(this.state.Concepto)
        console.log(this.state.Beneficiario)
        console.log(this.state.Monto)
        console.log(this.state.Aviso)
        console.log(this.state.startDate)

    }

    render() {

    const { classes } = this.props;
    const { proposals } = this.state;
    const { neighbors } = this.state;

    return (
      <div>
        <GridContainer justify="center">
          <GridItem xs={12} sm={12} md={8}>
            <NavPills
              color="success"
              alignCenter
              tabs={[
                {
                  tabButton: "Subir Avisos Generales",
                  tabIcon: Announcement,
                  tabContent: (
                    <Card>
                      <CardHeader>
                        <h4 className={classes.cardTitle}>
                          Comunicación
                        </h4>
                        <GridContainer>
                            <GridItem xs={12} sm={12} md={12}>
                            <CustomInput
                                inputProps={{
                                    onChange: event => this.Change(event, "Aviso"),
                                    multiline: true,
                                    rows: 5
                                }}
                                labelText="Aquí escribe tu aviso."
                                id="Aviso"
                                formControlProps={{
                                fullWidth: true
                                }}
                            />
                            </GridItem>
                        </GridContainer>
                        <center>
                            <Button onClick={this.SubmitBoton} color="success" size="md" className={classes.marginRight}>
                                Publicar
                            </Button>
                        </center>
                      </CardHeader>

                    </Card>
                  )
                },
                {
                  tabButton: "Lista de Usuarios",
                  tabIcon: AssignmentInd,
                  tabContent: (
                    <Card>
                      <CardHeader>
                        <h4 className={classes.cardTitle}>
                          Usuarios activos en la comunidad
                        </h4>
                        <Table 
                                hover
                                tableHeaderColor="warning"
                                tableHead={["Usuario"]}
                                tableData={neighbors}
                        />
                      </CardHeader>
                    </Card>
                  )
                },
                {
                  tabButton: "Subir Reglamento",
                  tabIcon: NoteAdd,
                  tabContent: (
                    <CardWBackground>
                      <CardHeader>
                        <h4 className={classes.cardTitle}>
                          Reglas de convivencia de los convecinos
                        </h4>
                        <PictureUpload style="padding: 10px"/>
                      </CardHeader>
                      <center>
                            <Button color="success" size="md" className={classes.marginRight}>
                                Subir
                            </Button>
                        </center>
                    </CardWBackground>
                  )
                },
                {
                  tabButton: "Añadir Movimiento",
                  tabIcon: Add,
                  tabContent: (
                    <Card>
                      <CardHeader>
                        <h4 className={classes.cardTitle}>Transparencia</h4>
                        <p className={classes.cardCategory}>
                        <GridContainer>
                            <GridItem xs={12} sm={12} md={11}>
                                <CustomInput
                                    inputProps={{
                                        onChange: event => this.Change(event, "Responsable"),
                                      }}
                                    labelText="Responsable"
                                    id="username"
                                    formControlProps={{
                                    fullWidth: true
                                    }}
                                />
                            </GridItem>
                        </GridContainer>
                        <GridContainer>
                            <GridItem xs={12} sm={12} md={11}>
                                <CustomInput
                                    inputProps={{
                                        onChange: event => this.Change(event, "Concepto"),
                                    }}
                                    labelText="Concepto"
                                    id="username"
                                    formControlProps={{
                                    fullWidth: true
                                    }}
                                />
                            </GridItem>
                        </GridContainer>
                        <GridContainer>
                            <GridItem xs={12} sm={12} md={11}>
                                <CustomInput
                                    inputProps={{
                                        onChange: event => this.Change(event, "Beneficiario"),
                                    }}
                                    labelText="Beneficiario"
                                    id="username"
                                    formControlProps={{
                                    fullWidth: true
                                    }}
                                />
                            </GridItem>
                        </GridContainer>
                        <GridContainer>
                            <GridItem xs={12} sm={12} md={5}>
                                <CustomInput
                                    inputProps={{
                                        onChange: event => this.Change(event, "Monto"),
                                    }}
                                    labelText="Monto"
                                    id="username"
                                    formControlProps={{
                                    fullWidth: true
                                    }}
                                />
                            </GridItem>
                            <GridItem xs={12} sm={12} md={6}>
                            <div style={{paddingTop: "40px", border: "none" }}>
                            <DatePicker
                                selected={this.state.startDate}
                                onChange={this.handleChange}
                            />
                            </div>
                            </GridItem>
                        </GridContainer>
                        </p>
                        <center>
                            <Button onClick={this.SubmitBoton} color="success" size="md" className={classes.marginRight}>
                                Añadir
                            </Button>
                        </center>
                      </CardHeader>
                    </Card>
                  )
                },
                {
                    tabButton: "Lista de Propuestas",
                    tabIcon: FormatListBulleted,
                    tabContent: (
                        <CardWBackground>
                        <CardHeader>
                            <h4 className={classes.cardTitle}>
                                Propuestas
                            </h4>
                            <Table 
                                hover
                                tableHeaderColor="warning"
                                tableHead={["Nombre", "Categoría", "Autor", "Votos", "Estatus"]}
                                tableData={proposals}
                            />
                        </CardHeader>
                        <div style={{display:"flex", width: "95%",margin: "auto"}}>

                        </div>
                      </CardWBackground>
                    )
                  }
              ]}
            />
          </GridItem>
        </GridContainer>
      </div>
    );

  }
}

Administration.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(dashboardStyle)(Administration);
