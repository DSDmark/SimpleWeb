import { useState } from 'react';
import { Box, Tabs, Tab } from '@mui/material/';

interface LinkTabProps {
  label?: string;
  href?: string;
}

function LinkTab(props: LinkTabProps) {
  return (
    <Tab
      component="a"
      onClick={(event) => {
        event.preventDefault();
      }}
      {...props}
    />
  );
}

export default function TabMune() {
  const [value, setValue] = useState<number>(0);

  //@ts-ignore
  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%', m: "1em 0", }}>
      <Tabs value={value} onChange={handleChange} indicatorColor="secondary" textColor="secondary" centered aria-label="nav tabs">
        <LinkTab label="Page One" href="/drafts" />
        <LinkTab label="Page Two" href="/trash" />
        <LinkTab label="Page Three" href="/spam" />
      </Tabs>
    </Box>
  );
}

