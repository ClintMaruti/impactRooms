import React from "react";
import {
  DashboardCard,
  DashHeader,
  Title,
  BlurSection,
  SpecialIcon,
  InfoIcon,
  ComingSoon,
} from "./style";
import impctNexus from "../../assets/imgs/impctNexus.png";
import impctScr2 from "../../assets/imgs/impctScr2.png";
import { Tooltip } from "@material-ui/core";

const popUp = {
  impctScr:
    "Assess, forecast and improve your company’s impact with our partner Impact Nexus.",
};

const ImpactScore = () => {
  return (
    <DashboardCard>
      <DashHeader>
        <SpecialIcon>
          <img src={impctNexus} alt="Nexus" width="20px" height="20px" />
        </SpecialIcon>
        <Title>Impact Overview</Title>
        <Tooltip title={popUp.impctScr} placement="top">
          <InfoIcon>
            <p style={{ paddingLeft: "5px", color: "#909090" }}>&#9432;</p>
          </InfoIcon>
        </Tooltip>
      </DashHeader>
      <div>
        <ComingSoon>
          <h5>Coming Soon</h5>
        </ComingSoon>
        <BlurSection>
          <img
            src={impctScr2}
            alt="Impact Score"
            width="1000px"
            height="100px"
          />
        </BlurSection>
      </div>
    </DashboardCard>
  );
};

export default ImpactScore;
