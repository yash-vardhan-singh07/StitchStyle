// ErrorPage.js
import React from 'react';

export const Error = () => {
  return (
    <div className="error-page">
      <h1>404: Page Not Found</h1>
      <p>
        The page you are looking for does not exist or has been moved. Please check
        the URL or go back to the homepage.
      </p>
      <button className="btn">
        <a href="/">Go Back to Homepage</a>
      </button>
    </div>
  );
};