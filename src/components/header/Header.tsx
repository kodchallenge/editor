import React from 'react'
import styled from '@emotion/styled'
import KodLayout from 'kod-layout'

const HeaderRoot = styled.div`
    height: 100%;
    width: 100%;
    background-color: ${props => props.theme.colors['header.background']};
    color: ${props => props.theme.colors['header.foreground']};
`

const Header = () => {
  return (
    <KodLayout.Header className='kl-header'>
      <HeaderRoot>
        <h3>KodChallenge</h3>
      </HeaderRoot>
    </KodLayout.Header>
  )
}

export default Header