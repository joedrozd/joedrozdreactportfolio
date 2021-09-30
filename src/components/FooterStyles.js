
import styled from 'styled-components';
   
export const Box = styled.div`
  padding: 80px 100px;
  background: #FF0101;
  background: -webkit-linear-gradient(top left, #FF0101, #000000);
  background: -moz-linear-gradient(top left, #FF0101, #000000);
  background: linear-gradient(to bottom right, #FF0101, #000000);
  bottom: 0;
  width: 100%;
  
   
  @media (max-width: 1000px) {
    padding: 70px 30px;
  }
`;
   
export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    max-width: 1080px;
    margin: 0 auto;
    /* background: red; */
`
   
export const Column = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  margin-left: 10%
`;
   
export const Row = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, 
                         minmax(200px, 1fr));
  grid-gap: 20px;
   
  @media (max-width: 1080px) {
    grid-template-columns: repeat(auto-fill, 
                           minmax(200px, 1fr));
  }
`;
   
export const FooterLink = styled.a`
  color: black;
  margin-bottom: 20px;
  font-size: 18px;
  text-decoration: none;
   
  &:hover {
      color: LightBlue;
      transition: 200ms ease-in;
  }
`;
   
export const Heading = styled.p`
  font-size: 24px;
  color: Black;
  margin-bottom: 40px;
  font-weight: bold;
`;