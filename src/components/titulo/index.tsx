import { Titulo as Style } from './styles'

export type Props = {
  valor?: string // valor não aceita coisa dentro como por exemplo <nameTag> name </nameTag>
  children?: string //com esse nome podemos pegar valores inseridos no meio da tag
  fontSize?: number
}

const Titulo = (props: Props) => (
  <Style fontSize={props.fontSize}>{props.children}</Style>
)

export default Titulo
