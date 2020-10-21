import React, { Fragment } from 'react';

export default () => (
  <Fragment>
    <div className="spinner">
      <iframe
        src="https://giphy.com/embed/5889VEqpg1v0I"
        // frameBorder="0"
        className="giphy-embed iframe-spinner"
        allowFullScreen
      ></iframe>
    </div>
    <p>
      <a href="https://giphy.com/gifs/animated-picture-perfectloops-5889VEqpg1v0I">
        via GIPHY
      </a>
    </p>
    https://stackoverflow.com/questions/34743264/how-to-set-iframe-content-of-a-react-component
  </Fragment>
);
