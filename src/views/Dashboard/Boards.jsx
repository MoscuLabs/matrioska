import React from "react";
import PropTypes from "prop-types";

// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";

// @material-ui/icons
import EvStation from "@material-ui/icons/EvStation";
import Info from "@material-ui/icons/Info";
import Security from "@material-ui/icons/Security";
import Gavel from "@material-ui/icons/Gavel";

// core components
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import Card from "components/Card/Card.jsx";
import CardHeader from "components/Card/CardHeader.jsx";
import CardBody from "components/Card/CardBody.jsx";
import NavPills from "components/NavPills/NavPills.jsx";

import dashboardStyle from "assets/jss/material-dashboard-pro-react/views/dashboardStyle";
import { Timeline } from 'react-twitter-widgets'
import CardBodyTweet from "../../components/Card/CardBodyTweet";
import HalfCard from "components/Card/HalfCard.jsx";
import CardWBackground from "components/Card/CardWBackground.jsx";

class Boards extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <div>
        <GridContainer justify="center">
          <GridItem xs={12} sm={12} md={8}>
            <NavPills
              color="warning"
              alignCenter
              tabs={[
                {
                  tabButton: "Avisos Generales",
                  tabIcon: Info,
                  tabContent: (
                    <Card>
                      <CardHeader>
                        <h4 className={classes.cardTitle}>
                          Últimas noticias en Zapopan
                        </h4>
                        <p className={classes.cardCategory}>
                          (...)
                        </p>
                      </CardHeader>
                    <CardBodyTweet>
                        <Timeline
                                dataSource={{
                                sourceType: 'profile',
                                screenName: 'Trafico_ZMG'
                                }}
                                options={{
                                username: 'Trafico_ZMG',
                                height: '400'
                                }}
                                onLoad={() => console.log('Timeline is loaded!')}
                            />
                    </CardBodyTweet>

                    </Card>
                  )
                },
                {
                  tabButton: "Policía",
                  tabIcon: Security,
                  tabContent: (
                    <Card>
                      <CardHeader>
                        {/*}
                        <h4 className={classes.cardTitle}>
                          Location of the product
                        </h4>
                        <p className={classes.cardCategory}>
                            Emergencias: Llama al <strong>911</strong>
                           </p>*/}
                      </CardHeader>
                      <CardBodyTweet style={{background: "#ffc55a",borderRadius: ".5em", boxShadow: "0 3px 5px 0 rgba(0, 0, 0, 0.14)", marginBottom:"25px"}}>
                        <p className="contactInfo">Emergencias: Llama al <strong>911</strong></p>
                        <Timeline
                                dataSource={{
                                sourceType: 'profile',
                                screenName: 'PoliciaZapopan'
                                }}
                                options={{
                                username: 'PoliciaZapopan',
                                height: '400'
                                }}
                                onLoad={() => console.log('Timeline is loaded!')}
                            />
                      </CardBodyTweet>
                    </Card>
                  )
                },
                {
                  tabButton: "Servicios Públicos",
                  tabIcon: EvStation,
                  tabContent: (
                    <CardWBackground>
                      <CardHeader>
                        <h4 className={classes.cardTitle}>
                          Legal info of the product
                        </h4>
                        <p className={classes.cardCategory}>
                          More information here
                        </p>
                      </CardHeader>
                      <div style={{display:"flex", width: "95%",
    margin: "auto"}}>
                      <CardBodyTweet style={{background: "#a6d2ff",borderRadius: ".5em", boxShadow: "0 3px 5px 0 rgba(0, 0, 0, 0.14)"}}>
                        <p className="contactInfo">Siapa: llama al <strong>3668-2482</strong></p>
                        <Timeline
                            dataSource={{
                            sourceType: 'profile',
                            screenName: 'siapagdl'
                            }}
                            options={{
                            username: 'siapagdl',
                            height: '400'
                            }}
                            onLoad={() => console.log('Timeline is loaded!')}
                            />
                        </CardBodyTweet>
                        <CardBodyTweet style={{background: "#b1d6a1",borderRadius: ".5em", boxShadow: "0 3px 5px 0 rgba(0, 0, 0, 0.14)"}}>
                        <p className="contactInfo">CFE: llama al <strong>071</strong></p>
                        <Timeline
                            dataSource={{
                            sourceType: 'profile',
                            screenName: 'CFEmx'
                            }}
                            options={{
                            username: 'CFEmx',
                            height: '400'
                            }}
                            onLoad={() => console.log('Timeline is loaded!')}
                            />
                      </CardBodyTweet>
                      </div>
                    </CardWBackground>
                  )
                },
                {
                  tabButton: "Gobierno",
                  tabIcon: Gavel,
                  tabContent: (
                    <Card>
                      <CardHeader>
                        <h4 className={classes.cardTitle}>Help center</h4>
                        <p className={classes.cardCategory}>
                          More information here
                        </p>
                      </CardHeader>
                      <CardBodyTweet>
                        <Timeline
                                dataSource={{
                                sourceType: 'profile',
                                screenName: 'PabloLemusN'
                                }}
                                options={{
                                username: 'PabloLemusN',
                                height: '400'
                                }}
                                onLoad={() => console.log('Timeline is loaded!')}
                            />
                      </CardBodyTweet>
                    </Card>
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

Boards.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(dashboardStyle)(Boards);
