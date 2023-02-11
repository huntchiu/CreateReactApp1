import React from "react";
import { Container } from "@mui/material";
import { CssBaseline } from "@mui/material";
import { ThemeProvider, makeStyles } from "@mui/styles";
import Header from "./components/Header";
import theme from "./theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header />
      <Container
        maxWidth="lg"
        disableGutters
        sx={{
          backgroundColor: "red",
        }}
      ></Container>
    </ThemeProvider>
  );
}

export default App;
