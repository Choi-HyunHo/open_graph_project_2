import './App.css'
import Header from './Header'
import Title from './Title'
import User from './User'
import UrlEditor from './UrlEditor'

function App() {
  return (
    <>
      <Header left={'<'} center={'URL 등록'} right={'>'}></Header>
      <User left={'밝은_코브라'} right={'🔻'} />
      <Title></Title>
      <UrlEditor></UrlEditor>
    </>
  )
}

export default App
