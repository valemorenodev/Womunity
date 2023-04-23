import './Footer.scss'
import logo from '../../assets/images/logoWhite.png'
import social from '../../assets/images/social.png'

const Footer = () => {
  return (
    <section className={"footer"}>
      <div className={"footer__container"}>
        <div className={"footer__nav"}>
          <img src={logo} alt="Womunity" />
      
            <ul className={"footer__nav--list"}>
              <li>
                  <a href="#categories">Temáticas</a>
              </li>
              <li>
                  <a href="#directory">Directorio</a>
              </li>
              <li>
                  <a href="#testimonials">Testimonios</a>
              </li>
            </ul>
        </div>
        <div className={"footer__social"}>
          <ul>
            <li>
              <img src={social}/>
            </li>
          </ul>
        </div>
      </div>
      <span>Womunity - 2023</span>
    </section>
  );
}

export default Footer;
