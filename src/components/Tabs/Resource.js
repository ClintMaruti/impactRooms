import React from "react";
import { BlurSection, ComingSoonInner, ProfileCard } from "./style";

const Resources = ({ image }) => {
  return (
    <ProfileCard>
      <div>
        <ComingSoonInner>
          <h5>Coming Soon</h5>
        </ComingSoonInner>
        <BlurSection>
          <img
            src="https://boring-hoover-0cce7e.netlify.app/static/media/resource.36fb64dc.JPG"
            alt="Evaluation"
          />
        </BlurSection>
      </div>
    </ProfileCard>
  );
};

export default Resources;
