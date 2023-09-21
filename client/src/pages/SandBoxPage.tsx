import React from "react";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import PageHeader from "./../components/PageHeader";

const SandBoxPage = () => {
  return (
    <Container>
      <PageHeader title="Sandbox Page" subtitle="This card can find only admin" />

      <Grid container spacing={2}>
        <Grid item xs={12} md={8}>
          <Typography variant="h3" color="initial">
            This is a Sandbox Page  
          </Typography>
          <Button variant="text" color="primary">
            Click here to return to the home page...
          </Button>
        </Grid>
        <Grid item xs={12} md={4} justifyContent="center">
          <img
            width="100%"
            src="/assets/images/avatar.png"
            alt="broken robot"
          />
        </Grid>
      </Grid>
    </Container>
  );
};

export default SandBoxPage;