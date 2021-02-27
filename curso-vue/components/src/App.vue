<template>
  <div id="container">
	<Header />
	<h1>Hola</h1>
	<Posts />
	<Footer />
  </div>
</template>

<script>
import Posts from './components/Posts.vue';
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';

export default {
  name: 'App',
  components: {
     Posts, Header, Footer

  }
}
</script>

<style>
</style>
