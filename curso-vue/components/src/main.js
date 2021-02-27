import Vue from 'vue'
import App from './App'
import 'bootstrap/dist/css/bootstrap.min.css';

Vue.config.productionTip = false;

// Componentes
/*
var componente1 = Vue.extend({
   template: '<h1>Hola - Introduccion a componentes</h1>'
});

var componente2 = Vue.extend({
    template: '<h3>Listado de frameworks</h3>'
});

var componente3 = Vue.extend({
   template: '<ul><li>Vue JS</li><li>Angular</li><li>React</li></ul>'
});

Vue.component('componente-saludo', componente1);

Vue.component('componente-titulo', componente2);

Vue.component('componente-lista', componente3);

Vue.component('framework', {
	template: '<li></li>'
});
*/
new Vue({
  el: '#app',
  components: {App},
  template: '<App />'
  
})
