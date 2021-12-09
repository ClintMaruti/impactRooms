import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Header,
  CompanySection,
  ButtonSection,
  CompanyLogo,
  Status,
  CompanyID,
  ChatWithUs,
  EditProfile,
  CompanyName,
} from "./styles";
import { Tooltip } from "@material-ui/core";
import styled from "styled-components";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
    height: "200px",
  },
}));

const popUp = {
  inQue:
    "This is your profile status, it will change from ‘In Que’ to ‘Active’ when we launch.",
};

const Hero = ({ data }) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Header>
        <CompanySection>
          <CompanyLogo src={data?.logo} />
          <div>
            <CompanyName> {data?.company_name}</CompanyName>
          </div>
          <div style={{ display: "flex" }}>
            <Status>In Que</Status>
            <CompanyID> {`Company ID: ${data?.email}`} </CompanyID>
          </div>
        </CompanySection>
        <ButtonSection>
          {/* <ChatWithUs to="#">Chat With Us</ChatWithUs> */}
          {/* <EditProfile to="#">Edit Profile</EditProfile> */}
        </ButtonSection>
      </Header>
    </div>
  );
};

export default Hero;
