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

const Dashboard = () => {
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
          <Tooltip title="Coming Soon" placement="top">
            <InfoIcon>
              <p style={{ paddingLeft: "5px", color: "#909090" }}>&#9432;</p>
            </InfoIcon>
          </Tooltip>
          <div>Overview</div>
          <Title>
            Full-stack ecommerce ecosystem for SME mercahnts across Kenya
          </Title>
        </div>
      </DashboardInfo>
      <DashboardInfo>
        <Icon>
          <AiTwotoneTrophy />
        </Icon>
        <div>
          <Tooltip title="Coming Soon" placement="top">
            <InfoIcon>
              <p style={{ paddingLeft: "5px", color: "#909090" }}>&#9432;</p>
            </InfoIcon>
          </Tooltip>
          <div>Tokens</div>
          <SpecialIcon>
            <Tooltip title="Early-bird token" placement="top">
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
