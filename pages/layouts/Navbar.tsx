import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { AppBar, Button, Container, Grid, IconButton } from "@mui/material";
import icon from "@/public/Users.png";
import BsPlusCircleFill from "react-icons/bs";

const styles = {
  tab: {
    fontSize: "13px",
    fontWeight: "600",
    textTransform: "capitalize",
  },
};

const headerData = [
  "All Users",
  "Contributor",
  "Author",
  "Administator",
  "Subscriber",
];
interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
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
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };
  const deneme: any = () => {
    console.log("deneme");
  };
  return (
    <>
      <AppBar
        sx={{ backgroundColor: "White", boxShadow: "none" }}
        position="static"
      >
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <Grid container sx={{ paddingX: "1rem" }}>
            <Grid
              xs
              sx={{ display: "flex", alignItems: "center", gap: "10px" }}
            >
              <Button
                sx={{
                  backgroundColor: " #D4DBFC",
                  borderRadius: "8px",
                  height: "40px",
                  width: "40px",
                }}
                size="large"
              >
                <img src={icon.src} alt="icon" />
              </Button>
              <Typography
                sx={{
                  fontSize: "14px",
                  fontWeight: "600",
                  color: "Black",
                }}
              >
                Users
              </Typography>
            </Grid>
            <Grid xs={10} sx={{ display: "flex", justifyContent: "center" }}>
              {" "}
              <Tabs
                value={value}
                onChange={handleChange}
                aria-label="basic tabs example"
              >
                {headerData.map((item, index) => {
                  return (
                    <Tab
                      label={item}
                      {...a11yProps(index)}
                      sx={styles.tab}
                      onClick={deneme}
                    />
                  );
                })}
              </Tabs>
            </Grid>
            <Grid
              xs
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "end",
              }}
            >
              <Button variant="contained" sx={styles.tab} size="medium">
                Add New User
              </Button>
            </Grid>
          </Grid>
        </Box>
      </AppBar>

      <TabPanel value={value} index={0}></TabPanel>

      <TabPanel value={value} index={1}>
        dsas
      </TabPanel>
    </>
  );
}
