const botonElem = document.querySelector('button');
const inputElem = document.querySelector('input');
const listaElem = document.querySelector('ul');



botonElem.addEventListener('click', () => {
	const valor = inputElem.value; 
	const listaItemElem = document.createElement('li');
	listaItemElem.textContent = valor;
	listaElem.appendChild(listaItemElem);
	inputElem.value = '';
});
