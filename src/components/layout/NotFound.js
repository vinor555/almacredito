import React, { Fragment } from 'react';

const NotFound = () => {
  return (
    <Fragment>
      <h1 className='x-large text-primary'>
        <i className='fas fa-exclamation-triangle' />Page Not Found
      </h1>
      <p className='large'>Sorry, this page does not exist</p>
      <h5>404s and heartbreaks :(</h5>
    </Fragment>
  );
};

export default NotFound;