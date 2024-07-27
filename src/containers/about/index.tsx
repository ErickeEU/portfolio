import Title from '../../components/title'
import Paragraph from '../../components/paragraph'
import { GithubSection } from './styles'

const Sobre = () => (
  <section>
    <Title fontSize={16}>Sobre Mim</Title>
    <Paragraph tipo="secundario">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Error praesentium
      doloribus totam nobis. Architecto dolore molestias nihil exercitationem
      illum consequatur repellendus saepe eius sequi, impedit et. Placeat sint
      facere quas.
    </Paragraph>
    <GithubSection>
      <img src="https://github-readme-stats.vercel.app/api?username=ErickeEU&show_icons=true&theme=dracula&include_all_commits=true&count_private=true" />
      <img src="https://github-readme-stats.vercel.app/api/top-langs/?username=ErickeEU&layout=compact&langs_count=7&theme=dracula" />
    </GithubSection>
  </section>
)

export default Sobre
