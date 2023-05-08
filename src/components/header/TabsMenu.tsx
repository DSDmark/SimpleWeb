import { useState } from 'react';
import { Link as RouterLink } from "react-router-dom";
import { Box, Tabs, Tab, Divider } from '@mui/material/';


interface LinkTabProps {
  label: string;
  to: string;
}

interface IData {
  data: string[],
}

function LinkTab(props: LinkTabProps) {
  return (
    <Tab
      LinkComponent={RouterLink}
      {...props}
    />
  );
}

export default function TabMenu({ data }: IData) {
  const [value, setValue] = useState<number>(0);

  //@ts-ignore
  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <>
      <Box sx={{ width: '100%', m: "1em 0", display: "flex", justifyContent: "center", alignItems: "center" }}>
        <Tabs variant="scrollable" value={value} onChange={handleChange} indicatorColor="secondary" textColor="secondary" aria-label="nav tabs">
          {data.map((item: string) => (
            <LinkTab key={window.crypto.randomUUID()}
              label={item} to={`/${item}`} />
          ))}
        </Tabs>
      </Box>
      <Divider />
    </>
  );
}

