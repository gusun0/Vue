<template>
  <div id="app" class="container">
	<h1>Vue and Firebase</h1>
	<div class="card">
		<div class="card-header">
			<h3>Add a Link</h3>
		</div>
		<div class="card-body">
			<form v-on:submit.prevent="addLink" class="form-inline">
					
			<div class="form-group">
				<label>Title</label>
				<input
				v-model="newLink.title"
				class="form-control"	
				type="text"	
				placeholder="Title"	
				>

				<label>Author</label>
				<input
				v-model="newLink.author"
				class="form-control"	
				type="text"	
				placeholder="Author"	
				>

				<label>URL</label>
				<input
				v-model="newLink.url"
				class="form-control"	
				type="text"	
				placeholder="URL"	
				>

				<input type="submit" value="Add a Link" class="btn btn-success">


			</div>
			</form>
		</div>
		
	</div>
<hr>

<div class="card">
	<div class="card-header">
		<h3 class="card-title">Links List</h3>
	</div>
	
	<div class="card-body">
		<table class="table table-striped">
			<thead>
				<tr>
					<th>Title</th>
					</th>User</th>
					</th>Delete</th>
				</tr>
			</thead>
			<tbody>
				<tr v-for="link in links">
					<td><a href=""> {{ link.title }} </a></td>
				</tr>

			</tbody>
		</table>
	</div>

</div>
  </div>
</template>

<script>

import Firebase from 'firebase';

let config = {

apiKey: "AIzaSyBGxnAn-Ybib_Em2CNBL-iRuIUA2rlRSFM",
    authDomain: "proyecto-vue-e26f0.firebaseapp.com",
    projectId: "proyecto-vue-e26f0",
    storageBucket: "proyecto-vue-e26f0.appspot.com",
    messagingSenderId: "784200272562",
    appId: "1:784200272562:web:e788864601d8df880217ab",
    measurementId: "G-KCB89YR527"

};

let app = Firebase.initializeApp(config);
let db = app.database();

let linksRef = db.ref('links');



export default {
  name: 'App',
  firebase: {
	links: linksRef,
  },
  data(){
   return {
	newLink: {
		title: '',
		author: '',
		url: ''
	}
 	}
  },
  methods: {
	addLink: function(){
		linksRef.push(this.newLink);
	}
  }
}

</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
