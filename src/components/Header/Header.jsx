import './Header.scss'

const Header = () => {  
    return (
        <header className={ 'header'}>
            <div className={ 'header__content'}>
                <div className={ 'header__content--logo'}>
                    <img src='https://womenawards.globant.com/themes/custom/disruptor/logo-women%402x.png' alt='Womunity'/>
                </div>
                <div className={ 'header__content--actions'}>
                    <button className={ 'register'}>Registrate</button>
                    <button>Entra a tu espacio</button>
                </div>
            </div>
        </header>
    )
  }
export default Header