import React from 'react'
import { useGlobalContext } from '../Context/Context'
import ReactMarkdown from 'react-markdown'
export default function Results() {
    const {markdown}    = useGlobalContext()
  return (
    <article>
    <ReactMarkdown>
    {markdown}
    </ReactMarkdown>
    </article>
  )
}
