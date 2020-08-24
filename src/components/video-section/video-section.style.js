import styled from "styled-components";


export const IframeContainer = styled.div`
  overflow: hidden;
  /* 16:9 aspect ratio */
  padding-top: 50%;
  position: relative;
  border: none;
`;
export const Iframe = styled.iframe`
  border: 0;
  height: 100%;
  left: 0;
  position: absolute;
  top: 0;
  width: 100%;
  pointer-events: none;
`;

export const VideoContainer = styled.div`
  overflow: hidden;
  /* 16:9 aspect ratio */
  padding-top: 50%;
  position: relative;
  border: none;
`;

export const Video = styled.video`
  border: 0;
  height: 100%;
  left: 0;
  position: absolute;
  top: 0;
  width: 100%;
`;