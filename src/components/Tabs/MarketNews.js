import React from "react";
import {
  DashboardCard,
  DashHeader,
  Title,
  BlurSection,
  SpecialIcon,
  InfoIcon,
} from "./style";
import Innovesta from "../../assets/imgs/Innovesta.png";
import news from "../../assets/imgs/news.png";
import news1 from "../../assets/imgs/news1.jpeg";

const MarketNews = () => {
  return (
    <DashboardCard>
      <DashHeader>
        <SpecialIcon>
          <img src={Innovesta} alt="Innovesta" width="20px" height="20px" />
        </SpecialIcon>
        <Title>Market News</Title>
        <InfoIcon>
          <p style={{ paddingLeft: "5px", color: "#909090" }}>&#9432;</p>
        </InfoIcon>
      </DashHeader>
      <BlurSection>
        <img
          src={news}
          alt="news"
          style={{ maxWidth: "500px", maxHeight: "90px" }}
        />
        <img src={news1} alt="news" width="400px" height="90px" />
      </BlurSection>
    </DashboardCard>
  );
};

export default MarketNews;
