import './Directory.scss'

import Avatar from '../../assets/images/avatar.png';

const Directory = () => {
    return (
      <section className={ 'directory'}>
        <h2 className={ 'directory__title'}>Directorio de profesionales</h2>
        <p className={ 'directory__subtitle'}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>

        <div className={ 'directory__cards'}>
            <div className={ 'directory__cards--item'}>
                <img src={Avatar} alt="avatar"/>
                <h3>Title</h3>
                <p>Ana, es una profesional dedicada y empática que se especializa en el bienestar emocional y mental de las mujeres.</p>
            </div>
            <div className={ 'directory__cards--item'}>
                <img src={Avatar} alt="avatar"/>
                <h3>Title</h3>
                <p>Ana, es una profesional dedicada y empática que se especializa en el bienestar emocional y mental de las mujeres.</p>
            </div>
            <div className={ 'directory__cards--item'}>
                <img src={Avatar} alt="avatar"/>
                <h3>Title</h3>
                <p>Ana, es una profesional dedicada y empática que se especializa en el bienestar emocional y mental de las mujeres.</p>
            </div>
        </div>

        <div className={ 'directory__search'}>
            <label>Buscar</label>
            <input type="search" id="site-search"  />
        </div>
      </section>
    );
  }
export default Directory