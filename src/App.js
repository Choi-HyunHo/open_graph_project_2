import './App.css'
import Header from './Header'
import Title from './Title'
import User from './User'
import UrlEditor from './UrlEditor'
import { useState } from 'react'
import OpenPreview from './OpenPreview'

function App() {
  const [data, setData] = useState('')

  const onCreate = (url) => {
    setData(url)
  }

  return (
    <>
      <Header left={'<'} center={'URL 등록'} right={'>'}></Header>
      <User left={'밝은_코브라'} right={'🔻'} />
      <Title></Title>
      <UrlEditor onCreate={onCreate}></UrlEditor>
      <OpenPreview data={data}></OpenPreview>
    </>
  )
}

export default App
