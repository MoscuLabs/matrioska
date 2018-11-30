import React from "react";
import cx from "classnames";
import PropTypes from "prop-types";
import { Switch, Route, Redirect } from "react-router-dom";
// creates a beautiful scrollbar
import PerfectScrollbar from "perfect-scrollbar";
import "perfect-scrollbar/css/perfect-scrollbar.css";

// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";

// core components
import Header from "components/Header/Header.jsx";
import Footer from "components/Footer/Footer.jsx";
import Sidebar from "components/Sidebar/Sidebar.jsx";

import dashboardRoutes from "routes/dashboard.jsx";
import dashboardRoutesRep from "routes/dashboardRep.jsx";
import Profile from "views/Profile/Profile.jsx";
import Vote from "views/Vote/Vote.jsx";
import CreateProposals from "views/CreateProposals/CreateProposal.jsx";

import appStyle from "assets/jss/material-dashboard-pro-react/layouts/dashboardStyle.jsx";

import ProposalsToVote from "@material-ui/icons/Gavel";
import image from "assets/img/sidebar-2.jpg";
import logo from "assets/img/logo.png";

import { validateAccess, validateRepresentant } from "utils/apiAuth.jsx";

var ps;

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      auth: false,
      routes: dashboardRoutes,
      mobileOpen: false,
      miniActive: false
    };
    this.resizeFunction = this.resizeFunction.bind(this);
  }
  componentDidMount() {
    if (navigator.platform.indexOf("Win") > -1) {
      ps = new PerfectScrollbar(this.refs.mainPanel, {
        suppressScrollX: true,
        suppressScrollY: false
      });
      document.body.style.overflow = "hidden";
    }
    window.addEventListener("resize", this.resizeFunction);
    validateAccess().then(rep => {
      if (rep) {
        this.setState({ auth: rep });
        } else {
        window.location = "/pages/login";
      }
      },
      err => {
        window.location = "/pages/login";
      }
    );
    validateRepresentant().then(rep => {
      if (rep) {
        this.setState({ routes: dashboardRoutesRep });
      }
    });
  }
  componentWillUnmount() {
    if (navigator.platform.indexOf("Win") > -1) {
      ps.destroy();
    }
    window.removeEventListener("resize", this.resizeFunction);
  }
  componentDidUpdate(e) {
    if (e.history.location.pathname !== e.location.pathname) {
      this.refs.mainPanel.scrollTop = 0;
      if (this.state.mobileOpen) {
        this.setState({ mobileOpen: false });
      }
    }
  }
  handleDrawerToggle = () => {
    this.setState({ mobileOpen: !this.state.mobileOpen });
  };
  getRoute() {
    return this.props.location.pathname !== "/maps/full-screen-maps";
  }
  sidebarMinimize() {
    this.setState({ miniActive: !this.state.miniActive });
  }
  resizeFunction() {
    if (window.innerWidth >= 960) {
      this.setState({ mobileOpen: false });
    }
  }
  render() {
    const { classes, ...rest } = this.props;
    const { auth, routes } = this.state;
    const mainPanel =
      classes.mainPanel +
      " " +
      cx({
        [classes.mainPanelSidebarMini]: this.state.miniActive,
        [classes.mainPanelWithPerfectScrollbar]:
          navigator.platform.indexOf("Win") > -1
      });
    const switchRoutes = (
      <Switch>
        <Route path={"/profile"} exact component={Profile} />
        <Route path={"/vote"} exact component={Vote} />
        <Route path={"/vote/proposals"} exact component={ProposalsToVote} />
        <Route path={"/CreateProposal"} exact component={CreateProposals} />
        {routes.map((prop, key) => {
          if (prop.redirect)
            return <Redirect from={prop.path} to={prop.pathTo} key={key} />;
          if (prop.collapse)
            return prop.views.map((prop, key) => {
              return (
                <Route
                  path={prop.path}
                  exact
                  component={prop.component}
                  key={key}
                />
              );
            });
          return (
            <Route path={prop.path} exact component={prop.component} key={key} />
          );
        })}
      </Switch>
    );
    return (
      <div className={classes.wrapper}>
        {auth ? (
          <Sidebar
          routes={routes}
          logoText={"Chapalita Sur"}
          logo={logo}
          image={image}
          handleDrawerToggle={this.handleDrawerToggle}
          open={this.state.mobileOpen}
          color="blue"
          bgColor="black"
          miniActive={this.state.miniActive}
          {...rest}
        />
        ) : (
          <div />
        )}
        <div className={mainPanel} ref={"mainPanel"}>
          {auth ? (
            <div>
              <Header
            sidebarMinimize={this.sidebarMinimize.bind(this)}
            miniActive={this.state.miniActive}
            routes={routes}
            handleDrawerToggle={this.handleDrawerToggle}
            {...rest}
          />
          <div className={classes.content}>
            <div className={classes.container}>{switchRoutes}</div>
          </div>
          <Footer fluid />
            </div>
          ) : (
            <div />
          )}
        </div>
      </div>
    );
  }
}

Dashboard.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(appStyle)(Dashboard);
