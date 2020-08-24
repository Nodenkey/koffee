import styled from "styled-components";


export const LocationWrapper = styled.section`
  width: 100vw;
  .mapouter{
  position:relative;
  text-align:right;
  height:500px;
  width: 100%;
  }
  .gmap_canvas{
  overflow:hidden;
  background:none!important;
  height:500px;
  width: 100%;
  }
  &::before{ 
  display: block; 
  content: " "; 
  margin-top: -50px; 
  height: 100px; 
  visibility: hidden; 
  pointer-events: none;
}
`;