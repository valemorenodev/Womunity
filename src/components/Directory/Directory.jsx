import './Directory.scss'

import Avatar from '../../assets/images/avatar.png';

const Directory = () => {
    return (
      <section id="directory" className={ 'directory'}>
        <h2 className={ 'directory__title'}>Directorio de profesionales</h2>
        <p className={ 'directory__subtitle'}>
        Aquí encontrarás una lista de profesionales capacitados
y experimentados que se comprometen a brindar igualdad 
de oportunidades para todas las mujeres
        </p>

        <div className={ 'directory__cards'}>
            <div className={ 'directory__cards--item'}>
                <img src={Avatar} alt="avatar"/>
                <h3>Ana, Psicologa</h3>
                <p>Profesional dedicada y empática que se especializa en el bienestar emocional y mental de las mujeres.</p>
            </div>
            <div className={ 'directory__cards--item'}>
                <img src={Avatar} alt="avatar"/>
                <h3>Maria, Abogada</h3>
                <p>Profesional dedicada y empática que se especializa en el bienestar emocional y mental de las mujeres.</p>
            </div>
            <div className={ 'directory__cards--item'}>
                <img src={Avatar} alt="avatar"/>
                <h3>Laura, Ginecóloga</h3>
                <p>Profesional dedicada y empática que se especializa en el bienestar emocional y mental de las mujeres.</p>
            </div>
        </div>

        <div className={ 'directory__search'}>
            <label>Aquí encontrará una lista exhaustiva de mujeres líderes 
y expertas en diversos campos, desde la política hasta 
la ciencia y la tecnología.</label>
            <input type="search"  placeholder="Busca tu profesional..." id="site-search"  />
        </div>
      </section>
    );
  }
export default Directory