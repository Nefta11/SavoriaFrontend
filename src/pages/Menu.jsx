import { useState } from 'react';
import '../styles/Menu.css';

function Menu() {
  const [activeCategory, setActiveCategory] = useState('daily');

  const categories = [
    { id: 'daily', label: 'Especial del Día' },
    { id: 'mains', label: 'Platos Principales' },
    { id: 'desserts', label: 'Postres' },
    { id: 'drinks', label: 'Bebidas' }
  ];

  const menuItems = {
    daily: [
      {
        id: 1,
        name: 'Risotto Especial del Chef',
        description: 'Risotto cremoso con setas silvestres, aceite de trufa y crujiente de parmesano',
        price: '$24.95',
        image: 'https://images.pexels.com/photos/5639432/pexels-photo-5639432.jpeg'
      },
      {
        id: 2,
        name: 'Pescado de Temporada',
        description: 'Pescado del día sellado con beurre blanc de cítricos, acompañado de vegetales asados',
        price: '$29.95',
        image: 'https://images.pexels.com/photos/262959/pexels-photo-262959.jpeg'
      },
      {
        id: 3,
        name: 'Postre Especial',
        description: 'Panna cotta de vainilla con frutos rojos de temporada y menta',
        price: '$12.95',
        image: 'https://images.pexels.com/photos/3026804/pexels-photo-3026804.jpeg'
      }
    ],
    mains: [
      {
        id: 6,
        name: 'Filete Mignon',
        description: 'Solomillo de res de 8oz, con puré de papas trufado y espárragos asados',
        price: '$39.95',
        image: 'https://images.pexels.com/photos/675951/pexels-photo-675951.jpeg'
      },
      {
        id: 7,
        name: 'Pasta de Setas Silvestres',
        description: 'Pappardelle artesanal con setas silvestres en salsa cremosa ligera',
        price: '$22.95',
        image: 'https://images.pexels.com/photos/1527603/pexels-photo-1527603.jpeg'
      }
    ],
    desserts: [
      {
        id: 8,
        name: 'Tiramisú',
        description: 'Clásico postre italiano hecho con mascarpone, café y cacao',
        price: '$9.95',
        image: 'https://images.pexels.com/photos/6389708/pexels-photo-6389708.jpeg'
      },
      {
        id: 9,
        name: 'Pastel de Chocolate Fundido',
        description: 'Pastel tibio de chocolate con centro líquido, acompañado de helado de vainilla',
        price: '$10.95',
        image: 'https://images.pexels.com/photos/291528/pexels-photo-291528.jpeg'
      }
    ],
    drinks: [
      {
        id: 10,
        name: 'Cóctel de la Casa',
        description: 'Ginebra infusionada con flor de saúco, limón y prosecco',
        price: '$14.95',
        image: 'https://images.pexels.com/photos/1170599/pexels-photo-1170599.jpeg'
      },
      {
        id: 11,
        name: 'Selección de Vinos',
        description: 'Consulta a tu mesero por nuestra amplia carta de vinos',
        price: 'Varía',
        image: 'https://images.pexels.com/photos/2702805/pexels-photo-2702805.jpeg'
      }
    ]
  };

  return (
    <div className="menu-page">
      <div className="menu-header">
        <div className="container">
          <h1>Nuestro Menú</h1>
          <p>Elaborado con pasión y los mejores ingredientes</p>
        </div>
      </div>

      <div className="menu-categories-wrapper">
        <div className="container">
          <div className="menu-categories">
            {categories.map(category => (
              <button
                key={category.id}
                className={`menu-category ${activeCategory === category.id ? 'active' : ''}`}
                onClick={() => setActiveCategory(category.id)}
              >
                {category.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      <section className="menu-items section">
        <div className="container">
          <div className="menu-grid">
            {menuItems[activeCategory].map(item => (
              <div className="menu-item" key={item.id}>
                <div className="menu-item-image">
                  <img src={item.image} alt={item.name} />
                </div>
                <div className="menu-item-content">
                  <div className="menu-item-header">
                    <h3>{item.name}</h3>
                    <div className="menu-item-price">{item.price}</div>
                  </div>
                  <p className="menu-item-description">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}

export default Menu;