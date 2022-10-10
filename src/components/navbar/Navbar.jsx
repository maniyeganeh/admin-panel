import {
  DarkModeOutlined,
  LanguageOutlined,
  SearchOutlined,
  NotificationsNone,
  ChatBubble,
  FullscreenExitOutlined,
  ListOutlined,
  LightModeOutlined,
} from '@mui/icons-material';
import { Link } from 'react-router-dom';
import './navbar.scss';
import { useSelector, useDispatch } from 'react-redux';
import { toggle } from '../../redux/actions/modeAction';
import { enLangHandler, faLangHandler } from '../../redux/actions/langAction';
import { searchAction, searchClear } from '../../redux/actions/products';
import { Avatar } from '@mui/material';
import { useState } from 'react';
import { useEffect } from 'react';
const Navbar = () => {
  const [search, setSearch] = useState(0);
  const { darkMode } = useSelector((state) => state.mode);
  const { lang } = useSelector((state) => state.lang);
  const { prods } = useSelector((state) => state.products);

  const {
    authData: { result },
  } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const searchChangeHandler = (e) => {
    setSearch(e.target.value);
  };
  useEffect(() => {
    if (search.length > 0) {
      dispatch(searchAction(search, prods));
    } else {
      setSearch(0);
      dispatch(searchClear());
    }
  }, [search]);

  return (
    <div className="navbar">
      <div className={lang === 'en' ? 'wrapper' : 'wrapper fa'}>
        <div className="search">
          <input
            type="text"
            placeholder="Search..."
            value={search}
            onChange={searchChangeHandler}
          />
          <SearchOutlined />
        </div>
        <div className={lang === 'en' ? 'items' : 'items fa'}>
          {lang === 'en' ? (
            <div className="item" onClick={() => dispatch(faLangHandler())}>
              <LanguageOutlined className="icon" />
              Farsi
            </div>
          ) : (
            <div className="item" onClick={() => dispatch(enLangHandler())}>
              <LanguageOutlined className="icon" />
              English
            </div>
          )}

          <div className="item">
            {darkMode ? (
              <LightModeOutlined
                className="icon"
                onClick={() => dispatch(toggle(darkMode))}
              />
            ) : (
              <DarkModeOutlined
                className="icon"
                onClick={() => dispatch(toggle(darkMode))}
              />
            )}
          </div>
          <div className="item">
            <NotificationsNone className="icon" />
            <div className="counter">1</div>
          </div>
          <div className="item">
            <ChatBubble className="icon" />
            <div className="counter">2</div>
          </div>

          {/* <div className="item">
            <FullscreenExitOutlined className="icon" />
          </div>
          <div className="item">
            <ListOutlined className="icon" />
          </div> */}
          <div className="item">
            <Link
              to={`/users/${result._id}`}
              style={{ textDecoration: 'none' }}
            >
              <Avatar sx={{ bgcolor: '#6439ff' }}>
                {result.name.slice(0, 1)}
              </Avatar>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
