<template>
<div>
	<ul class="list-group">
		<li class="list-group-item" v-for="item in items" :key="item.id" >
			{{ item.titulo }} - ${{ item.precio }}
			<button class="btn btn-danger float-right" @click="removerItem(item)">Eliminar</button>
		</li>
	</ul>

	<div class="card p-3 my-5">
		<h4 class="text-center">Total: $ {{ total }}</h4>	
	</div>
	<button @click="$emit('pagar')" class="btn btn-info form-control" :disabled="items.length === 0">
	Pagar ahora
	</button>

</div>
</template>




<script>
export default{
name: 'Carrito',
props: ['items'],
methods: {
  removerItem(item){
     this.$emit('remover-item',item) 
  }
},
computed: {
 total(){	
   return this.items.reduce((acumulador, item) => acumulador + Number(item.precio),0);
 }
}

}
</script>

<style>
</style>




