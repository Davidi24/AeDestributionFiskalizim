import { useEffect, useState } from "react";
import { personsImgs } from "../../utils/images";
import { navigationLinks } from "../../data/data";
import "./Sidebar.css";
import { useContext } from "react";
import { SidebarContext } from "../../context/sidebarContext";
import GetClients from "../../components/GetClients/GetClients";

const Sidebar = ({ handleLiClick , handlePageChange}) => {
  const [activeLinkIdx, setActiveLinkIdx] = useState(1);
  const [sidebarClass, setSidebarClass] = useState("");
  const { isSidebarOpen } = useContext(SidebarContext);
  const [selectedItemId, setSelectedItemId] = useState(null);
  const [clickedLinkId, setClickedLinkId] = useState(null); // Store clicked link ID

  const handleItemClick = (navigationLink) => {
    setActiveLinkIdx(navigationLink.id);
    setClickedLinkId(navigationLink.id); 
    handlePageChange(navigationLink.id);
    if (navigationLink.id === 2) {
      setSelectedItemId(navigationLink.id);
    } else {
      setSelectedItemId(null);
    }
  };

  useEffect(() => {
    if (isSidebarOpen) {
      setSidebarClass("sidebar-change");
    } else {
      setSidebarClass("");
    }
  }, [isSidebarOpen]);

  return (
    <div className={`sidebar ${sidebarClass}`}>
      <div className="user-info">
        <div className="info-img img-fit-cover">
          <img src={personsImgs.person_two} alt="profile image" />
        </div>
        <span className="info-name">alice-doe</span>
      </div>

      <nav className="navigation">
        <ul className="nav-list">
          {navigationLinks.map((navigationLink) => (
            <li className="nav-item" key={navigationLink.id}>
              <a
                href="#"
                onClick={() => handleItemClick(navigationLink)}
                className={`nav-link ${
                  navigationLink.id === activeLinkIdx ? "active" : null
                }`}
              >
                <img
                  src={navigationLink.image}
                  className="nav-link-icon"
                  alt={navigationLink.title}
                />
                <span className="nav-link-text">{navigationLink.title}</span>
              </a>
              {selectedItemId === 2 && clickedLinkId === navigationLink.id && (
                <div className="additional-content">
                  <p>Searchiii</p>
                  <GetClients
            handleLiClick={handleLiClick}
          />
                </div>
              )}
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
