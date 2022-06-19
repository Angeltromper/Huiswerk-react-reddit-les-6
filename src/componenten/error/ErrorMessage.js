import React from 'react';
import './ErrorMessage-module.css';

function ErrorMessage({ children }) {
    return (
        <p className="error-message">{children}</p>
    );
}

export default ErrorMessage;