import * as React from "react";
import { Box, Container, Typography } from "@mui/material";
import Copyright from "./Copyright";
import GithubIcon from "@mui/icons-material/GitHub";

export default function AppFooter({ hostname }: any) {
  return (
    <Typography
      component="footer"
      sx={{ display: "flex", bgcolor: "primary.dark", color: "white" }}
    >
      <Container
        sx={{
          my: 8,
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          alignItems: "center"
        }}
      >
        <GithubIcon sx={{ fontSize: 55 }} />
        <Box marginTop={2}>
          <Copyright hostname={hostname} />
        </Box>
      </Container>
    </Typography>
  );
}
