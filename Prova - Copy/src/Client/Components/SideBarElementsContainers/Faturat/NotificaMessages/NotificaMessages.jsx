import React from "react";
import "./NotificaMessages.css";
import NotificationImportantOutlinedIcon from "@mui/icons-material/NotificationImportantOutlined";
import MailOutlineOutlinedIcon from "@mui/icons-material/MailOutlineOutlined";
import { logo } from "../../../../utils/images";
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';

function NotificaMessages() {
  return (
    <div className="top-container">
      <div>
        <NotificationImportantOutlinedIcon id="notification"/>
        <MailOutlineOutlinedIcon id="messages"/>
       <span> <img src={logo} alt="logo" id="logo" /></span>
        <p id="vatnumber">K21915002R</p>
        <LogoutOutlinedIcon id="logout"/>
      </div>
    </div>
  );
}

export default NotificaMessages;
