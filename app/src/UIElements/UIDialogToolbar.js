/**
 * Wrapper for Material UI Appbar and Toolbar for a UIDialog component
 *
 * @url https://material-ui-next.com/demos/app-bar/
 */

import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";

// ------------------------------------------------

const styles = {
  appBar: {
    position: "relative",
    background: "#4a9dd7",
    boxShadow: "none",
    flex: "0 0 auto"
  },
  flex: {
    flex: 1,
    textAlign: "center"
  },
  rightNav: {
    position: "absolute",
    right: "12px"
  },
  noAppBarNav: {
    padding: 10,
    height: 26,
    borderBottom: "1px solid #ddd",
    marginBottom: 20
  }
};

/**
 * @param classes object CSS Style properties
 * @param title string Title for toolbar
 * @param function Component for toolbar right navigation
 */

const UIDialogToolbar = ({ classes, title, rightNav }) => {
  let getRightNav = () => {
    let nav = rightNav ? rightNav() : null;
    return <div className={classes.rightNav}>{nav}</div>;
  };

  return (
    <div>
      {title && (
        <AppBar className={classes.appBar}>
          <Toolbar>
            <Typography
              variant="title"
              color="inherit"
              className={classes.flex}
            >
              {title}
            </Typography>
            {getRightNav()}
          </Toolbar>
        </AppBar>
      )}
      {!title && <div className={classes.noAppBarNav}>{getRightNav()}</div>}
    </div>
  );
};

export default withStyles(styles)(UIDialogToolbar);
