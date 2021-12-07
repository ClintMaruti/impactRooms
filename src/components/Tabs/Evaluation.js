import React from "react";
import evalImage from "../../assets/imgs/evaluation.JPG";
import { BlurSection, ComingSoonInner, ProfileCard } from "./style";

const Evaluation = ({ data }) => {
  return (
    <ProfileCard>
      <div>
        <ComingSoonInner>
          <h1>Coming Soon</h1>
        </ComingSoonInner>
        <BlurSection>
          <img src={evalImage} alt="Evaluation" />
        </BlurSection>
      </div>
    </ProfileCard>
  );
};

export default Evaluation;
