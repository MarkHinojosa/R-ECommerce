import React, { Component } from "react";
import { TextField } from "@material-ui/core";

export default class Header extends Component {
  render() {
    return (
      <React.Fragment>
        <form noValidate autoComplete="off">
          <TextField
            xs={12}
            id="outlined-basic"
            label="Outlined"
            variant="outlined"
          />
        </form>
      </React.Fragment>
    );
  }
}
