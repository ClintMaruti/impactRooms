import React from "react";
import {
  DashboardCard,
  DashHeader,
  Title,
  BlurSection,
  SpecialIcon,
  InfoIcon,
  ComingSoon,
} from "./style";
import Innovesta from "../../assets/imgs/Innovesta.png";

import { Tooltip } from "@material-ui/core";

const popUp = {
  mkt_news:
    "Get relevant and real-time updates on your market with our partner Innovesta.",
};

const MarketNews = ({ images }) => {
  return (
    <DashboardCard>
      <DashHeader>
        <SpecialIcon>
          <img src={Innovesta} alt="Innovesta" width="20px" height="20px" />
        </SpecialIcon>
        <Title>Market News & Sentiment</Title>
        <Tooltip title={popUp.mkt_news} placement="top">
          <InfoIcon>
            <p style={{ paddingLeft: "5px", color: "#909090" }}>&#9432;</p>
          </InfoIcon>
        </Tooltip>
      </DashHeader>
      <div>
        <ComingSoon>
          <h5>Coming Soon</h5>
        </ComingSoon>
        <BlurSection>
          <img
            src="https://boring-hoover-0cce7e.netlify.app/static/media/news.fe638677.png"
            alt="news"
            width="500px"
            height="90px"
          />
          <img
            src="https://boring-hoover-0cce7e.netlify.app/static/media/news1.220f9908.jpeg"
            alt="news"
            width="500px"
            height="80px"
          />
        </BlurSection>
      </div>
    </DashboardCard>
  );
};

export default MarketNews;
