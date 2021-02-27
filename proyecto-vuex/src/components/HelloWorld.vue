<template>
  <div class="hello">
    <h1>{{ $store.getters.mensaje }}</h1>
    <h1>{{ $store.getters.nombreCompleto }}</h1>

   <h2>Amigos</h2>
   <input type="text" v-model="amigo">
   <button @click="addAmigo">Agregar Amigo</button>
   <ul>
	<li v-for="(amigo, index) in $store.state.amigos" :key="index">	
		{{ amigo }}

	<button @click="$store.dispatch('delAmigoAction', index)">Borrar</button>
	</li>
   </ul>
    

  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data(){
  return{
     amigo: ''
  }
},
methods: {
  addAmigo(){
    this.$store.dispatch('addAmigoAction',this.amigo);
    this.amigo = '';
  }
}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
