import './App.css'
import Banner from './components/Banner/Banner'
import BoxVideo from './components/BoxVideo/BoxVideo'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import MainContent from './components/MainContent/MainContent'
import Navbar from './components/Navbar/Navbar'
import Social from './components/Social/Social'
import TopicNews from './components/TopicNews/TopicNews'
import TopNav from './components/TopNav/TopNav'

function App() {

  return (
    <>
      <TopNav />
      <Header />
      <Navbar />
      <Banner />
      <MainContent />
      <BoxVideo />
      <TopicNews />
      <Social />
      <Footer />
    </>
  )
}

export default App
