import React, { useState, useEffect } from "react";
import history from "../../history";
import { AppBar, Button, Toolbar, Typography } from "@material-ui/core";
import Menu from "./Menu";

export default function Home(props) {
  return (
    <div style={{ width: "100%", marginBottom: 56 }}>
      <AppBar position="static">
        <Toolbar>
          <div
            style={{
              display: "flex",
              width: "100%",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Button
              onClick={() => history.push("/home")}
              color="inherit"
              variant="outlined"
            >
              PetShop - PIN II
            </Button>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <Menu></Menu>
              <Typography variant="h6" style={{ marginRight: 32 }}>
                Lucas
              </Typography>
              <Button
                onClick={() => history.push("/login")}
                color="inherit"
                style={{ marginRight: 32 }}
                variant="outlined"
              >
                Logout
              </Button>
            </div>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  );
}
