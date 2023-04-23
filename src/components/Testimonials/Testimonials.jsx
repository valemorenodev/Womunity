import './Testimonials.scss'

import majoAvatar from '../../assets/images/majo.png';
import luisnyAvatar from '../../assets/images/luisny.png';

const Testimonials = () => {
    return (
      <section id="testimonials" className={ 'testimonials'}>
        <h2 className={ 'testimonials__title'}>Testimonios</h2>
        <p className={ 'testimonials__subtitle'}>Participa y ayúdanos a promover una cultura de igualdad de género</p>

        <div className={ 'testimonials__cards'}>
            <div className={ 'testimonials__cards--item'}>
              <div className={ 'testimonials__cards--item-image'}>
                <img src={majoAvatar} alt="avatar"/>
              </div>
              <h3>Maria José Plata</h3>
              <p> “Yo durante la universidad no tenía casi compañeras mujeres, ese apoyo femenino que me sienta cercana, <strong>es que no puedo decir que tengo la regla.</strong>”</p>
            </div>
            <div className={ 'testimonials__cards--item'}>
                <div className={ 'testimonials__cards--item-image'}>
                  <img src={luisnyAvatar} alt="avatar"/>
                </div>
                <h3>Luisny Ugarte</h3>
                <p> “Cuando trabajo con hombres, me siento segregada, me 
toca primero demostrar que soy demasiado buena, <strong>demostrar 
el doble para que me validen</strong>.”</p>
            </div>
        </div>
      </section>
    );
  }
export default Testimonials