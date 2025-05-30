import '../styles/Footer.css';

function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-top">
          <div className="footer-logo">
            <h3>Savoria</h3>
            <p>Cocina exquisita desde 2010</p>
          </div>
          
          <div className="footer-links">
            <div className="footer-column">
              <h4>Navegación</h4>
              <ul>
                <li><a href="/">Inicio</a></li>
                <li><a href="/menu">Menú</a></li>
                <li><a href="/about">Sobre Nosotros</a></li>
              </ul>
            </div>
            
            <div className="footer-column">
              <h4>Contacto</h4>
              <ul>
                <li>Calle Gastronómica 123</li>
                <li>Ciudad Gourmet, CC 10101</li>
                <li>555-123-4567</li>
                <li>info@savoria.com</li>
              </ul>
            </div>
            
            <div className="footer-column">
              <h4>Horario</h4>
              <ul>
                <li>Lunes a Viernes: 11am - 10pm</li>
                <li>Sábado: 10am - 11pm</li>
                <li>Domingo: 10am - 9pm</li>
              </ul>
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; {currentYear} Restaurante Savoria. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;