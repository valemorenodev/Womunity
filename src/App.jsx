import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import Header from './components/Header/Header'
import Hero from './components/Hero/Hero';
import Directory from './components/Directory/Directory';
import Categories from './components/Categories/Categories';

function App() {

  return (
    <>
      <Header />
      <Hero />
      <Categories />
      <Directory />
    </>
  )
}

export default App
