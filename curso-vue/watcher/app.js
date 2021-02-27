let vm = new Vue({
	el: '#app',
	data: {
		esActivo: 'activo'
	},
	watch: {
		esActivo: function(){
			console.log('cambio el valor de estado');
		}
	}

});
