import { useState } from 'react'
import TwoColumnLayout from './layouts/TwoColumnLayout'
import '../node_modules/kod-markdown/dist/style.css'
import KodButton from './components/UI/button/KodButton'

function App() {

  return (
    <div className="App">
      {/* <TwoColumnLayout /> */}
      <KodButton status='primary'>Yasin Torun</KodButton>
      </div>
  )
}

export default App
