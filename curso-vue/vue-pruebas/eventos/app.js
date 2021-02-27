const app = new Vue({
	el: '#app',
	data: {
		tarea: null,
		tareas: [
			'Aprender ES6',
			'Aprender Vue',
			'Comer'
		]
	},
	methods: {
		agregarTarea(){
			this.tareas.push(this.tarea);

		}
	}

});
