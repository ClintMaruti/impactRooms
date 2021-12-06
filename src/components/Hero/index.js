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
} from "./styles";
import cart from "../../assets/imgs/cns-logo.png";
import bgSvg from "../../assets/background/endless-constellation.svg";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
    height: "200px",
    backgroundImage:
      "linear-gradient(rgba(0, 0, 255, 0.5), rgba(255, 255, 0, 0.5))",
  },
  bg: {
    backgroundImage: `url(${bgSvg})`,
    opacity: 0.5,
  },
}));

const Hero = () => {
  const classes = useStyles();

  return (
    <div className={(classes.root, classes.bg)}>
      <Header>
        <CompanySection>
          <CompanyLogo src={cart} />
          <Status>In Que</Status>
          <span style={{ paddingLeft: "5px", color: "#909090" }}>&#9432;</span>
          <CompanyID>Company ID: #0007</CompanyID>
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
