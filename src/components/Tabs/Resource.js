import React from "react";
import resources from "../../assets/imgs/resource.JPG";
import { BlurSection, ComingSoonInner, ProfileCard } from "./style";

const Resources = () => {
  return (
    <ProfileCard>
      <div>
        <ComingSoonInner>
          <h1>Coming Soon</h1>
        </ComingSoonInner>
        <BlurSection>
          <img src={resources} alt="Evaluation" />
        </BlurSection>
      </div>
    </ProfileCard>
  );
};

export default Resources;
