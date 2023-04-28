import * as React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { AppBar, Avatar, Button, Container } from "@mui/material";

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
          <Container maxWidth="xl" sx={{ display: "flex" }}>
            <Avatar
              alt="Remy Sharp"
              src="data:image/jpeg;base64,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"
            />
            <Tabs
              value={value}
              onChange={handleChange}
              aria-label="basic tabs example"
            >
              <Tab label="Item One" {...a11yProps(0)} />

              <Tab label="Item Two" {...a11yProps(1)} />
              <Tab label="Item Three" {...a11yProps(2)} />
            </Tabs>
            <Button
              variant="contained"
              sx={{
                textTransform: "capitalize",
                fontWeight: "600",
                fontSize: "13px",
              }}
            >
              Add New User
            </Button>
          </Container>
        </Box>
      </AppBar>

      <TabPanel value={value} index={0}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit, totam
        officia. Placeat beatae dolorum odit deleniti! Eveniet voluptatem
        doloribus voluptas iure placeat deserunt nobis soluta quibusdam a vel
        repudiandae modi laboriosam quis, inventore, harum deleniti cum optio
        sint labore sit vero omnis alias esse sequi? Nobis earum laborum itaque
        harum dolorum tenetur obcaecati magni ea ex in modi inventore fugiat
        rerum aperiam, dignissimos ab voluptatem fuga voluptatum quidem numquam
        consectetur aspernatur. Vel earum laudantium iste ullam? Impedit officia
        ut atque laboriosam tempora quia. Explicabo delectus id fugiat. Id
        assumenda beatae et, neque in doloribus consectetur doloremque at
        nostrum obcaecati cumque cupiditate ullam error eum optio ipsum tempore,
        ducimus sed? Itaque, quaerat! Dolorem excepturi possimus quam rem
        aspernatur? Ex sequi magni ad, quam ab aspernatur. Rerum necessitatibus
        unde aliquam esse ea officiis magni laudantium nostrum suscipit
        molestias. Ab dolorum alias nam maiores. Ipsum, perspiciatis id eos
        officiis quia a, consequatur inventore quis dolores deserunt corrupti
        reiciendis exercitationem similique. Eos doloribus quidem reiciendis
        laborum! Omnis, aliquid tenetur! Ullam, magnam vitae molestiae expedita
        unde saepe ad. Perspiciatis accusamus nostrum, alias repellat id maxime
        quisquam quidem iure? Perferendis blanditiis itaque, odit ipsa quidem,
        unde ab, error perspiciatis eveniet corrupti accusantium distinctio?
        Consectetur, voluptates provident.
      </TabPanel>

      <TabPanel value={value} index={1}>
        dsas
      </TabPanel>
    </>
  );
}
