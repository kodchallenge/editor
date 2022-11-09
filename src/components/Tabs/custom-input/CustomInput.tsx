import styled from '@emotion/styled'
import React from 'react'

const Root = styled.div`
  width: 100%;
  height: 100%;
  flex-grow: 1;
  display:flex;
  flex-direction: column;
`

const InputArea = styled.textarea`
  all: unset;
  width: 100%;
  height: 100%;
  flex-grow: 1;
  box-sizing: border-box;
  border: 2px solid #dde6ff0f;
  cursor: text;
  white-space: pre-wrap;
  overflow-wrap: break-word;
  column-count: initial !important;
  margin-bottom: 10px;
`

const CustomInput = () => {
  return (
    <Root>
      <p>Aşağıdaki alana parametreleri sırasıyla alt alta yazınız.</p>
      <InputArea  />
    </Root>
  )
}

export default CustomInput