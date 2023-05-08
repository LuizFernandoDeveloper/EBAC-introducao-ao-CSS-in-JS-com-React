import styled, { createGlobalStyle } from 'styled-components'

const EstiloGlobalComJs = createGlobalStyle`
  *{
    margin: 0;
    padding:0;
    font-family: 'Inter', sans-serif;
  }
  body{
    padding-top:80px;
    @media(max-width: 768px){
      padding-top: 16px;
    }
  }
`
export default EstiloGlobalComJs

export const Container = styled.div`
  max-width: 1024px;
  width: 100%;
  margin: 0 auto;
  padding: 0 15px;
  display: grid;
  grid-template-columns: 128px auto;
  column-gap: 56px;
  @media (max-width: 768px) {
    max-width: 80%;
    display: block;
  }
  img {
    max-width: 100%;
    width: 100%;
  }
`
