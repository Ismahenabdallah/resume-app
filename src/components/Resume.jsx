import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import BasicInfo from '../pages/BasicInfo';
import styled from 'styled-components';
import WorkExperience from '../pages/WorkExperience';
import Projects from '../pages/Projects';
import Education from '../pages/Education';
import Certificates from '../pages/Certificate';
import Others from '../pages/Others';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
      className='toppanel'
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}



export default function Resume() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const sections = ["Basic Info", "Work Experience","Projects","Education","Certificates", "Other"]

  return (
    <Container>
    <Box sx={{ width: '70%' }}  style={{textAlign:"center" , marginLeft:'10%'}}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }} >
        <Tabs value={value} onChange={handleChange} textColor="secondary"
          indicatorColor="secondary"
          aria-label="secondary tabs example">
          {sections.map((item, index) => {
            return <Tab key={index} label={item} {...a11yProps(index)} />
          })}


        </Tabs>

      </Box>
      <TabPanel value={value} index={0}>
        <BasicInfo />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <WorkExperience/>
      </TabPanel>
      <TabPanel value={value} index={2}>
        <Projects/>
      </TabPanel>
      <TabPanel value={value} index={3}>
        <Education/>
      </TabPanel>
      <TabPanel value={value} index={4}>
        <Certificates/>
      </TabPanel>
      <TabPanel value={value} index={5}>
        <Others/>
      </TabPanel>
    </Box>
    </Container>

  );
}
 const Container =styled.div`
 
 .toppanel{
 
  width:auto;
 }
 
 `;