import{ useState } from 'react';
import {useNavigate} from 'react-router-dom';
import logo from '../../assets/images/Womunity.png'
import loaderLogo from '../../assets/images/loader.gif'
import './Header.scss'

const Header = () => { 
    const navigate = useNavigate();
    const [dashboard, setDashboard] = useState([]);
    const [loader, setLoader] = useState(false);
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
            "email": "othertesting@yopmail.com", 
            "password": "Wires123"
        }
        )
    };

    const handleLogin = () => {
        setLoader(true);
        fetch('https://womunityback.onrender.com/api/user/login_user', requestOptions)
        .then(response => response.json())
        .then((data) => {
            navigate('/dashboard')
            setDashboard(data);
            console.log(dashboard);
            setLoader(true);
            return data;
        }).catch((err) => {
            console.log(err.message);
        });
      }

    return (
        <>
        {
            loader && (
                <div className={ 'loader'}>
                    <img src={loaderLogo}/>
                </div>
            )
        }
            <header className={ 'header'}>
                <div className={ 'header__content'}>
                    <div className={ 'header__content--left'}>
                        <div className={ 'header__content--logo'}>
                            <img src={logo} alt='Womunity'/>
                        </div>
                    </div>
                    <div className={ 'header__content--actions'}>
                    <div className={ 'header__content--links'}>
                            <ul>
                                <li>
                                    <a href="#categories">Temáticas</a>
                                </li>
                                <li>
                                    <a href="#directory">Directorio</a>
                                </li>
                                <li>
                                    <a href="#testimonials">Testimonios</a>
                                </li>
                            </ul>
                        </div>
                        <button className={ 'register'}>Registrate</button>
                        <button onClick={ handleLogin }>Entra a tu espacio</button>
    
                    </div>
                </div>
            </header>
        </>
    )
  }
export default Header