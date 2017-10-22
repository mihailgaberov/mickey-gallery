import styled from 'styled-components'

const Navigation = styled.ul`
  width: 100%;
  position: fixed;
  display: flex;
  justify-content: space-evenly;
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
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
      }
    }  
  }
`

export default Navigation