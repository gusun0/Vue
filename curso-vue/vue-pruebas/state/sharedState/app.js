
const persona = {
	nombre: 'user'
}

new Vue({
	el: '#app1',
	data: {
		persona: {
			nombre: persona
		}	
	}	
});

new Vue({
	el: '#app2',
	data: {
		persona: {
			nombre: persona
		}	
	}	
});
