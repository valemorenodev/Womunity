import { Col, Row } from "react-bootstrap";
import "./Categories.scss"
import icon1 from '../../assets/images/icon1.png';
import icon2 from '../../assets/images/icon2.png';
import icon3 from '../../assets/images/icon3.png';
import icon4 from '../../assets/images/icon4.png';
import icon5 from '../../assets/images/icon5.png';
import icon0 from '../../assets/images/icon0.png';

const Categories = () => {

  return (
    <section id="categories" className={'categories'}>
      <div className={'categories__container'}>
        <div className={'categories__container--text'}>
          <h2>¡Únete a la conversación!</h2>
          <p>Participa y ayúdanos a promover una cultura de igualdad de género</p>
        </div>
        <Row className={'categories__container--cardsContainer'}>
          <Col>
            <article className={'cards'}>
              <div className={'circle'}>
                <img src={icon0} />
              </div>
              <span className={'cards--text'}>
                <strong>Desigualdad de género:</strong><br />
                Falta de oportunidades laborales, la brecha salarial,
                la violencia de género, la falta de acceso a la educación
                y otros ámbitos de la vida.</span>
            </article>
          </Col>
          <Col>
            <article className={'cards'}>
            <div className={'circle'}>
                <img src={icon1} />
              </div>
              <span className={'cards--text'}>
                <strong>Menstruación:</strong><br />
                Estereotipos negativos y tabúes culturales que pueden limitar
                el acceso de las mujeres a la educación, la atención médica
                y otros recursos necesarios.</span>
            </article>
          </Col>
          <Col>
            <article className={'cards'}>
            <div className={'circle'}>
                <img src={icon2} />
              </div>
              <span className={'cards--text'}>
                <strong>Salud mental:</strong><br />
                Desde la presión de cumplir con los estereotipos de género,
                hasta la carga excesiva de responsabilidades en el hogar y en el trabajo.
              </span>
            </article>
          </Col>
        </Row>
        <Row className={'categories__container--cardsContainer'}>
          <Col className={'colCards'}>
            <article className={'cards'}>
            <div className={'circle'}>
                <img src={icon3} />
              </div>
              <span className={'cards--text'}>
                <strong>Acoso laboral:</strong><br />
                Víctimas de comportamientos abusivos, intimidatorios,
                humillantes u ofensivos, lo que puede causarles un gran daño
                psicológico y físico.</span>
            </article>
          </Col>
          <Col>
            <article className={'cards'}>
            <div className={'circle'}>
                <img src={icon4} />
              </div>
              <span className={'cards--text'}>
                <strong>Menopausia:</strong><br />
                Tratadas de manera injusta
                o desfavorable por los
                cambios en su cuerpo o que
                su capacidad de trabajo ha disminuido debido a su edad.</span>
            </article>
          </Col>
          <Col>
            <article className={'cards'}>
            <div className={'circle'}>
                <img src={icon5} />
              </div>
              <span className={'cards--text'}>
                <strong>Madre cabeza de hogar:</strong><br />
                Desafíos como la falta de reconocimiento y remuneración por su trabajo, falta de tiempo
                y recursos para sus propias necesidades.
              </span>
            </article>
          </Col>
        </Row>
        <section className={'mensage'}>Empieza a compartir</section>
      </div>
    </section >
  );
}

export default Categories;
