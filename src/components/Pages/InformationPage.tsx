import React from 'react'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'

const markdown = `just a link: https://kodchallenge.com`

const InformationPage = () => {
  return (
    <div>
      <ReactMarkdown children={markdown} remarkPlugins={[remarkGfm]} />,
    </div>
  )
}

export default InformationPage