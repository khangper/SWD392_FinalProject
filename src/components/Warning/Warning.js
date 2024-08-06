import React, { useEffect } from 'react';
import './Warning.css';

const Warning = ({ message, onClose }) => {
  useEffect(() => {
    const timer = setTimeout(onClose, 3000); // Hide warning after 3 seconds
    return () => clearTimeout(timer);
  }, [onClose]);

  return (
    <div className="warning">
      {message}
    </div>
  );
};

export default Warning;
