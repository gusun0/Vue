<template>
  <div id="app">
	<center>
	<Contador /><Contador /><Contador /><Contador /><br>
	<h2>Listado de planes de curso de programación</h2>
	<div class="planes">

	<!--
		<div class="plan">
			<div class="descripcion">	
				<span class="titulo">
					Plan 1 - Principiante
				</span>
			</div>	
		</div>

		<div class="plan">
			<div class="descripcion">	
				<span class="titulo">
					Plan 2 - Intermedio
				</span>
			</div>	
		</div>

		<div class="plan">
			<div class="descripcion">	
				<span class="titulo">
					Plan 3 - Avanzado
				</span>
			</div>	
		</div>

		<Plan nombre="Plan 1 - Principiante"/>
		<Plan nombre="Plan 2 - Intermedio"/>
		<Plan nombre="Plan 3 - Avanzado"/>
		<Plan nombre="Plan 4 - Hackers"/>
		<Plan />
		-->
		<Planes />

	</div>
	</center>
  </div>
</template>

<script>
import Contador from './components/Contador.vue';
import Planes from './components/Planes.vue';

export default {
  name: 'App',
  components: {
	Contador,
	Planes
  },
}
</script>

<style>
</style>
