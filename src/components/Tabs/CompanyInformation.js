import React from "react";
import { CompanyInfoCard, CompanyInfo, Title, Icon } from "./style";
import { GiStairsGoal, GiTwoCoins } from "react-icons/gi";
import { ImHome } from "react-icons/im";
import { RiCameraLensLine, RiAccountCircleFill } from "react-icons/ri";
import { FaLaptopCode } from "react-icons/fa";

const CompanyInformation = ({ data }) => {
  return (
    <CompanyInfoCard>
      <CompanyInfo>
        <Title>Company Overview</Title>
      </CompanyInfo>
      <CompanyInfo>
        <Icon>
          <RiAccountCircleFill />
        </Icon>
        <div>
          <div>Account Owner</div>
          <Title>{`${data?.first_name} ${data?.owner}`}</Title>
        </div>
      </CompanyInfo>
      <CompanyInfo>
        <Icon>
          <ImHome />
        </Icon>
        <div>
          <div>Headquartered</div>
          <Title>{data?.country}</Title>
        </div>
      </CompanyInfo>
      <CompanyInfo>
        <Icon>
          <RiCameraLensLine />
        </Icon>
        <div>
          <div>Sector</div>
          <Title>{data?.sector}</Title>
        </div>
      </CompanyInfo>
      <CompanyInfo>
        <Icon>
          <GiStairsGoal />
        </Icon>
        <div>
          <div>Funding Stage</div>
          <Title>{data?.stage_of_funding}</Title>
        </div>
      </CompanyInfo>
      <CompanyInfo>
        <Icon>
          <GiTwoCoins />
        </Icon>
        <div>
          <div>Funding Range</div>
          <Title>{data?.funding}</Title>
        </div>
      </CompanyInfo>
      <CompanyInfo>
        <Icon>
          <FaLaptopCode />
        </Icon>
        <div>
          <div>Website</div>
          <Title>{data?.website}</Title>
        </div>
      </CompanyInfo>
    </CompanyInfoCard>
  );
};

export default CompanyInformation;
