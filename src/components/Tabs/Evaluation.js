import React from "react";
import { BlurSection, ComingSoonInner, ProfileCard } from "./style";

const Evaluation = ({ image }) => {
  return (
    <ProfileCard>
      <div>
        <ComingSoonInner>
          <h5>Coming Soon</h5>
        </ComingSoonInner>
        <BlurSection>
          <img
            src="https://boring-hoover-0cce7e.netlify.app/static/media/evaluation.e525eafe.JPG"
            alt="Evaluation"
          />
        </BlurSection>
      </div>
    </ProfileCard>
  );
};

export default Evaluation;
