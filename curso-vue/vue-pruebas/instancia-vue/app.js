const puente = new Vue({
	data: {
		datoGenerico: 'este string es comṕartido'
	}
});

const app = new Vue({
	el: '#app',
	data: {
		titulo: 'instancia 1',
		dato: 35,
		datogenerico: puente.datoGenerico
	}
});

const app2 = new Vue({
	el: '#app2',
	data: {
		titulo: 'instancia 2',
		dato: 12,
		datogenerico: puente.datoGenerico
	}
});
