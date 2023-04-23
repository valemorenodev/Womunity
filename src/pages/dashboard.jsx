import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer';
import dashboard from '../assets/images/Dashboard-dg3.png'

const Dashboard = () => { 
    return (
      <>
      <Header />
        <img className='dashboard' src={dashboard}/>
      <Footer />
      </>
    )
  }
export default Dashboard