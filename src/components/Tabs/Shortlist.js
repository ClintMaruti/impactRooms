import React from "react";
import shortlistImg from "../../assets/imgs/shortlist.JPG";
import { ProfileCard, BlurSection } from "./style";

const Shortlist = () => {
  return (
    <ProfileCard>
      <BlurSection>
        <img src={shortlistImg} alt="Evaluation" />
      </BlurSection>
    </ProfileCard>
  );
};

export default Shortlist;
