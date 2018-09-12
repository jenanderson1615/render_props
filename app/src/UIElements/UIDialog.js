/**
 * Wrapper for Material UI Dialog
 *
 * @url https://material-ui-next.com/demos/dialogs/
 */

import React from "react";
import Dialog from "@material-ui/core/Dialog";

import UIDialogToolbar from "./UIDialogToolbar";

// -----------------------------------------------

/**
 * @param isMobile bool Detects mobile device
 * @param open bool Show/hide dialog
 * @param title string Dialog toolbar title
 * @param rightNav function Content for the dialog
 */

const UIDialog = ({ open, title, rightNav, content, actions, fullScreen }) => {
  let getRightNav = rightNav ? rightNav() : null;
  let getContent = content ? content() : null;
  let getActions = actions ? actions() : null;

  // -----------------------------------

  return (
    <Dialog fullScreen={fullScreen} open={open || false} fullWidth>
      <UIDialogToolbar title={title} rightNav={() => getRightNav} />

      <div className="uiDialogContent">{getContent}</div>
      {actions && <div className="actionContainer">{getActions}</div>}
    </Dialog>
  );
};

export default UIDialog;
