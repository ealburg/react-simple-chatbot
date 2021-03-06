import React from 'react';
// import LoadingStep from './LoadingStep';
// import Spinner from 'react-spinkit'

const Loading = props => {
  const { color } = props;
  return (
    <span className="rsc-loading" style={{ position: 'relative', top: -5, maxHeight: 40 }}>
      {/* <LoadingStep delay="0s">.</LoadingStep>
    <LoadingStep delay=".2s">.</LoadingStep>
    <LoadingStep delay=".4s">.</LoadingStep> */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 32 20"
        fill={ color ? color : 'black'}
        height="30"
      >
        <circle transform="translate(8 0)" cx="0" cy="16" r="0">
          <animate
            attributeName="r"
            values="0; 4; 0; 0"
            dur="1.2s"
            repeatCount="indefinite"
            begin="0"
            keyTimes="0;0.2;0.7;1"
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
            keyTimes="0;0.2;0.7;1"
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
            keyTimes="0;0.2;0.7;1"
            keySplines="0.2 0.2 0.4 0.8;0.2 0.6 0.4 0.8;0.2 0.6 0.4 0.8"
            calcMode="spline"
          />
        </circle>
      </svg>
    </span>
  );
};

export default Loading;
