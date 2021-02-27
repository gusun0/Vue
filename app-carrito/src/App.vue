<template>
  <div id="app">

	<div class="row">
		<div class="col-md-7">
			<div class="row">
				<div class="col-md-6" v-for="prod in productos" :key="prod.id">
					<Producto 
					:producto="prod" 
					v-on:agregar-carro="agregarProdCarro" 
					:estaEnCarrito="estaEnCarrito(prod)">
					</Producto>
				</div >
			</div >
		</div>
	
	<div class="col-md-5 my-5">
		<Carrito :items="carrito" v-on:pagar="pagar" v-on:remover-item="removerProductos" />
	</div>

	</div>


  </div>
</template>

<script>
import productos from './productos.json';
import Producto from './components/Producto.vue';
import Carrito from './components/Carrito.vue';

export default {
  name: 'App',
  data(){
     return{
	productos: productos,
	carrito: [] 
   }
  },
  components: {
   Producto,
   Carrito
  },
  methods: {
    agregarProdCarro(producto){
     this.carrito.push(producto);
   },
    estaEnCarrito(producto){
     const item = this.carrito.find(item => item.id === producto.id);
	if(item){
		return true;
	}
	return false;
    },
    removerProductos(producto){
        this.carrito = this.carrito.filter(item => item.id != producto.id); 
    },
    pagar(){
	this.carrito = [];
	alert('Venta completada');
    }
 }
}
</script>

<style>
</style>
