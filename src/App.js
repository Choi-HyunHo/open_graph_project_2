import './App.css'
import Header from './components/Header'
import Title from './components/Title'
import User from './components/User'
import UrlEditor from './components/UrlEditor'
import OpenPreview from './components/OpenPreview'

import { useState } from 'react'

function App() {
  // OpenPreview 로 전달되는 데이터
  const [data, setData] = useState('')

  const onCreate = (urlData) => {
    setData(urlData)
  }

  return (
    <>
      <Header left={'<'} center={'URL 등록'} right={'>'}></Header>
      <User left={'밝은_코브라'} right={'🔻'} />
      <Title />
      <UrlEditor onCreate={onCreate}></UrlEditor>
      <OpenPreview data={data}></OpenPreview>
    </>
  )
}

export default App
