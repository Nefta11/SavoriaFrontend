import { Link } from 'react-router-dom';
import '../styles/Home.css';

function Home() {
  return (
    <div className="home-page">
      <section className="hero">
        <div className="hero-content">
          <h1>Bienvenido a Savoria</h1>
          <p>Experimenta la excelencia culinaria en cada bocado</p>
          <div className="hero-buttons">
            <Link to="/menu" className="button">Ver Nuestro Menú</Link>
            <Link to="/about" className="button button-secondary">Nuestra Historia</Link>
          </div>
        </div>
      </section>

      <section className="features section">
        <div className="container">
          <h2>¿Por qué elegirnos?</h2>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">🍽️</div>
              <h3>Ingredientes Frescos</h3>
              <p>Solo utilizamos los ingredientes locales más frescos para nuestros platos, garantizando calidad y sabor en cada bocado.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">👨‍🍳</div>
              <h3>Chefs Maestros</h3>
              <p>Nuestro equipo de chefs galardonados prepara cada plato con pasión, creatividad y atención al detalle.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🌿</div>
              <h3>Gastronomía Sostenible</h3>
              <p>Estamos comprometidos con prácticas sostenibles, de la granja a la mesa, reduciendo nuestro impacto ambiental.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="testimonials section">
        <div className="container">
          <h2>Lo que dicen nuestros clientes</h2>
          <div className="testimonials-grid">
            <div className="testimonial-card">
              <div className="testimonial-content">
                <p>"Los sabores fueron extraordinarios y el servicio impecable. Una experiencia gastronómica realmente memorable."</p>
                <div className="testimonial-author">— María S.</div>
              </div>
            </div>
            <div className="testimonial-card">
              <div className="testimonial-content">
                <p>"Cada plato cuenta una historia. La atención al detalle en la presentación y el sabor es inigualable."</p>
                <div className="testimonial-author">— Jaime T.</div>
              </div>
            </div>
            <div className="testimonial-card">
              <div className="testimonial-content">
                <p>"Una mezcla perfecta de recetas tradicionales y técnicas culinarias modernas. ¡Simplemente delicioso!"</p>
                <div className="testimonial-author">— Elena R.</div>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}

export default Home;