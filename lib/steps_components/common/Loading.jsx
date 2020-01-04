import React from 'react';
// import LoadingStep from './LoadingStep';
// import Spinner from 'react-spinkit'

const Loading = () => (
  <span className="rsc-loading" style={{ position: 'relative', top: -5 }}>
    {/* <LoadingStep delay="0s">.</LoadingStep>
    <LoadingStep delay=".2s">.</LoadingStep>
    <LoadingStep delay=".4s">.</LoadingStep> */}
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 20" fill="rgb(20, 126, 251)">
      <circle transform="translate(8 0)" cx="0" cy="16" r="0">
        <animate
          attributeName="r"
          values="0; 4; 0; 0"
          dur="1.2s"
          repeatCount="indefinite"
          begin="0"
          keytimes="0;0.2;0.7;1"
          keySplines="0.2 0.2 0.4 0.8;0.2 0.6 0.4 0.8;0.2 0.6 0.4 0.8"
          calcMode="spline"
        />
      </circle>
      <circle transform="translate(16 0)" cx="0" cy="16" r="0">
        <animate
          attributeName="r"
          values="0; 4; 0; 0"
          dur="1.2s"
          repeatCount="indefinite"
          begin="0.3"
          keytimes="0;0.2;0.7;1"
          keySplines="0.2 0.2 0.4 0.8;0.2 0.6 0.4 0.8;0.2 0.6 0.4 0.8"
          calcMode="spline"
        />
      </circle>
      <circle transform="translate(24 0)" cx="0" cy="16" r="0">
        <animate
          attributeName="r"
          values="0; 4; 0; 0"
          dur="1.2s"
          repeatCount="indefinite"
          begin="0.6"
          keytimes="0;0.2;0.7;1"
          keySplines="0.2 0.2 0.4 0.8;0.2 0.6 0.4 0.8;0.2 0.6 0.4 0.8"
          calcMode="spline"
        />
      </circle>
    </svg>
  </span>
);

export default Loading;
