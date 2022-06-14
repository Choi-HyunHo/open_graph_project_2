import { useState } from 'react'
import styled from 'styled-components'
import OpenPreview from './OpenPreview'

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

const UrlEditor = () => {
  // URL data
  const [data, setData] = useState('')

  return (
    <>
      <UrlInputContainer>
        <UrlInputStyle
          type="url"
          placeholder="https://"
          value={data}
          onChange={(e) => {
            setData(e.target.value)
          }}
        />
      </UrlInputContainer>
      <SubmitBtn>확인</SubmitBtn>
      <OpenPreview url={data}></OpenPreview>
    </>
  )
}

export default UrlEditor
