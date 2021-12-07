import React from "react";
import evalImage from "../../assets/imgs/evaluation.JPG";
import { BlurSection, ProfileCard } from "./style";

const Evaluation = ({ data }) => {
  return (
    <ProfileCard>
      <BlurSection>
        <img src={evalImage} alt="Evaluation" />
      </BlurSection>
    </ProfileCard>
  );
};

export default Evaluation;
