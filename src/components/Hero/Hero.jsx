import './Hero.scss'

import test from '../../assets/images/test.webp'

const Hero = () => {
  return (
    <section className={ 'hero'}>
      <div className={ 'hero__container'}>
        <div className={ 'hero__text'}>
          <h1>Conecta con mujeres de todo el mundo</h1>
          <p>Compartir información, recursos y oportunidades.</p>
          <button>Entra a tu espacio</button>
        </div>
        <div className={ 'hero__image'}>
          <img src={test} />
        </div>
      </div>
    </section>
  );
}

export default Hero;
