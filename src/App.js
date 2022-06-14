import './App.css'
import Header from './Header'
import UrlEditor from './UrlEditor'

function App() {
  return (
    <>
      <Header left={'<'} center={'URL 등록'} right={'>'}></Header>
      <UrlEditor></UrlEditor>
    </>
  )
}

export default App
