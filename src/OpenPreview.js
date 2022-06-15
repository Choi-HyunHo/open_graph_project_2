// import { LinkPreview } from '@dhaiwat10/react-link-preview'
import styled from 'styled-components'
import { useState, useEffect } from 'react'

const Container = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 50px;
`
const OpenPreview = (data) => {
  const [title, setTitle] = useState('')
  const [urlData, setUrlData] = useState('')
  const [image, setImage] = useState('')
  const [description, setDescription] = useState('')

  useEffect(() => {
    setTitle(data.data.title)
    setUrlData(data.data.url)
    setImage(data.data.image)
    setDescription(data.data.description)
  }, [data])

  return (
    <Container>
      {/*<LinkPreview url={data.data} width="450px" height="300px"></LinkPreview>*/}
      <div>{urlData}</div>
      <div>{title}</div>
      <img src={image}></img>
      <div>{description}</div>
    </Container>
  )
}

export default OpenPreview
