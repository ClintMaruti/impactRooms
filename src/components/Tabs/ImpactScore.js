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

import { Tooltip } from "@material-ui/core";

const popUp = {
  impctScr:
    "Assess, forecast and improve your company’s impact with our partner Impact Nexus.",
};

const ImpactScore = ({ images }) => {
  return (
    <DashboardCard>
      <DashHeader>
        <SpecialIcon>
          <img src={images[0]} alt="Nexus" width="20px" height="20px" />
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
            src="https://boring-hoover-0cce7e.netlify.app/static/media/impctScr2.8f10b462.png"
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
