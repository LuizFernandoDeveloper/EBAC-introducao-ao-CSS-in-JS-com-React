import Paragrafo from '../../components/paragrafo'
import Avatar from '../../components/Avatar'
import Titulo from '../../components/titulo'
import { BotaoTema, Description, SideBarContainer } from './styles'

const SiderBar = () => (
  <aside>
    <SideBarContainer>
      <Avatar />
      <Titulo fontSize={20}>Luiz Fernando</Titulo>
      <Paragrafo fontSize="16" tipo="secundario">
        LuizDeveloper
      </Paragrafo>
      <Description tipo="principal">Engenheiro FrontEnd</Description>
      <BotaoTema>Trocar tema</BotaoTema>
    </SideBarContainer>
  </aside>
)

export default SiderBar
