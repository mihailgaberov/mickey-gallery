import styled from 'styled-components'

const imgPath = require('../../images/loader.gif')
const Spinner = styled.div`
    width: 31px;
    height: 31px;
    margin: 0 auto;
    background-image: url(${imgPath});
`

export default Spinner