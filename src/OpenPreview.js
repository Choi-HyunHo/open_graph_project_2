import styled from 'styled-components'
import { useState, useEffect } from 'react'

const Container = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 50px;
`
const UrlContainer = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid #c8c8c8;
  box-shadow: 0px 15px 20px rgba(128, 128, 128, 0.4);
`

const Title = styled.h4`
  font-size: 20px;
  margin-bottom: 10px;
`

const Desc = styled.span`
  font-size: 15px;
  margin-bottom: 10px;
`

const Url = styled.span`
  font-size: 14px;
`

const Img = styled.img`
  width: 430px;
  height: 200px;
`

const OpenPreview = (data) => {
  const [title, setTitle] = useState('')
  const [url, setUrl] = useState('')
  const [image, setImage] = useState('')
  const [description, setDescription] = useState('')
  const [flag, setFlag] = useState(false)

  useEffect(() => {
    setTitle(data.data.title)
    setUrl(data.data.url)
    setImage(data.data.image)
    setDescription(data.data.description)
    console.log(data.data.url)

    if (data.data) {
      setFlag(true)
    } else {
      setFlag(false)
    }
  }, [data])

  console.log(data)

  return (
    <>
      <Container>
        <UrlContainer>
          {flag && (
            <div>
              <Img src={image} />
              <Title>{title}</Title>
              <Desc>{description}</Desc>
              <Url>{url}</Url>
            </div>
          )}
        </UrlContainer>
      </Container>
    </>
  )
}

export default OpenPreview
