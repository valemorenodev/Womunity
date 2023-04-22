import { Container, Row, Col } from "react-bootstrap";
import Style from "./Hero.css"

const Hero = () => {
  return (
    <Container>
      <Row>
        <Col>
          <h1>Conecta a mujeres de todo el mundo</h1>
          <p>Compartir información, recursos y oportunidades.</p>
          <button className={Style.Button}>Conoce más</button>
        </Col>
        <Col>
          <div className={Style.Image}></div>
        </Col>
      </Row>
    </Container>
  );
}

export default Hero;
