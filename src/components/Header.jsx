import { AppBar, IconButton, Toolbar, Typography } from "@material-ui/core";

import React from "react";
import { BrowserRouter, Link, Routes } from "react-router-dom";

const Header = () => {
  return (
    <AppBar>
      <Toolbar>
        <Typography variant="h5" component="span" sx={{ flexGrow: 1 }}>
          {/* <span> Test Builder</span> */}
        </Typography>
        <IconButton>
          <span>Test </span>
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
