import React from "react";
import { CompanyInfoCard, CompanyInfo, Title, Icon } from "./style";
import { GiStairsGoal, GiTwoCoins } from "react-icons/gi";
import { ImHome } from "react-icons/im";
import { RiCameraLensLine, RiAccountCircleFill } from "react-icons/ri";
import { FaLaptopCode } from "react-icons/fa";

const CompanyInformation = () => {
  return (
    <CompanyInfoCard>
      <CompanyInfo>
        <Title>Company Overview</Title>{" "}
      </CompanyInfo>
      <CompanyInfo>
        <Icon>
          <RiAccountCircleFill />
        </Icon>
        <div>
          <div>Account Owner</div>
          <Title>Joe Wambugu, CEO & Founder</Title>
        </div>
      </CompanyInfo>
      <CompanyInfo>
        <Icon>
          <ImHome />
        </Icon>
        <div>
          <div>Headquartered</div>
          <Title>Nairobi, Kenya</Title>
        </div>
      </CompanyInfo>
      <CompanyInfo>
        <Icon>
          <RiCameraLensLine />
        </Icon>
        <div>
          <div>Sector</div>
          <Title>Ecommerce & Retail, Software</Title>
        </div>
      </CompanyInfo>
      <CompanyInfo>
        <Icon>
          <GiStairsGoal />
        </Icon>
        <div>
          <div>Funding Stage</div>
          <Title>Pre-Seed</Title>
        </div>
      </CompanyInfo>
      <CompanyInfo>
        <Icon>
          <GiTwoCoins />
        </Icon>
        <div>
          <div>Funding Range</div>
          <Title>$1m to $2m</Title>
        </div>
      </CompanyInfo>
      <CompanyInfo>
        <Icon>
          <FaLaptopCode />
        </Icon>
        <div>
          <div>Website</div>
          <Title>www.cartnshop.com</Title>
        </div>
      </CompanyInfo>
    </CompanyInfoCard>
  );
};

export default CompanyInformation;
