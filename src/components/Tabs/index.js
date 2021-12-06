import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import { DashboardCard, ProfileCard } from "./style";
import CompanyInformation from "./CompanyInformation";
import Dashboard from "./Dashboard";
import MarketNews from "./MarketNews";
import ImpactScore from "./ImpactScore";
import Evaluation from "./evaluation";
import Resources from "./resource";
import Shortlist from "./shortlist";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
  AppBar: {
    backgroundColor: "#3f3f3f",
    indicator: "#06aff0",
  },
  tab: {
    textTransform: "capitalize",
  },
}));

export default function EvaluationTabs() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.AppBar}>
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="simple tabs example"
          indicatorColor="primary"
        >
          <Tab label="Profile" {...a11yProps(0)} className={classes.tab} />
          <Tab label="Evaluation" {...a11yProps(1)} className={classes.tab} />
          <Tab label="Shortlist" {...a11yProps(2)} className={classes.tab} />
          <Tab label="Resources" {...a11yProps(3)} className={classes.tab} />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
        <ProfileCard>
          <CompanyInformation />
          <div>
            <Dashboard />
            <MarketNews />
            <ImpactScore />
          </div>
        </ProfileCard>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <ProfileCard>
          <Evaluation />
        </ProfileCard>
      </TabPanel>
      <TabPanel value={value} index={2}>
        <Shortlist />
      </TabPanel>
      <TabPanel value={value} index={3}>
        <Resources />
      </TabPanel>
    </div>
  );
}
