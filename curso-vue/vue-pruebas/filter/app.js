const app = new Vue({
	el: '#app',
	data: {
		tarea: null,
		tareas: [
			{
				titulo: 'titulo 1', completado: false
			},
			{
				titulo: 'titulo 2', completado: true 
			},
			{
				titulo: 'titulo 3', completado: false
			},
			{
				titulo: 'titulo 4', completado: true
			}

		]
	},
	methods:{
		agregarTarea(){
			this.tareas.unshift({ titulo: this.tarea, completado: false });
		}
	},
	computed: {
		mostrarCompletadas(){
			return this.tareas.filter(item => item.completado);
		},
		mostrarNombre(){
			return 'Manuel';
		},
		mostrarPorTitulo(){
			return this.tareas.filter(item => item.titulo.includes(this.tarea));
		}
		
	}



});
