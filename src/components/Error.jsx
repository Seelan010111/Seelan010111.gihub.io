import React from 'react';
import Lottie from 'lottie-react-web';
import errorAnimation from '../animations/404-error.json';

export const Error = () => (
  <Lottie
    options={{
      animationData: errorAnimation
    }}
  />
)