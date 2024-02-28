import { useState } from "react";
import { iconsImgs } from "../../utils/images";
import "./ContentTop.css";
import { useContext } from "react";
import { SidebarContext } from "../../context/sidebarContext";

const ContentTop = () => {
  const { toggleSidebar } = useContext(SidebarContext);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleNotificationClick = (e) => {
    e.stopPropagation(); // Prevent event propagation
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className="main-content-top">
        <div className="content-top-left">
            <button type="button" className="sidebar-toggler" onClick={() => toggleSidebar() }>
                <img src={ iconsImgs.menu } alt="" />
            </button>
            <h3 className="content-top-title">Home</h3>
        </div>
        <div className="content-top-btns">
        <div className="dropdown-wrapper">
            <button type="button" className="search-btn content-top-btn">
                <img src={ iconsImgs.search } alt="" />
            </button>
         
                <button className="notification-btn content-top-btn" onClick={handleNotificationClick}>
                    <img src={ iconsImgs.bell } />
                    <span className="notification-btn-dot"></span>
                </button>
                {isDropdownOpen && (
                  <div className="dropdown-menu">
                    <button className="dropdown-item">Logout</button>
                    <button className="dropdown-item">Get Info</button>
                  </div>
                )}
            </div>
        </div>
    </div>
  )
}

export default ContentTop;
