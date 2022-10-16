import React, { useEffect, useState } from 'react'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import rehype from 'rehype-highlight'
import rehypeRaw from "rehype-raw"
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import {oneDark} from 'react-syntax-highlighter/dist/esm/styles/prism'

const InformationPage = () => {
  const [markdown, setMarkdown] = useState<string | null>(null)

  useEffect(() => {
    fetch("/sample.md")
      .then(res => res.text())
      .then(text => {
        setMarkdown(text)
      })
  }, [])

  return markdown && (
    <div className='page-tab markdown'>
      <ReactMarkdown
        components={{
          code({ node, inline, className, children, ...props }) {
            const match = /language-(\w+)/.exec(className || '')
            return !inline && match ? (
              <SyntaxHighlighter
                children={String(children).replace(/\n$/, '')}
                //@ts-ignore
                style={oneDark}
                language={match[1]}
                PreTag="div"
                {...props}
              />
            ) : (
              <code className={className} {...props}>
                {children}
              </code>
            )
          }
        }}
      >
        {markdown}
      </ReactMarkdown>
    </div>
  )
}

export default InformationPage