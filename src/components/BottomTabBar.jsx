import React from "react";
import { BottomNavigation, BottomNavigationAction } from "@mui/material";
import RestoreIcon from "@mui/icons-material/Restore";
import ArchiveIcon from "@mui/icons-material/Archive";
import { Link, useLocation } from "react-router-dom";
import PhoneIcon from "@mui/icons-material/Phone";
import PersonIcon from "@mui/icons-material/Person";
import KeyboardAltIcon from "@mui/icons-material/KeyboardAlt";
import SettingsIcon from "@mui/icons-material/Settings";
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
        value="/"
        icon={<PhoneIcon className="text-green-500" />}
      />
      <BottomNavigationAction
        component={Link}
        to="/archive"
        value="/archive"
        icon={<PersonIcon />}
      />
      <BottomNavigationAction
        component={Link}
        to="/archive"
        value="/archive"
        icon={<KeyboardAltIcon />}
      />
      <BottomNavigationAction
        component={Link}
        to="/archive"
        value="/archive"
        icon={<SettingsIcon />}
      />
    </BottomNavigation>
  );
};

export default BottomTabBar;
