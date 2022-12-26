import React from "react";
import { AppBar, Toolbar, Typography } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";

interface props {
  name: string;
  location: string;
}

export default function Nav({ name, location }: props) {
  return (
    <>
      <AppBar
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center"
        }}
        position="relative"
        variant="elevation"
      >
        <Toolbar>
          <GitHubIcon sx={{ mr: 2 }} fontSize="large" />
          <Typography color="inherit" noWrap>
            {name}
            <Typography variant="subtitle2" color="inherit" noWrap>
              {location}
            </Typography>
          </Typography>
        </Toolbar>
      </AppBar>
    </>
  );
}
