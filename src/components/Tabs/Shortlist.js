import React from "react";
import shortlistImg from "../../assets/imgs/shortlist.JPG";
import { ProfileCard, BlurSection, ComingSoonInner } from "./style";

const Shortlist = () => {
  return (
    <ProfileCard>
      <div>
        <ComingSoonInner>
          <h1>Coming Soon</h1>
        </ComingSoonInner>
        <BlurSection>
          <img src={shortlistImg} alt="Evaluation" />
        </BlurSection>
      </div>
    </ProfileCard>
  );
};

export default Shortlist;
