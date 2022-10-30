import styled from '@emotion/styled'
import '../node_modules/kod-markdown/dist/style.css'
import TwoColumnLayout from './layouts/TwoColumnLayout'

const AppRoot = styled.main`
  background-color: ${props => props.theme.colors['app.background']};
  color: ${props => props.theme.colors['app.foreground']};
  height: 100%;
`

function App() {

  return (
    <AppRoot>
      <TwoColumnLayout />
    </AppRoot>
  )
}

export default App
