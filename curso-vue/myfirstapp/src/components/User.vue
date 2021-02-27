<template>
	<div class="users">
		<h1>User component</h1>	
		<ul>
			<li v-for="user in users">
				{{ user.name }} - {{ user.email }} 		
			<button v-on:click="deleteUser(user)">X</button>
			</li>
		</ul>
			
		<form v-on:submit.prevent="addUser">
			<input type="text" v-model="newUser.name" placeholder="nombre">			
			<input type="email" v-model="newUser.email" placeholder="email">			
			<button type="submit"> Add</button>
		</form>
		
	</div>
</template>

<script>
export default {
	data(){
		return {	
			users: [],
			newUser: { 
			}
		}	
	},
	methods: {
		addUser(){
			this.users.push(this.newUser);
			this.newUser = {};
		},
		deleteUser(user){
			this.users.splice(this.users.indexOf(user),1);

		}
	},
	created(){
		this.$http.get('https://jsonplaceholder.typicode.com/users').
				then(res => this.users = res.body)
	}	
}
</script>

<style>
.users{
background-color: #333;
color: white;
}
</style>

