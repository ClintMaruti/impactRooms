import * as React from "react";
import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import { Container } from "@material-ui/core";

export default function Spinner() {
  return (
    <Container>
      <Box sx={{ display: "flex" }}>
        <CircularProgress />
      </Box>
    </Container>
  );
}
