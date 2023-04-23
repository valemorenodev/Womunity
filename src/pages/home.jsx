import Header from '../components/Header/Header'
import Hero from '../components/Hero/Hero';
import Directory from '../components/Directory/Directory';
import Categories from '../components/Categories/Categories';
import Testimonials from '../components/Testimonials/Testimonials';
import FormJoin from '../components/FormJoin/FormJoin';


function Home() {

  return (

    <>
      <Header />
      <div className={'bg-main'}>
        <Hero />
        <Categories />
      </div>
      <Directory />
      <div className='testimonials-main'>
        <Testimonials />
      </div>
      <FormJoin />
    </>

  )
}

export default Home
