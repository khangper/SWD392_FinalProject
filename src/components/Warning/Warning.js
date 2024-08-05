import React, { useEffect } from 'react';
import './Warning.css';

const Warning = ({ message }) => {
  return (
    <div className="warning">
      {message}
    </div>
  );
};

export default Warning;
