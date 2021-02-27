<template>
  <div class="container">
    <h1>Informacion de Usuario</h1>
     <router-link :to="item" v-for="(item,index) in arregloUsuarios" :key="index">
		<button>{{ item }}</button>
     </router-link>
    <Usuario />
  </div>
</template>

<script>
import Usuario from '../components/Usuario.vue';

export default{
components: {
  Usuario
},
data(){
return{
   arregloUsuarios: ['gusun0','user 1', 'user 2', 'user 3']
}
}

}
</script>

