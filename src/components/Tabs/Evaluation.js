import React from "react";
import evalImage from "../../assets/imgs/evaluation.JPG";
import { BlurSection, ComingSoonInner, ProfileCard } from "./style";

const Evaluation = ({ data }) => {
  return (
    <ProfileCard>
      <div>
        <ComingSoonInner>
          <h5>Coming Soon</h5>
        </ComingSoonInner>
        <BlurSection>
          <img src={evalImage} alt="Evaluation" />
        </BlurSection>
      </div>
    </ProfileCard>
  );
};

export default Evaluation;
