import {
  DarkModeOutlined,
  LanguageOutlined,
  SearchOutlined,
  NotificationsNone,
  ChatBubble,
  FullscreenExitOutlined,
  ListOutlined,
} from '@mui/icons-material';
import React from 'react';
import './navbar.scss';
const Navbar = () => {
  return (
    <div className="navbar">
      <div className="wrapper">
        <div className="search">
          <input type="text" placeholder="Search..." />
          <SearchOutlined />
        </div>
        <div className="items">
          <div className="item">
            <LanguageOutlined className="icon" />
            English
          </div>
          <div className="item">
            <DarkModeOutlined className="icon" />
          </div>
          <div className="item">
            <NotificationsNone className="icon" />
            <div className="counter">1</div>
          </div>
          <div className="item">
            <ChatBubble className="icon" />
            <div className="counter">2</div>
          </div>

          <div className="item">
            <FullscreenExitOutlined className="icon" />
          </div>
          <div className="item">
            <ListOutlined className="icon" />
          </div>
          <div className="item">
            <img
              src="https://images.pexels.com/photos/2007647/pexels-photo-2007647.jpeg?cs=srgb&dl=pexels-harsch-shivam-2007647.jpg&fm=jpg"
              alt="avatar"
              className="avatar"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
