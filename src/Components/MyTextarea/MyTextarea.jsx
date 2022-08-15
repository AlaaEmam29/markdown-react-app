import React, { useCallback, useEffect, useRef } from 'react'
import Textarea from 'react-expanding-textarea'
import { useGlobalContext } from '../Context/Context'
const MyTextarea = () => {
  const textareaRef = useRef(null)

  const handleChange = useCallback(e => {
    setMarkdown(e.target.value)
  }, [])

  useEffect(() => {
    textareaRef.current.focus()
  }, [])
const { markdown, setMarkdown } = useGlobalContext()
  return (
    <div className="">
     
      <Textarea
        className="textarea shadow"
        defaultValue={markdown}
        id="my-textarea"
        maxLength="3000"
        name="pet[notes]"
        onChange={handleChange}
        ref={textareaRef}
      />
    </div>
  )
}
export default MyTextarea;