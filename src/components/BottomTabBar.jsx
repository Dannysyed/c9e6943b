import React from "react";
import { BottomNavigation, BottomNavigationAction } from "@mui/material";
import RestoreIcon from "@mui/icons-material/Restore";
import ArchiveIcon from "@mui/icons-material/Archive";
import { Link, useLocation } from "react-router-dom";

const BottomTabBar = () => {
  const location = useLocation();
  const [value, setValue] = React.useState(location.pathname);

  return (
    <BottomNavigation
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
      showLabels
    >
      <BottomNavigationAction
        component={Link}
        to="/"
        label="Activity"
        value="/"
        icon={<RestoreIcon />}
      />
      <BottomNavigationAction
        component={Link}
        to="/archive"
        label="Archive"
        value="/archive"
        icon={<ArchiveIcon />}
      />
      <BottomNavigationAction
        component={Link}
        to="/archive"
        label="Archive"
        value="/archive"
        icon={<ArchiveIcon />}
      />
      <BottomNavigationAction
        component={Link}
        to="/archive"
        label="Archive"
        value="/archive"
        icon={<ArchiveIcon />}
      />
    </BottomNavigation>
  );
};

export default BottomTabBar;
