import React from "react";
import {
  DashboardCard,
  DashHeader,
  Title,
  BlurSection,
  SpecialIcon,
  InfoIcon,
} from "./style";
import impctNexus from "../../assets/imgs/impctNexus.png";
import impactOverview from "../../assets/imgs/impctOverview.png";

const ImpactScore = () => {
  return (
    <DashboardCard>
      <DashHeader>
        <SpecialIcon>
          <img src={impctNexus} alt="Nexus" width="20px" height="20px" />
        </SpecialIcon>
        <Title>Impact Score</Title>
        <InfoIcon>
          <p style={{ paddingLeft: "5px", color: "#909090" }}>&#9432;</p>
        </InfoIcon>
      </DashHeader>
      <BlurSection>
        <img
          src={impactOverview}
          alt="Impact Score"
          width="1000px"
          height="100px"
        />
      </BlurSection>
    </DashboardCard>
  );
};

export default ImpactScore;
