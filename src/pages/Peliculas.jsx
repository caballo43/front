import React, { useState } from 'react';
import imagen1 from '../img/megan.jpg';
import imagen2 from '../img/marvel.jpg';
import imagen3 from '../img/topgun.jpg';
import imagen4 from '../img/scream.jpg';
import imagen5 from '../img/rambo.jpg';
import imagen6 from '../img/abyss.jpg';
import './peliculas.css';

function Peliculas() {
  const [contador, setContador] = useState(0);

  return (
    <div className="container">
      <div className="cuadrado">
        <img src={imagen1} alt="Pelicula 1" />
        <button className="btn-alquilar" onClick={() => setContador(contador + 1)}>
          Alquilar
        </button>
      </div>
      <div className="cuadrado">
        <img src={imagen2} alt="Pelicula 2" />
        <button className="btn-alquilar" onClick={() => setContador(contador + 1)}>
          Alquilar
        </button>
      </div>
      <div className="cuadrado">
        <img src={imagen3} alt="Pelicula 3" />
        <button className="btn-alquilar" onClick={() => setContador(contador + 1)}>
          Alquilar
        </button>
      </div>
      <div className="cuadrado">
        <img src={imagen4} alt="Pelicula 4" />
        <button className="btn-alquilar" onClick={() => setContador(contador + 1)}>
          Alquilar
        </button>
      </div>
      <div className="cuadrado">
        <img src={imagen5} alt="Pelicula 5" />
        <button className="btn-alquilar" onClick={() => setContador(contador + 1)}>
          Alquilar
        </button>
      </div>
      <div className="cuadrado">
        <img src={imagen6} alt="Pelicula 6" />
        <button className="btn-alquilar" onClick={() => setContador(contador + 1)}>
          Alquilar
        </button>
      </div>
      <p className="contador">Contador: {contador}</p>
    </div>
  );
}

export default Peliculas;











// import React from 'react';
// import imagen1 from '../img/megan.jpg';
// import imagen2 from '../img/marvel.jpg';
// import imagen3 from '../img/topgun.jpg';
// import imagen4 from '../img/scream.jpg';
// import imagen5 from '../img/rambo.jpg';
// import imagen6 from '../img/abyss.jpg';
// import './peliculas.css';

// function Peliculas() {
//   return (
//     <div className="container">
//       <div className="cuadrado">
//         <img src={imagen1} alt="Pelicula 1" />
//         <button className="btn-alquilar">Alquilar</button>
//       </div>
//       <div className="cuadrado">
//         <img src={imagen2} alt="Pelicula 2" />
//         <button className="btn-alquilar">Alquilar</button>
//       </div>
//       <div className="cuadrado">
//         <img src={imagen3} alt="Pelicula 3" />
//         <button className="btn-alquilar">Alquilar</button>
//       </div>
//       <div className="cuadrado">
//         <img src={imagen4} alt="Pelicula 4" />
//         <button className="btn-alquilar">Alquilar</button>
//       </div>
//       <div className="cuadrado">
//         <img src={imagen5} alt="Pelicula 5" />
//         <button className="btn-alquilar">Alquilar</button>
//       </div>
//       <div className="cuadrado">
//         <img src={imagen6} alt="Pelicula 6" />
//         <button className="btn-alquilar">Alquilar</button>
//       </div>
//     </div>
//   );
// }

// export default Peliculas;
