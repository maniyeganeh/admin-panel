import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import { useDispatch, useSelector } from 'react-redux';
import { signin, signup } from '../../redux/actions/auth';
import LoginPic from '../../assets/images/login.jpg';
import './login.scss';
import { enLangHandler, faLangHandler } from '../../redux/actions/langAction';
const Login = () => {
  const navigate = useNavigate();
  const { isLoading } = useSelector((state) => state.auth);
  const { lang } = useSelector((state) => state.lang);

  const dispatch = useDispatch();
  const [authMode, setAuthMode] = useState(false);
  const [active, setActive] = useState(lang);
  const [userForm, setUserForm] = useState({
    email: '',
    password: '',
    firstName: '',
    lastName: '',
    phoneNumber: '',
    confirmPassword: '',
  });
  const authHandler = () => {
    setAuthMode((prevState) => !prevState);
    setUserForm({
      email: '',
      password: '',
      firstName: '',
      lastName: '',
      phoneNumber: '',
      confirmPassword: '',
    });
  };
  const inputChangeHandler = (e) => {
    setUserForm({ ...userForm, [e.target.name]: e.target.value });
  };

  const formSubmitHandler = async (e) => {
    e.preventDefault();
    if (!authMode) {
      dispatch(signin(userForm, navigate));
    } else {
      if (userForm.password.length === userForm.confirmPassword.length) {
        await dispatch(signup(userForm));
        setAuthMode(false);
      } else {
        console.log('Password Not Match');
      }
    }
  };

  return (
    <div className="login-form-wrapper">
      <div className="left">
        <form onSubmit={formSubmitHandler}>
          <div className="form-input">
            <input
              type={'email'}
              value={userForm.email}
              name="email"
              onChange={inputChangeHandler}
            />
          </div>
          <div className="form-input">
            <input
              type={'password'}
              value={userForm.password}
              name="password"
              onChange={inputChangeHandler}
            />
            <button type="submit">Login</button>
          </div>
        </form>
        <div className="lang-button">
          <button
            onClick={() => dispatch(faLangHandler())}
            className={lang === 'fa' && 'active'}
          >
            FA
          </button>
          <button
            onClick={() => dispatch(enLangHandler())}
            className={lang === 'en' && 'active'}
          >
            EN
          </button>
        </div>
      </div>

      <div className="right">
        <div className="image-wrapper">
          <img src={LoginPic} alt="login" />
        </div>
      </div>
    </div>
  );
};

export default Login;
