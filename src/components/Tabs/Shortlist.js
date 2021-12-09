import React from "react";
import { ProfileCard, BlurSection, ComingSoonInner } from "./style";

const Shortlist = ({ image }) => {
  return (
    <ProfileCard>
      <div>
        <ComingSoonInner>
          <h5>Coming Soon</h5>
        </ComingSoonInner>
        <BlurSection>
          <img
            src="https://boring-hoover-0cce7e.netlify.app/static/media/shortlist.5206afe8.JPG"
            alt="Evaluation"
          />
        </BlurSection>
      </div>
    </ProfileCard>
  );
};

export default Shortlist;
