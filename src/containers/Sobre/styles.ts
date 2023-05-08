import styled from 'styled-components'

export const GithubSecao = styled.div`
  display: flex;
  width: 100%;
  @media (max-width: 768px) {
    flex-direction: column;
  }
  img {
    width: 50%;
    height: 157px;
    @media (max-width: 768px) {
      width: 100%;
      height: auto;
    }
  }
`
