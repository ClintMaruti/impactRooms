import React from "react";
import {
  DashboardCard,
  DashboardInfo,
  DashHeader,
  Icon,
  Title,
  SpecialIcon,
} from "./style";
import { IoTelescope } from "react-icons/io5";
import { AiTwotoneTrophy } from "react-icons/ai";
import { MdStars } from "react-icons/md";
import { FaAws } from "react-icons/fa";
import { MdOutlineSupervisedUserCircle } from "react-icons/md";

const Dashboard = () => {
  return (
    <DashboardCard>
      <DashHeader>
        <Title>Dashboard</Title>
      </DashHeader>
      <DashboardInfo>
        <Icon>
          <IoTelescope />
        </Icon>
        <div>
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
          <div>Incentives</div>
          <SpecialIcon>
            <MdStars />
            <FaAws />
            <MdOutlineSupervisedUserCircle />
          </SpecialIcon>
        </div>
      </DashboardInfo>
    </DashboardCard>
  );
};

export default Dashboard;
