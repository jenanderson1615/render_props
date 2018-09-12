import React from "react";
import { observer } from "mobx-react";
import CloseIcon from "@material-ui/icons/Close";
import UIDialog from "./UIDialog";

const UIFormDialog = ({ toggleDialog, title, open, model, viewPage }) => {
  let rightNav = () => {
    return <CloseIcon onClick={toggleDialog} color="inherit" />;
  };

  return (
    <UIDialog
      title={title}
      open={open}
      rightNav={() => rightNav()}
      content={() => viewPage(model)}
    />
  );
};

export default observer(UIFormDialog);
