
<template>

<div class="container">
<div class="cover">
 <div class="col-md-12">
 <h3>Productos</h3>
 </div>

<div class="row">

  <div class="col-md-3">
	<div class="col-md-12">
		<img src="http://www.placehold.it/200x100/000"  />
	</div>
	<div class="col-md-12">
		<h4>Titulo Producto</h4>
		<p>Descripcion del producto 1</p>
		<router-link :to="{ name: 'producto-detalle', params:{id:1}}">Ver detalle</router-link>
	</div>
  </div>

  <div class="col-md-3">
	<div class="col-md-12">
		<img src="http://www.placehold.it/200x100/000"  />
	</div>
	<div class="col-md-12">
		<h4>Titulo Producto</h4>
		<p>Descripcion del producto2 </p>
		<router-link :to="{ name: 'producto-detalle', params:{id:2}}">Ver detalle</router-link>
	</div>
  </div>


  <div class="col-md-3">
	<div class="col-md-12">
		<img src="http://www.placehold.it/200x100/000"  />
	</div>
	<div class="col-md-12">
		<h4>Titulo Producto</h4>
		<p>Descripcion del producto 3</p>
		<router-link :to="{ name: 'producto-detalle', params:{id:3}}">Ver detalle</router-link>
	</div>
  </div>

  <div class="col-md-3">
	<div class="col-md-12">
		<img src="http://www.placehold.it/200x100/000"  />
	</div>
	<div class="col-md-12">
		<h4>Titulo Producto</h4>
		<p>Descripcion del producto 4</p>
		<router-link :to="{ name: 'producto-detalle', params:{id:4}}">Ver detalle</router-link>
	</div>
  </div>




</div>
</div>
</div>
</template>

<script>
export default{
}
</script>


<style>
.cover{
padding: 20px;
margin: 40px 2px;
border: 1px solid #D2E0E6;


}
</style>


