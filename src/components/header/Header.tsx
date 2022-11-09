import React, { useState } from 'react'
import styled from '@emotion/styled'
import KodLayout from 'kod-layout'
import { Select } from '../UI/select'

const HeaderRoot = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0px 10px;
    background-color: ${props => props.theme.colors['header.background']};
    color: ${props => props.theme.colors['header.foreground']};
`

const Right = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  gap: 20px;
`

//ToDo [Yasin]: Alttaki languages veritabanından alınacak.
const languages = ["C", "C++", "C#", "Java", "JavaScript", "TypeScript", "Python", "Go", "Kotlin", "Ruby", "Rust"]

const Header = () => {
  const [language, setLanguage] = useState<number>(0)

  const handleChangeLanguage = (value: string, index: number) => {
    setLanguage(index)
  } 

  return (
    <KodLayout.Header className='kl-header'>
      <HeaderRoot>
        <h3>KodChallenge</h3>
        <Right>
          <Select data={languages} value={language} onChange={handleChangeLanguage} />
          <div>
            <link href='https://css.gg/options.css' rel='stylesheet' />
            <i title='Ayarlar' className="gg-options"></i>
          </div>
        </Right>
      </HeaderRoot>
    </KodLayout.Header>
  )
}

export default Header