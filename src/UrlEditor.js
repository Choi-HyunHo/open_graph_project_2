import { useState } from 'react'
import styled from 'styled-components'

const UrlInputContainer = styled.div`
  margin: 30px 0 0 0;
  display: flex;
  justify-content: center;
`

const UrlInputStyle = styled.input`
  width: 35vw;
  height: 30px;
  border: none;
  border-bottom: 1px solid black;
  outline: none;
  font-size: 20px;
  &::placeholder {
    font-size: 20px;
  }
`

const SubmitBtn = styled.button`
  margin-left: 30px;
  margin-top: 30px;
  width: 35vw;
  height: 5vh;
  border: none;
  border-radius: 10px;
  font-weight: bold;
  cursor: pointer;
  font-size: 18px;
`

const UrlEditor = ({ onCreate }) => {
  // URL data
  const [urlData, setUrlData] = useState('')

  const handleSubmit = () => {
    onCreate(urlData)
  }

  console.log(urlData)

  return (
    <>
      <UrlInputContainer>
        <UrlInputStyle
          type="url"
          placeholder="https://"
          value={urlData}
          onChange={(e) => {
            setUrlData(e.target.value)
          }}
        />
      </UrlInputContainer>
      <SubmitBtn onClick={handleSubmit}>확인</SubmitBtn>
    </>
  )
}

export default UrlEditor
