import styled from 'styled-components'
import web3 from '../../assets/img/web3.svg'

export const Wrapper = styled.div`
  .web3 {
    background: url(${web3}) center no-repeat;
    background-size: contain;
    display: grid;
    align-content: center;
    height: 500px;
    
    .h1 > h1{
      width: 50%;
      margin: 10px auto;
      text-align: center;
      font-size: 3.5em;
      font-weight: 900;
    }
    
    p {
      font-weight: 700;
      font-size: 22px;
    }
  }
  

  @media (max-width: 767px) {
  
  }
`
