import Paragrafo from '../paragraph'
import Title from '../title'
import { Card, LinkBotao } from './styles'

const Projeto = () => (
  <Card>
    <Title>Projeto Lista de tarefas</Title>
    <Paragrafo tipo="secundario">Lista de tarefas feita com o VueJS</Paragrafo>
    <LinkBotao>Visualizar</LinkBotao>
  </Card>
)

export default Projeto
