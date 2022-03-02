const preguntas = document.querySelectorAll('.preguntas .contenedor-pregunta');
preguntas.forEach((pregunta) => {
	pregunta.addEventListener('click', (e) => {
		e.currentTarget.classList.toggle('activa');

		const respuesta = pregunta.querySelector('.respuesta');
		const alturaRealRespuesta = respuesta.scrollHeight;
		
		if(!respuesta.style.maxHeight){
			// Si esta vacio el maxHeight agragamos
			respuesta.style.maxHeight = alturaRealRespuesta + 'px';
		} else {
			respuesta.style.maxHeight = null;
		}

		//Reiniciamos las cajas
		preguntas.forEach((elemento) => {

			if(pregunta !== elemento){
				elemento.classList.remove('activa');
				elemento.querySelector('.respuesta').style.maxHeight = null;
			}
		});


	});
});