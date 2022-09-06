import React, { useState } from 'react';
import './new.scss';
import { DriveFolderUpload } from '@mui/icons-material';
const New = ({ inputs, title }) => {
  const [file, setFile] = useState('');
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
          <form>
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
                <input type={input.type} placeholder={input.placeholder} />
              </div>
            ))}

            <button>Send</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default New;
