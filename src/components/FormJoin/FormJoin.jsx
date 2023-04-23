import { Container, Row, Col, Form, Image } from "react-bootstrap";
import './FormJoin.scss'
import formImg from '../../assets/images/formImg.png'

const FormJoin = () => {
  return (
    <div className={'form'}>
      <Container>
        <Row>
          <Col>
            <Image src={formImg} />
          </Col>
          <Col>
            <Form action="" className={'form_container'}>
              <h5 className={"form_container--label"}>Encuentra tu comunidad llenando este formulario:</h5>
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
