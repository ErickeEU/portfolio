import styled from 'styled-components'

type BotaoProps = {
  principal: boolean
  fontSize?: string
}

const Botao = styled.button<BotaoProps>`
  background-color: ${(props) => (props.principal ? 'green' : 'blue')};
  font-size: ${(props) => props.fontSize || '16px'};
`

const BotaoPerigo = styled(Botao)`
  background-color: red;
  color: #fff;

  span {
    text-decoration: line-through;
  }
`

function Teste() {
  return (
    <>
      <Botao principal>Clica ai seu otario</Botao>
      <Botao principal={false} fontSize="14px">
        Clica ai seu otario
      </Botao>
      <BotaoPerigo principal as="a">
        <span>Clica aqui vai, se vc for homem</span>
      </BotaoPerigo>
    </>
  )
}

export default Teste
