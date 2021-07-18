import React from "react";
import SidebarRow from "./SidebarRow";
import "./Sidebar.css";
import LocalHospitalIcon from '@material-ui/icons/LocalHospital';
import EmojiFlagsIcon from '@material-ui/icons/EmojiFlags';
import PeopleIcon from '@material-ui/icons/People';
import ChatIcon from '@material-ui/icons/Chat';
import StorefrontIcon from '@material-ui/icons/Storefront';
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
// import { Avatar } from "@material-ui/core";

function Sidebar() {
  return (
    <div className="sidebar">
      <SidebarRow title="Darshan Sawant"  src="www.dads"></SidebarRow> 
      <SidebarRow title="Covid-19 Information Center" Icon={LocalHospitalIcon}></SidebarRow>
      <SidebarRow title="Pages" Icon={EmojiFlagsIcon}></SidebarRow>
      <SidebarRow title="Friends" Icon={PeopleIcon}></SidebarRow>
      <SidebarRow title="Messenger" Icon={ChatIcon}></SidebarRow>
      <SidebarRow title="Market Place" Icon={StorefrontIcon}></SidebarRow>
      <SidebarRow title="Videos" Icon={VideoLibraryIcon}></SidebarRow>
      <SidebarRow title="Market Place" Icon={ExpandMoreIcon}></SidebarRow>
    </div>
  );
}
export default Sidebar;
