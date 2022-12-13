import React from "react";
import { Menu, MenuItem } from "@mui/material";

export const MenuBar = ({ id, anchorEl, onClose, items }) => {
  return (
    <Menu
      anchorEl={anchorEl}
      open={Boolean(anchorEl)}
      onClose={onClose}
      MenuListProps={{ onMouseLeave: onClose }}
    >
      {items.map((item, i) => (
        <MenuItem key={i} onClick={onClose}>
          {item.name}
        </MenuItem>
      ))}
    </Menu>
  );
};
