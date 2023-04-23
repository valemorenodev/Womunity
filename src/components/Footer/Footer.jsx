import './Footer.scss'
import logo from '../../assets/images/logoWhite.png'

const Footer = () => {
  return (
    <div className={"footer"}>
      <section className={"footer_nav"}>
        <img src={logo} alt="" />
        <article className={"footer_nav--list"}>
          <a href=".categories"><li>Tematicas</li></a>
          <a href=""><li>Directorio</li></a>
          <a href=""><li>Testimonios</li></a>
        </article>
      </section>
    </div>
  );
}

export default Footer;
