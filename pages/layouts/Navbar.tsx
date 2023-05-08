import * as React from 'react';
import { useState, useEffect } from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { AppBar, Button, Container, Dialog, Grid } from '@mui/material';
import icon from '@/public/Users.png';
import { BsPlusCircleFill } from 'react-icons/bs';

import AllUsers from '../TabViews/AllUsers';
import Contributor from '../TabViews/Contributor';
import Author from '../TabViews/Author';
import Administator from '../TabViews/Administator';
import Subscriber from '../TabViews/Subscriber';
import DialogForm from '../TabViews/Components/DialogForm';

const styles = {
  tab: {
    fontSize: '13px',
    fontWeight: '600',
    textTransform: 'capitalize',
  },
};
type User = {
  id: number;
  name: string;
  avatar: string;
  username: string;
  role: string;
  email: string;
};
const headerData = ['All Users', 'Contributor', 'Author', 'Administator', 'Subscriber'];
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
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs({ data }: { data: any }) {
  const [dialog, setDialog] = useState<boolean>(false);

  const [users, setUsers] = useState<User[]>([]);
  useEffect(() => {
    setUsers(data);
  }, []);
  const [value, setValue] = React.useState(0);

  const handletabsChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <>
      <AppBar sx={{ backgroundColor: 'White', boxShadow: 'none' }} position="static">
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <Grid container sx={{ paddingX: '1rem' }}>
            <Grid item xs={2} sx={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <Button
                sx={{
                  backgroundColor: ' #D4DBFC',
                  borderRadius: '8px',
                  height: '40px',
                  width: '40px',
                }}
                size="large"
              >
                <img src={icon.src} alt="icon" />
              </Button>
              <Typography
                sx={{
                  fontSize: '14px',
                  fontWeight: '600',
                  color: 'Black',
                }}
              >
                Users
              </Typography>
            </Grid>
            <Grid item xs={8} sx={{ display: 'flex', justifyContent: 'center' }}>
              {' '}
              <Tabs value={value} onChange={handletabsChange} aria-label="basic tabs example">
                {headerData.map((item, index) => {
                  return <Tab label={item} {...a11yProps(index)} key={index} sx={styles.tab} />;
                })}
              </Tabs>
            </Grid>
            <Grid
              item
              xs={2}
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'end',
              }}
            >
              <Button
                variant="contained"
                sx={{
                  fontSize: '13px',
                  fontWeight: '600',
                  textTransform: 'capitalize',
                  gap: '10px',
                }}
                onClick={() => setDialog(true)}
              >
                <BsPlusCircleFill />
                Add New User
              </Button>
            </Grid>
          </Grid>
        </Box>
      </AppBar>
      <Dialog open={dialog} onClose={() => setDialog(false)}>
        <DialogForm editValues={null} />
      </Dialog>
      <Container maxWidth="xl" sx={{ paddingY: '1rem' }}>
        <TabPanel value={value} index={0}>
          <AllUsers data={users} />
        </TabPanel>

        <TabPanel value={value} index={1}>
          <Contributor data={users} />
        </TabPanel>
        <TabPanel value={value} index={2}>
          <Author data={users} />
        </TabPanel>
        <TabPanel value={value} index={3}>
          <Administator data={users} />
        </TabPanel>
        <TabPanel value={value} index={4}>
          <Subscriber data={users} />
        </TabPanel>
      </Container>
    </>
  );
}
export async function getServerSideProps() {
  const response = await fetch('https://6450be73e1f6f1bb229de7cf.mockapi.io/persons');
  const data = await response.json();
  return {
    props: {
      data,
    },
  };
}
