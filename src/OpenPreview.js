import styled from 'styled-components'
import { useState, useEffect } from 'react'

// import Resize from './Resize'

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 20vw;
  margin: 50px auto 0px auto;
`
const UrlContainer = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid #c8c8c8;
  box-shadow: 0px 15px 20px rgba(128, 128, 128, 0.4);
  padding: 20px;
  border-radius: 30px;
`

const Title = styled.h4`
  font-size: 20px;
  margin: 10px 0;
`

const Desc = styled.span`
  font-size: 15px;
  margin-bottom: 10px;
`

const Img = styled.img`
  width: 350px;
  height: 200px;
`

const Url = styled.span`
  font-size: 14px;
  display: block;
  margin: 20px 0 0 0;
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
        {flag && (
          <UrlContainer>
            <Img src={image} />
            {/*<Resize src={image} width={100} height={100}></Resize>*/}
            <Title>{title}</Title>
            <Desc>{description}</Desc>
            <Url>{url}</Url>
          </UrlContainer>
        )}
      </Container>
    </>
  )
}

export default OpenPreview
