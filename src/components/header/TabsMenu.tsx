import { useState } from 'react';
import { Link as RouterLink } from "react-router-dom";
import { Box, Tabs, Tab, Divider } from '@mui/material/';


interface LinkTabProps {
  label: string;
  to: string;
}

function LinkTab(props: LinkTabProps) {
  return (
    <Tab
      LinkComponent={RouterLink}
      {...props}
      key={window.crypto.randomUUID()}
    />
  );
}

export default function TabMune() {
  const [value, setValue] = useState<number>(0);
  const category: string[] = ["home", "followers", "following"]

  //@ts-ignore
  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%', m: "1em 0", }}>
      <Tabs value={value} onChange={handleChange} indicatorColor="secondary" textColor="secondary" centered aria-label="nav tabs">
        {category.map((item) => (
          <LinkTab label={item} to={`/${item}`} />
        ))}
      </Tabs>
      <Divider />
    </Box>
  );
}

