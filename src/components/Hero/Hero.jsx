import './Hero.scss'

import heroImg from '../../assets/images/hero.png'

const Hero = () => {
  return (
    <section className={ 'hero'}>
      <div className={ 'hero__container'}>
        <div className={ 'hero__text'}>
          <h1>Conecta <strong>con mujeres</strong> de todo el mundo</h1>
          <p>Compartir información, recursos y oportunidades.</p>
          <button>Consigue tu comunidad</button>
        </div>
        <div className={ 'hero__image'}>
          <img src={heroImg} />
        </div>
      </div>
    </section>
  );
}

export default Hero;
