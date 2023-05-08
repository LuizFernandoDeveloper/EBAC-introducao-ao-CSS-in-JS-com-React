import Paragrafo from '../../components/paragrafo'
import Titulo from '../../components/titulo'
import { GithubSecao } from './styles'

const Sobre = () => (
  <section>
    <Titulo fontSize={16}>Sobre min</Titulo>
    <Paragrafo tipo="principal">
      Lorem ipsum, dolor sit amet consectetur adipisicing elit. Pariatur sed,
      est laboriosam nihil suscipit provident architecto maxime. Iste hic
      corporis, necessitatibus voluptatem molestias iusto maxime aspernatur
      dolorem cumque natus! Magni.
    </Paragrafo>
    <GithubSecao>
      <img
        height="180em"
        src="https://github-readme-stats.vercel.app/api?username=LuizFernandoDeveloper&show_icons=true&theme=dracula&include_all_commits=true&count_private=true"
        alt="luiz"
      />
      <img
        height="180em"
        src="https://github-readme-stats.vercel.app/api/top-langs/?username=LuizFernandoDeveloper&layout=compact&langs_count=7&theme=dracula"
        alt="luiz"
      />
    </GithubSecao>
  </section>
)
export default Sobre
