import styled from 'styled-components'

const MainContainer = styled.div`
  text-align: center;
  margin-top: 48px;
  
  a {
    text-decoration: none;
    position: relative;
    
    h2 { 
      position: absolute; 
      bottom: 0; 
      right: 0; 
  
      span {
        font: bold 16px/33px Helvetica, Sans-Serif; 
        letter-spacing: -1px;  
        background: rgb(0, 0, 0); /* fallback color */
        background: rgba(0, 0, 0, 0.7);
        padding: 10px; 
        position: relative;
        left: 0;
        bottom: 21px;
        color: white;
      }
    }
  }  
    
  img {
    margin: 0 2px;
  }
`

export default MainContainer