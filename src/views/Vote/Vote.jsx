import React from "react";

// core components
import Wizard from "components/Wizard/Wizard.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";

import Step1 from "./WizardSteps/Step1.jsx";
import Step2 from "./WizardSteps/Step2.jsx";
import Step3 from "./WizardSteps/Step3.jsx";

class Vote extends React.Component {
  render() {
    return (
      <GridContainer justify="center">
        <GridItem xs={12} sm={8}>
          <Wizard
            validate
            steps={[
              {
                stepName: "Categoría",
                stepComponent: Step1,
                stepId: "category"
              },
              {
                stepName: "Propuestas",
                stepComponent: Step2,
                stepId: "address"
              },
              { stepName: "Decisión", stepComponent: Step3, stepId: "about" }
            ]}
            title="Vota"
            subtitle="Participa en tu comunidad votando por alguna propuesta de tus vecinos"
          />
        </GridItem>
      </GridContainer>
    );
  }
}

export default Vote;
