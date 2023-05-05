import styled from 'styled-components'

type BotoaProps = {
  princiapal: boolean
  fontSize?: string
}
const Botao = styled.button<BotoaProps>`
  background-color: ${(props) => (props.princiapal ? 'green' : 'blue')};

  height: 40px;
  margin-left: 40px;

  font-size: ${(props) => props.fontSize || '16px'};
`
const Btn = styled(Botao)`
  background-color: red;
  color: #fff;

  span {
    text-decoration: line-through;
    span {
      color: blue;
    }
  }
`

function Teste() {
  return (
    <>
      <Botao fontSize="" princiapal={true}>
        gree
      </Botao>
      <Botao fontSize="30px" princiapal={false}>
        blue
      </Botao>
      <Btn as="button" princiapal>
        <span>
          Não clique <span>aqui</span>
        </span>
      </Btn>
    </>
  )
  styled
}

export default Teste
