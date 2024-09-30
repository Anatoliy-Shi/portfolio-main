import styled from "styled-components";

export const SectionProfileWrapper = styled.div`
  width: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  border-radius: 200px 0 200px 0;
  border: 1px solid #fff;
  z-index: 2;
  margin: 0 15px 80px;

  background: linear-gradient(132deg, rgb(160 188 253 / 50%) 0%, rgba(0, 71, 255, 0.05) 100%);
  backdrop-filter: blur(20px);
  
  @media screen and (max-width: 768px) {
    margin: 40px 101px 92px;
  }
  @media screen and (max-width: 620px) {
    border-radius: 115px 0 115px 0;
  }
 
  `