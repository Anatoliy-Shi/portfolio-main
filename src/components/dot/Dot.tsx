import styled from "styled-components";

const dotPropsType = {
    width: 'string',
    height: 'string'
}
export const DotStyle = styled.div<typeof dotPropsType>`
  background: linear-gradient(180deg, #A6BCFA 0%, #2157F2 100%);
  border-radius: 50%;
  margin-top: 4px;
  
  @media (min-width: 767px) {
      width: ${props => props.width};
      height: ${props => props.height};
    }
  
 @media (max-width: 767px) {
    width: 11px;
    height: 11px;
  }
`
