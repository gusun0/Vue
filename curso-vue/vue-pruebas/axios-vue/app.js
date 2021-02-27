const app = new Vue({
	el: '#app',
	data: {
		personas: []
	},
	mounted(){
		axios.get('https://jsonplaceholder.typicode.com/users').
			then(respuesta => {
				console.log(respuesta.data)
				this.personas = respuesta.data;
			})

	}
});
