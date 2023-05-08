import { P } from './P'

export type Props = {
  children: string
  tipo?: 'principal' | 'secundario'
}

const Paragrafo = (props: Props) => <P tipo={props.tipo}>{props.children}</P>

export default Paragrafo
