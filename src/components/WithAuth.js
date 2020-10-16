import React from 'react';
import ReactGA from 'react-ga';
import { Redirect } from 'react-router-dom';

const WithAuth = Component => {
  return props => {
    const trackingId = process.env.TRACKING_ID;
    ReactGA.initialize(trackingId);
    ReactGA.set({ userId: props.user.user_id });
    if (props.user.isLoggedIn) return <Component {...props} />;
    return <Redirect to='/' />;
  };
};

export default WithAuth;
