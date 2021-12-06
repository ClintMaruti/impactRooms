import React from "react";
import resources from "../../assets/imgs/resource.JPG";
import { BlurSection, ProfileCard } from "./style";

const Resources = () => {
  return (
    <ProfileCard>
      <BlurSection>
        <img src={resources} alt="Evaluation" />
      </BlurSection>
    </ProfileCard>
  );
};

export default Resources;
