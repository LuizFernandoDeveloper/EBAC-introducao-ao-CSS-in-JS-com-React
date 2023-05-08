import { P } from './P'

export type Props = {
  children: string
  tipo?: 'principal' | 'secundario'
  fontSize?: string
}

const Paragrafo = (props: Props) => (
  <P font-size={props.fontSize} tipo={props.tipo}>
    {props.children}
  </P>
)

export default Paragrafo
