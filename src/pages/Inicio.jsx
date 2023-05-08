import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import Pelis from '../components/Pelis';
import axios from 'axios';



const Inicio = () => {
	const [query, setQuery] = useState("");
	const [datos, setDatos] = useState([]);
  
	const gestorBusca = (e) => {
	  setQuery(e.target.value);
	};
	useEffect(() => {
		const recupera = async () => {
			console.log(query)
		  if (query.length === 0) {
			const res = await axios.get(
			  process.env.REACT_APP_BACKEND_URL + "/api/peliculas"
			);
			// const res = await axios.get('http://localhost:5000/api/peliculas');
			setDatos(res.data.peliculas);
		  } else {
			const res = await axios.get(
			  process.env.REACT_APP_BACKEND_URL + `/api/peliculas/buscar/${query}`
			);
			setDatos(res.data.peliculas);
			console.log(res.data)
		  }
		  console.log(datos);
		};
		recupera();
	  }, [query]);


	return (
		<div>
			
							
			{/* <div class="intro"><img src="./img/sixflix.jpg" alt="" /></div> */}
			<h2>Lo último</h2>
			<div className="seccionBuscar">
      			<input
					className="buscar"
					type="text"
					name="busca"
					placeholder="buscar"
					onChange={gestorBusca}
        // onKeyDown={gestorTecla}
      />      			
    		</div>
			<div>
				{datos.map((pelis)=>{
					return <Pelis pelis={pelis}/>
				})} 
				{/* lo que hace maps pasa a componente pelis */}
			</div>

			<div> <img src="caracol.jpg" alt="" width="" /></div>
			<div>
				<section class="slider_container">
					<section class="slider">
						<div class="slide uno">
							<img src="https://www.loslunesseriefilos.com/wp-content/uploads/2023/01/critica-megan-peli.jpg" alt="" />

							<span class="caption">

							</span>
						</div>
						<div class="slide dos">
							<img src="https://metadata-static.plex.tv/b/gracenote/b995cdebc7935f9d87a557d98c9ebf44.jpg" alt="" />
							<span class="caption">

							</span>
						</div>
						<div class="slide tres">
							<img src="https://www.elcineenlasombra.com/wp-content/uploads/2014/12/the-hobbit-the-desolation-of-smaug-22982-2880x1800-copia.jpg" alt="" />
							<span class="caption">

							</span>
						</div>
						<div class="slide cuatro">
							<img src="https://images.hive.blog/0x0/https://prod-ripcut-delivery.disney-plus.net/v1/variant/star/9D2181FAFA68FEF1D3323C7E71CC6EC8636FADCF11F65617E7E74F2183ED58FF/scale?width=1200&aspectRatio=1.78&format=jpeg" alt="" />
							<span class="caption">

							</span>
						</div>
						<div class="slide cinco">
							<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjO9vFq_jo4kFInysJXf39WEx41LPBTVmmOg&usqp=CAU"alt="" />
							<span class="caption">

							</span>
						</div>
						
					</section>
					
				</section>
			<div className="footer">
      <img src="./img/torrent.jpg" alt="Torrent" />

</div>





			</div>
		</div >
	);
};

export default Inicio;
