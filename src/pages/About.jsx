import '../styles/About.css';

function About() {
  return (
    <div className="about-page">
      <section className="about-hero">
        <div className="container">
          <div className="about-hero-content">
            <h1>Nuestra Historia</h1>
            <p>Creando experiencias culinarias desde 2010</p>
          </div>
        </div>
      </section>

      <section className="about-story section">
        <div className="container">
          <div className="story-content">
            <div className="story-text">
              <h2>El Viaje de Savoria</h2>
              <p>Savoria nació de una simple pasión por la comida extraordinaria. Lo que comenzó como una pequeña cocina familiar se ha convertido en uno de los destinos gastronómicos más queridos de la ciudad.</p>
              <p>Nuestra fundadora, la Chef Isabella Romano, combinó su herencia italiana con técnicas culinarias modernas para crear una experiencia única que honra la tradición y abraza la innovación.</p>
              <p>Hoy seguimos manteniendo los valores que nos han definido desde el principio: ingredientes excepcionales, preparación magistral y hospitalidad cálida.</p>
            </div>
            <div className="story-image">
              <img src="https://images.pexels.com/photos/3184183/pexels-photo-3184183.jpeg" alt="Equipo del restaurante" />
            </div>
          </div>
        </div>
      </section>

      <section className="about-team section">
        <div className="container">
          <h2>Conoce a Nuestro Equipo</h2>
          <div className="team-grid">
            <div className="team-member">
              <img src="https://images.pexels.com/photos/887827/pexels-photo-887827.jpeg" alt="Chef Isabella" />
              <h3>Isabella Romano</h3>
              <p>Fundadora y Chef Ejecutiva</p>
            </div>
            <div className="team-member">
              <img src="https://images.pexels.com/photos/3814446/pexels-photo-3814446.jpeg" alt="Chef Marco" />
              <h3>Marco Bianchi</h3>
              <p>Chef Principal</p>
            </div>
            <div className="team-member">
              <img src="https://images.pexels.com/photos/3770126/pexels-photo-3770126.jpeg" alt="Sophia" />
              <h3>Sophia Chen</h3>
              <p>Chef Pastelera</p>
            </div>
            <div className="team-member">
              <img src="https://images.pexels.com/photos/3771815/pexels-photo-3771815.jpeg" alt="Daniel" />
              <h3>Daniel Martinez</h3>
              <p>Sommelier</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;