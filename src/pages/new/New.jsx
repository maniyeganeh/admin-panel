import React, { useState } from 'react';
import './new.scss';
import { DriveFolderUpload } from '@mui/icons-material';
import { signup } from '../../api';
import toast from 'react-hot-toast';
const New = ({ inputs, title }) => {
  const [form, setForm] = useState({
    email: '',
    password: '',
    phone: '',
    address: '',
    firstName: '',
    country: '',
    role: '',
    confirmPassword: '',
  });
  const [file, setFile] = useState('');
  const handleChange = (e) => {
    const value = e.target.value;
    setForm({
      ...form,
      [e.target.name]: value,
    });
  };
  const submitUser = async (e) => {
    e.preventDefault();
    try {
      const { status } = await signup(form);
      if (status === 201) {
        toast.success('user created');
      }
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className="new">
      <div className="top">
        <h1>{title}</h1>
      </div>
      <div className="bottom">
        <div className="left">
          <img
            src={
              !file
                ? 'https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg'
                : URL.createObjectURL(file)
            }
            alt="image"
          />
        </div>
        <div className="right">
          <form onSubmit={submitUser}>
            <div className="form-input">
              <label htmlFor="file">
                Image:
                <DriveFolderUpload className="icon" />
              </label>
              <input
                type="file"
                id="file"
                style={{ display: 'none' }}
                onChange={(e) => setFile(e.target.files[0])}
              />
            </div>
            {inputs.map((input, index) => (
              <div key={index} className="form-input">
                <label>{input.label}</label>
                <input
                  name={input.name}
                  type={input.type}
                  placeholder={input.placeholder}
                  value={inputs.value}
                  onChange={handleChange}
                  required
                />
              </div>
            ))}

            <button type="submit">Send</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default New;
