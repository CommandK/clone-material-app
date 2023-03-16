import React from "react";
import { Button, Container, Typography } from "@mui/material";
import { styled } from "@mui/system";

const StyledContainer = styled(Container)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  minHeight: "100vh",
  backgroundColor: theme.palette.grey[100],
}));

const StyledButton = styled(Button)(({ theme }) => ({
  marginTop: theme.spacing(2),
}));

function App() {
  const handleClick = () => {
    alert("Hello, Material-UI!");
  };

  return (
    <StyledContainer maxWidth="sm">
      <Typography variant="h4" component="h1">
        My React 18 Material-UI App
      </Typography>
      <StyledButton variant="contained" color="primary" onClick={handleClick}>
        Click me!
      </StyledButton>
    </StyledContainer>
  );
}

export default App;
