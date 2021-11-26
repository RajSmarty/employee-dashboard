import React from "react";
import "./topbar.css";
import { NotificationsNone, Language, Settings } from "@material-ui/icons";
import { Link } from "react-router-dom";


export default function Topbar() {
  return (
    <div className="topbar">
      <div className="topbarWrapper">
        <div className="topLeft">
          <span className="logo">l Am Admin</span>
        </div>
        <img src="https://images.pexels.com/photos/1526814/pexels-photo-1526814.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" alt="" className="topAvatar" />
        <div className="topRight">
          <div className="topbarIconContainer" style={{ marginTop: "7px" }}>
            <NotificationsNone />
            <span className="topIconBadge">2</span>
          </div>
          <div className="topbarIconContainer">
            <Language />
            <span className="topIconBadge">2</span>
          </div>
          <div className="topbarIconContainer">
            <Link to="user/1"><Settings /></Link>
          </div>
        </div>
      </div>
    </div>
  );
}
