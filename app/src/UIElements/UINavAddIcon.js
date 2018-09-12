import React from "react";
import AddIcon from "@material-ui/icons/Add";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";

//This opens a form dialog from an add button.

class UINavAddIcon extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      anchorEl: null
    };
  }

  openMenu = event => {
    this.setState({ anchorEl: event.currentTarget });
  };

  onClick = parentOnClick => {
    this.handleClose();
    if (typeof parentOnClick === "function") {
      parentOnClick();
    }
  };

  handleClose = () => {
    this.setState({ anchorEl: null });
  };

  // ---------------------------------------

  render() {
    let { anchorEl } = this.state;
    let { menuOptions } = this.props;

    let menuItems = menuOptions.map((option, idx) => {
      return (
        <MenuItem
          onClick={() => {
            this.onClick(option.parentOnClick);
          }}
        >
          {option.title}
        </MenuItem>
      );
    });

    return (
      <div>
        <AddIcon onClick={this.openMenu} />
        <Menu
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={this.handleClose}
        >
          {menuItems}
        </Menu>
      </div>
    );
  }
}

export default UINavAddIcon;