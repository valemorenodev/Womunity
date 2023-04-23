import { Container, Row, Col, Form } from "react-bootstrap";
import './FormJoin.scss'
import formStar1 from '../../assets/images/formStar1.png'
import formStar2 from '../../assets/images/formStar2.png'
import formImage1 from '../../assets/images/formImg1.png'
import formImage2 from '../../assets/images/formImg2.png'

const FormJoin = () => {
  return (
    <div className={'form'}>
      <Container>
        <Row>
          <Col>
            <div className={"form_image"}>
              <img src={formImage2} alt="" className={"form_image--item"} />
              <img src={formStar2} alt="" className={"form_circle"} />
            </div>
            <div className={"form_image"}>
              <img src={formStar1} alt="" className={"form_circle"} />
              <img src={formImage1} alt="" className={"form_image--item"} />
            </div>
          </Col>
          <Col>
            <Form action="" className={'form_container'}>
              <h5>Encuentra tu comunidad llenando este formulario:</h5>
              <Form.Control className={'inputs'} type="text" placeholder="Nombre y apellido" />
              <Form.Control className={'inputs'} type="text" placeholder="Correo electrónico" />
              <Form.Control className={'inputs'} type="text" placeholder="Lugar de residencia" />
              <Form.Control className={'inputs'} type="text" placeholder="Edad" />
              <select className={'inputs--select'} placeholder="¿Con qué problemática te sientes identificada?">
                <option value="0">¿Con qué problemática te sientes identificada?</option>
                <option value="1">1</option>
                <option value="2">1</option>
              </select>
              <Form.Control className={'inputs--mensage'} type="text" placeholder="¿Por qué quieres pertenecer a esta comunidad?" />
              <button className={'form_button'}>Enviar</button>
            </Form>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default FormJoin;
