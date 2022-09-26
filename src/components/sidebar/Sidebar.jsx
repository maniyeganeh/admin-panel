import './sidebar.scss';
import {
  Dashboard,
  PersonOutlineOutlined,
  CreditCard,
  LocalShipping,
  InsertChart,
  NotificationsNone,
  SettingsSystemDaydream,
  PsychologyAlt,
  Settings,
  AccountCircle,
  Logout,
  Store,
} from '@mui/icons-material';
import { Link } from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';
import {
  darkModeHandler,
  lightModeHandler,
} from '../../redux/actions/modeAction';
import { logout } from '../../redux/actions/auth';
import { centerItems, listsItems } from '../../assets/utils/sideBarItems';
const Sidebar = () => {
  const { lang } = useSelector((state) => state.lang);
  const {
    authData: { result },
  } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  return (
    <div className={lang === 'en' ? 'sidebar' : 'sidebar fa'}>
      <div className="top">
        <Link to="/" style={{ textDecoration: 'none' }}>
          <span className="logo">Mani Admin</span>
        </Link>
      </div>
      <hr />
      <div className={lang === 'en' ? 'center' : 'center fa'}>
        <ul>
          <p className="title">{lang === 'en' ? 'Main' : 'اصلی'}</p>
          {centerItems?.map((item, index) => (
            <Link to={'/'} key={index} className="sidebar-link">
              <li key={index}>
                {item.icon}
                <span> {lang === 'en' ? item.enTitle : item.faTitle}</span>
              </li>
            </Link>
          ))}
          {/* <li>
            <Dashboard className="icon" />
            <span>{lang === 'en' ? 'Dashboard' : 'داشبورد'}</span>
          </li> */}
          <p className="title">{lang === 'en' ? 'Lists' : 'لیست ها'}</p>
          {listsItems?.map((item, index) => (
            <Link to={`/${item.path}`} key={index} className="sidebar-link">
              <li key={index}>
                {item.icon}
                <span>{lang === 'en' ? item.enTitle : item.faTitle}</span>
              </li>
            </Link>
          ))}
          {/* <Link to="/users" style={{ textDecoration: 'none' }}>
            <li>
              <PersonOutlineOutlined className="icon" />
              <span>Users</span>
            </li>
          </Link>
          <Link to="/products" style={{ textDecoration: 'none' }}>
            <li>
              <Store className="icon" />
              <span>Products</span>
            </li>
          </Link>

          <li>
            <CreditCard className="icon" />
            <span>Orders</span>
          </li>
          <li>
            <LocalShipping className="icon" />
            <span>Delivery</span>
          </li> */}
          <p className="title">Useful</p>
          <li>
            <InsertChart className="icon" />
            <span>Stats</span>
          </li>
          <li>
            <NotificationsNone className="icon" />
            <span>Notifications</span>
          </li>
          <p className="title">Service</p>
          <li>
            <SettingsSystemDaydream className="icon" />
            <span>System Health</span>
          </li>
          <li>
            <PsychologyAlt className="icon" />
            <span>Logs</span>
          </li>
          <li>
            <Settings className="icon" />
            <span>Settings</span>
          </li>
          {result !== null && (
            <>
              <p className="title">User</p>
              <Link to={`/users/${result._id}`}>
                <li>
                  <AccountCircle className="icon" />
                  <span>{result ? result.name : 'Profile'}</span>
                </li>
              </Link>

              <li onClick={() => dispatch(logout())}>
                <Logout className="icon" />
                <span>{lang === 'en' ? 'Logout' : 'خروج'}</span>
              </li>
            </>
          )}
        </ul>
      </div>
      <div className="bottom">
        <div
          className="color-option"
          onClick={() => dispatch(lightModeHandler())}
        ></div>
        <div
          className="color-option"
          onClick={() => dispatch(darkModeHandler())}
        ></div>
        <div className="color-option"></div>
      </div>
    </div>
  );
};

export default Sidebar;
