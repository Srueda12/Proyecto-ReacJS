import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

const products = [
  { id: 1, name: 'Camiseta Roja', price: 15, image: 'camiseta_roja.jpg', description: 'Camiseta de algodón en color rojo.' },
  { id: 2, name: 'Pantalón Azul', price: 25, image: 'pantalon_azul.jpg', description: 'Pantalón de mezclilla en color azul.' },
  { id: 3, name: 'Zapatos Negros', price: 30, image: 'zapatos_negros.jpg', description: 'Zapatos formales en color negro.' },
  { id: 4, name: 'Vestido Floral', price: 20, image: 'vestido_floral.jpg', description: 'Vestido de flores para ocasiones especiales.' },
  { id: 5, name: 'Sudadera Gris', price: 18, image: 'sudadera_gris.jpg', description: 'Sudadera cómoda en color gris.' },
  { id: 6, name: 'Jeans Clásicos', price: 22, image: 'jeans_clasicos.jpg', description: 'Jeans de corte clásico para uso diario.' },
  { id: 7, name: 'Blusa Blanca', price: 17, image: 'blusa_blanca.jpg', description: 'Blusa elegante en color blanco.' },
  { id: 8, name: 'Chaqueta de Cuero', price: 40, image: 'chaqueta_cuero.jpg', description: 'Chaqueta de cuero genuino.' },
  { id: 9, name: 'Bufanda de Lana', price: 12, image: 'bufanda_lana.jpg', description: 'Bufanda suave y abrigada en lana.' },
  { id: 10, name: 'Gorra Deportiva', price: 8, image: 'gorra_deportiva.jpg', description: 'Gorra ajustable para actividades deportivas.' },
  { id: 11, name: 'Pantalones Cortos', price: 14, image: 'pantalones_cortos.jpg', description: 'Pantalones cortos ideales para el verano.' },
  { id: 12, name: 'Blazer Negro', price: 35, image: 'blazer_negro.jpg', description: 'Blazer formal en color negro.' },
  { id: 13, name: 'Vestido Elegante', price: 28, image: 'vestido_elegante.jpg', description: 'Vestido elegante para ocasiones especiales.' },
  { id: 14, name: 'Zapatillas Deportivas', price: 32, image: 'zapatillas_deportivas.jpg', description: 'Zapatillas cómodas para hacer deporte.' },
  { id: 15, name: 'Suéter Rayado', price: 19, image: 'sueter_rayado.jpg', description: 'Suéter con rayas en tonos neutros.' },
  { id: 16, name: 'Bufanda de Seda', price: 16, image: 'bufanda_seda.jpg', description: 'Bufanda elegante de seda.' },
 { id: 17, name: 'Camisa a Rayas', price: 19, image: 'camisa_rayas.jpg', description: 'Camisa casual a rayas en varios colores.' },
  { id: 18, name: 'Chaleco de Lana', price: 28, image: 'chaleco_lana.jpg', description: 'Chaleco abrigado en lana para el invierno.' },
  { id: 19, name: 'Sombrero de Paja', price: 10, image: 'sombrero_paja.jpg', description: 'Sombrero de paja ideal para días soleados.' },
  { id: 20, name: 'Vestido de Noche', price: 35, image: 'vestido_noche.jpg', description: 'Elegante vestido de noche para eventos formales.' },
  
];

function ProductList() {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  return (
    <div>
      <h1>Lista de Productos</h1>
      {products.map(product => (
        <div key={product.id} className="product">
          <h3>{product.name}</h3>
          <p><strong>Precio:</strong> ${product.price}</p>
          <button onClick={() => addToCart(product)}>Agregar al carrito</button>
        </div>
      ))}
    </div>
  );
}

function ShoppingCart() {
  const [cart, setCart] = useState([]);

  const removeFromCart = (productId) => {
    const updatedCart = cart.filter(item => item.id !== productId);
    setCart(updatedCart);
  };

  return (
    <div>
      <h1>Carrito de Compras</h1>
      {cart.length === 0 ? (
        <p>Carrito vacío</p>
      ) : (
        <div>
          {cart.map(item => (
            <div key={item.id} className="cart-item">
              <p>{item.name} - ${item.price}</p>
              <button onClick={() => removeFromCart(item.id)}>Eliminar del carrito</button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Inicio</Link>
            </li>
            <li>
              <Link to="/cart">Carrito de Compras</Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route exact path="/" component={ProductList} />
          <Route path="/cart" component={ShoppingCart} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
