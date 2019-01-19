import styled from 'styled-components'

const Navigation = styled.ul`
  width: 100%;
  z-index: 1;
  position: fixed;
  top: 0;
  overflow: hidden;
  display: flex;
  justify-content: space-evenly;
  list-style-type: none;
  margin: 0;
  padding: 0;
  background-color: #333;
  
  li {
    width: 100%;
    a {
      display: block;
      color: white;
      text-align: center;
      padding: 14px 16px;
      text-decoration: none;
        
      &:hover {
        background-color: #111;
      }
      
      &.active {
        background-color: #111;
        border-bottom: 3px solid #ccc;
      }
      
      i {
        float: left;
      }
    }  
  }
`

export default Navigation