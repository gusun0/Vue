<template>
	<div class="test">
	<h1>COMPONENTE TEST</h1>	
	<span v-html=" myHtml "></span>
	<span v-text=" title "></span>
	<span v-if="showName">
		<p> {{ user.nombre }}</p>
	</span>
	<span v-else>
		<p> {{ user.lastname }} </p>
	</span>
	
	<hr>
	
	<ul>	
		<li v-for="tarea in tasks">
			{{ tarea.title }}
		</li>
	</ul>	
	
	<input type="text" v-model="user.nombre" />
	<button type="button" v-on:click="saludar(user.nombre)">
		CLICK ME
	</button>

	<hr>
	<input type="text" v-on:keyup.enter="typing">

	<hr>
	<div>
		{{ fullName }}
	</div>

	<div>
		{{ msg }}
	</div>

	</div>
</template>

<script>
export default {
	data(){
		return { 
			title: 'Hola Vuejs',
			user: {
				nombre: 'Joe',
				lastname: 'Mc Millan'
			},
			myHtml: '<h3>Hola Vue</h3>',
			showName: false,
			tasks: [
				{ title: 'tarea 1'}, 
				{ title: 'tarea 2'}, 
				{ title: 'tarea 3'}, 
			]
				
		}	
	},
	methods:{
		saludar(name){
			alert('Hello ' + name);
		},
		typing(e){
			console.log(e.target.value);
			/*
			if(e.target.keyCode === 13){
				console.log(e.target.value);
			}
			*/
		}
	},
	computed: {
		fullName(){
			return this.user.nombre + ' ' + this.user.lastname;
		}		
	},
	props: {
		msg: {
			type: String,
			default: 'Mensaje por defecto'
		}
	}	


}
</script>

<style media="screen">

.test{
background-color: #eee;
}

</style>

