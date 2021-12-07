import React from "react";
import {
  DashboardCard,
  DashboardInfo,
  Icon,
  Title,
  SpecialIcon,
  CompanyInfo,
  InfoIcon,
} from "./style";
import { IoTelescope } from "react-icons/io5";
import { AiTwotoneTrophy } from "react-icons/ai";
import { MdStars } from "react-icons/md";
import { Tooltip } from "@material-ui/core";

const popUp = {
  Token:
    "Tokens unlock powerups and incentives for your company. Earn them by completing your evaluation and improving your profile.",
};

const Dashboard = ({ data }) => {
  return (
    <DashboardCard>
      <CompanyInfo>
        <Title>Dashboard</Title>
      </CompanyInfo>
      <DashboardInfo>
        <Icon>
          <IoTelescope />
        </Icon>
        <div>
          <div>Overview</div>
          <Title>{data?.company_descr}</Title>
        </div>
      </DashboardInfo>
      <DashboardInfo>
        <Icon>
          <AiTwotoneTrophy />
        </Icon>
        <div>
          <Tooltip title={popUp.Token} placement="top">
            <InfoIcon>
              <p style={{ paddingLeft: "5px", color: "#909090" }}>&#9432;</p>
            </InfoIcon>
          </Tooltip>
          <div>Tokens</div>
          <SpecialIcon>
            <Tooltip title="Early-Bird Token" placement="top">
              <div style={{ color: "green", fontSize: "22px" }}>
                <MdStars />
              </div>
            </Tooltip>
          </SpecialIcon>
        </div>
      </DashboardInfo>
    </DashboardCard>
  );
};

export default Dashboard;
