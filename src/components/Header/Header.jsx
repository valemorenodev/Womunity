import{ useState } from 'react';
import {useNavigate} from 'react-router-dom';

import './Header.scss'

const Header = () => { 
    const navigate = useNavigate();
    const [dashboard, setDashboard] = useState([]);

    const handleLogin = () => {
        fetch('https://jsonplaceholder.typicode.com/posts?_limit=10')
        .then(response => response.json())
        .then((data) => {
            console.log(dashboard);
            navigate('/dashboard')
            setDashboard(data);
            return data;
        }).catch((err) => {
            console.log(err.message);
        });
      }

    return (
        <header className={ 'header'}>
            <div className={ 'header__content'}>
                <div className={ 'header__content--left'}>
                    <div className={ 'header__content--logo'}>
                        <img src='https://womenawards.globant.com/themes/custom/disruptor/logo-women%402x.png' alt='Womunity'/>
                    </div>
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
                </div>
                <div className={ 'header__content--actions'}>
                    <button className={ 'register'}>Registrate</button>
                    <button onClick={ handleLogin }>Entra a tu espacio</button>

                </div>
            </div>
        </header>
    )
  }
export default Header