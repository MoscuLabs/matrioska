import React from "react";
import PropTypes from "prop-types";
// react plugin for creating charts
import ChartistGraph from "react-chartist";
// @material-ui/core
import withStyles from "@material-ui/core/styles/withStyles";
import Icon from "@material-ui/core/Icon";
// @material-ui/icons
import Store from "@material-ui/icons/Store";
import Warning from "@material-ui/icons/Warning";
import DateRange from "@material-ui/icons/DateRange";
import LocalOffer from "@material-ui/icons/LocalOffer";
import Update from "@material-ui/icons/Update";
import ArrowUpward from "@material-ui/icons/ArrowUpward";
import AccessTime from "@material-ui/icons/AccessTime";
import Accessibility from "@material-ui/icons/Accessibility";
import BugReport from "@material-ui/icons/BugReport";
import Code from "@material-ui/icons/Code";
import Cloud from "@material-ui/icons/Cloud";
// core components
import GridItem from "components/Grid/GridItem.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import Table from "components/Table/Table.jsx";
import Tasks from "components/Tasks/Tasks.jsx";
import CustomTabs from "components/CustomTabs/CustomTabs.jsx";
import Danger from "components/Typography/Danger.jsx";
import Card from "components/Card/Card.jsx";
import CardHeader from "components/Card/CardHeader.jsx";
import CardIcon from "components/Card/CardIcon.jsx";
import CardBody from "components/Card/CardBody.jsx";
import CardFooter from "components/Card/CardFooter.jsx";
import { fetchNeighbors } from "utils/apiServices.jsx";
import { fetchWeather } from "utils/apiWeather.jsx";
import moment from "moment";

import { bugs, website, server } from "variables/general.jsx";

import {
  dailySalesChart,
  emailsSubscriptionChart,
  completedTasksChart
} from "variables/charts.jsx";

import dashboardStyle from "assets/jss/material-dashboard-react/views/dashboardStyle.jsx";

class Dashboard extends React.Component {
  state = {
    value: 0,
    weatherInfo: {}
  };

  componentDidMount() {
    let lista = fetchNeighbors();
    fetchWeather()
    .then(rep => {
      this.setState({ weatherInfo: rep });
    })
  }

  handleChange = (event, value) => {
    this.setState({ value });
  };

  handleChangeIndex = index => {
    this.setState({ value: index });
  };
  render() {
    const { classes } = this.props;
    const { weatherInfo } = this.state;
    let date = moment().format('LLLL');
    console.log(weatherInfo);
    return (
      <div>
        <GridContainer>
          <GridItem xs={12} sm={12} md={6}>
            <Card>
              <CardHeader color="info" stats icon>
                <CardIcon color="info">
                  <img src={weatherInfo.imgUrl} alt="weather icon"></img>
                </CardIcon>
                <p className={classes.cardCategory}>{weatherInfo.name}</p>
                <h3 className={classes.cardTitle}>
                  {weatherInfo.main ? (
                    <div>{weatherInfo.main.temp}ºC</div>
                  ):(
                    <div></div>
                  )}
                </h3>
              </CardHeader>
              <CardBody>
                {weatherInfo.clouds ? (
                  <div><h4 className={classes.cardBody}>Nubes: {weatherInfo.clouds.all}%</h4></div>
                ):(
                  <div></div>
                )}
                {weatherInfo.main ? (
                  <div><h4 className={classes.cardBody}>Humedad: {weatherInfo.main.humidity}%</h4></div>
                ):(
                  <div></div>
                )}
              </CardBody>
              <CardFooter stats>
                <div className={classes.stats}>
                  {date}
                </div>
              </CardFooter>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={12} md={6}>
          <a href="https://www.animalpolitico.com/2018/10/caravana-migrante-cdmx-transporte/" target="_blank">
            <Card style ={{backgroundImage: 'url("news.png"',backgroundSize: 'contain',backgroundRepeat: 'no-repeat', minHeight: '143px'}}>
              {/*<CardHeader color="success" stats icon>
                <CardIcon color="success">
                  <Store />
                </CardIcon>
                <p className={classes.cardCategory}>Revenue</p>
                <h3 className={classes.cardTitle}>$34,245</h3>
              </CardHeader>
              <CardFooter stats>
                <div className={classes.stats}>
                  <DateRange />
                  Last 24 Hours
                </div>
             </CardFooter>*/}
            </Card></a>
          </GridItem>
        </GridContainer>
        <GridContainer>
          <GridItem xs={12} sm={12} md={6}>
            <Card chart>
              <CardHeader color="warning">
                <ChartistGraph
                  className="ct-chart"
                  data={emailsSubscriptionChart.data}
                  type="Bar"
                  options={emailsSubscriptionChart.options}
                  responsiveOptions={emailsSubscriptionChart.responsiveOptions}
                  listener={emailsSubscriptionChart.animation}
                />
              </CardHeader>
              <CardBody>
                <h4 className={classes.cardTitle}>Participacion de vecinos en propuestas</h4>
                <p className={classes.cardCategory}>
                    Cantidad total de vecinos que participaron en encuestas mensualmente.
                </p>
              </CardBody>
              <CardFooter chart>
                <div className={classes.stats}>
                  <AccessTime /> Actualizado hace 10 min.
                </div>
              </CardFooter>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={12} md={6}>
            <Card chart>
              <CardHeader color="danger">
                <ChartistGraph
                  className="ct-chart"
                  data={completedTasksChart.data}
                  type="Line"
                  options={completedTasksChart.options}
                  listener={completedTasksChart.animation}
                />
              </CardHeader>
              <CardBody>
                <h4 className={classes.cardTitle}>Progreso de Propuestas</h4>
                <p className={classes.cardCategory}>
                  Porcentaje de realización de las propuestas.
                </p>
              </CardBody>
              <CardFooter chart>
                <div className={classes.stats}>
                  <AccessTime /> Actualizado hace 10 min.
                </div>
              </CardFooter>
            </Card>
          </GridItem>
        </GridContainer>

        {/*
        <GridContainer>
          <GridItem xs={12} sm={12} md={6}>
            <Card chart>
              <CardHeader color="warning">
                <ChartistGraph
                  className="ct-chart"
                  data={emailsSubscriptionChart.data}
                  type="Bar"
                  options={emailsSubscriptionChart.options}
                  responsiveOptions={emailsSubscriptionChart.responsiveOptions}
                  listener={emailsSubscriptionChart.animation}
                />
              </CardHeader>
              <CardBody>
                <h4 className={classes.cardTitle}>Email Subscriptions</h4>
                <p className={classes.cardCategory}>
                  Last Campaign Performance
                </p>
              </CardBody>
              <CardFooter chart>
                <div className={classes.stats}>
                  <AccessTime /> campaign sent 2 days ago
                </div>
              </CardFooter>
            </Card>
          </GridItem>
          <GridItem xs={12} sm={12} md={6}>
            <Card chart>
              <CardHeader color="danger">
                <ChartistGraph
                  className="ct-chart"
                  data={completedTasksChart.data}
                  type="Line"
                  options={completedTasksChart.options}
                  listener={completedTasksChart.animation}
                />
              </CardHeader>
              <CardBody>
                <h4 className={classes.cardTitle}>Completed Tasks</h4>
                <p className={classes.cardCategory}>
                  Last Campaign Performance
                </p>
              </CardBody>
              <CardFooter chart>
                <div className={classes.stats}>
                  <AccessTime /> campaign sent 2 days ago
                </div>
              </CardFooter>
            </Card>
          </GridItem>
        </GridContainer>*/}
      </div>
    );
  }
}

Dashboard.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(dashboardStyle)(Dashboard);
