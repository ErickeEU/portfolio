import Avatar from '../../components/avatar'
import Title from '../../components/title'
import Paragrafo from '../../components/paragraph'
import { Descricao, BotaoTema, SidebarContainer } from './styles'

const Sidebar = () => (
  <aside>
    <SidebarContainer>
      <Avatar />
      <Title fontSize={20}>Ericke</Title>
      <Paragrafo tipo="secundario" fontSize={16}>
        ErickeEU
      </Paragrafo>
      <Descricao tipo="principal" fontSize={12}>
        Engenheiro Front-end
      </Descricao>
      <BotaoTema>Trocar tema</BotaoTema>
    </SidebarContainer>
  </aside>
)

export default Sidebar
