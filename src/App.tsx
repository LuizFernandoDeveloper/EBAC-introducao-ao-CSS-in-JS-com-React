import Sobre from './containers/Sobre'
import Projetos from './containers/projetos'
import SiderBar from './containers/sidebar'
import EstiloGlobalComJs, { Container } from './styles'

function App() {
  return (
    <>
      <EstiloGlobalComJs />
      <Container>
        <SiderBar />
        <main>
          <Sobre />
          <Projetos />
        </main>
      </Container>
    </>
  )
}

export default App
