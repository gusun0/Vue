new Vue({
	el: '#app',
	data: {
		header: 'Listado de Útiles',
		estado: 'default',
		newUtil: '',
		utiles: [
			{
				util: '10 cuadernos',
				comprado: true
			},
			{
				util: '15 lapices',
				comprado: true
			},
			{
				util: '5 cajas de colores',
				comprado: false
			}

		]

	},
	computed:{
		listarReversa(){
			return this.utiles.slice(0).reverse();
		}
	},
	methods: {
		guardarElemento(){
			this.utiles.push({
				util: this.newUtil,
				comprado: false
			});
			this.newUtil = '';
		},
		cambiarEstado: function(newEstado){
			this.estado = newEstado;
			this.newUtil = '';
		},
		cambiarEstadoCompra(util){
			util.comprado = !util.comprado;
		}
	}
});
