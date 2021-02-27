<template>
  <div class="container">
	<h1>Formulario de Contacto</h1>
	<form>	
		<div class="row">
			<div class="col-xs-12 col-sm-8 col-md-6">
				<h1>Formulario de Contacto</h1>	
				<hr>
				<div class="form-group">
					<label for="nombre">Nombre</label>
					<input type="text" id="nombre" class="form-control" v-model="datosPersona.nombre">
				</div>

				<div class="form-group">
					<label for="email">Email</label>
					<input type="email" id="email" class="form-control" v-model="datosPersona.email">
				</div>
				
				<div class="form-control">
				</div>
			</div>
		</div>
		<div class="row">
		<div class="col-xs-12 col-sm-8 col-md-6">
		<label for="mensaje">Mensaje</label><br>
		<textarea id="mensaje" cols="48" rows="5" v-model="mensaje">
		</textarea>
		</div>
		</div>

		<div class="row">
			<div class="col-xs-12 col-sm-8 col-md-6">
				<div class="form-group">
					<label for="enviarmail">
					<input type="checkbox" id="enviarmail" value="enviarmail" v-model="opcionMail"> Enviar Email 
					</label>&nbsp;&nbsp;

					<label for="enviarcopia">
					<input type="checkbox" id="enviarcopia" value="enviarcopia" v-model="opcionMail"> Enviar Copia
					</label>
				</div>
			</div>
		</div>

		<div class="row">
			<div class="col-xs-12 col-sm-8 col-md-6">
				<div class="form-group">
					<label for="masculino">
					<input type="radio" id="masculino" value="M" v-model="genero"> Masculino
					</label>&nbsp;&nbsp;

					<label for="femenino">
					<input type="radio" id="femenino" value="F" v-model="genero"> Femenino
					</label>
				</div>
			</div>
		</div>


		<div class="row">
			<div class="col-xs-12 col-sm-8 col-md-6">
				<label for="horario">Horario</label>
				<select id="horario" class="form-control" v-model="horario">
					<option v-for="item in datosHorario" :key="item" :selected="item == 'Mañana'">
						{{ item }}
					</option>
				</select>
			</div>
		</div>&nbsp;&nbsp;

	<div class="row">
		<div class="col-xs-12 col-sm-8 col-md-6"><br>
			<button class="btn btn-primary" @click.prevent="enviar">Enviar Datos</button>
		</div>
	</div>



	</form>


	<div class="row" v-if="enviado">
		<div class="col-xs-12 col-sd-8 col-md-6">
			<div class="panel panel-default">

				<div class="panel-heading">
					<h3>Datos</h3>
				</div>

				<div class="panel-body">
					<p>Nombre: {{ datosPersona.nombre }}</p>
					<p>Email: {{ datosPersona.email }}</p>
					<p style="white-space: pre">Mensaje: <br> {{ mensaje }}</p>
					<p>Opcion de envio
					<ul>
					  <li v-for="item in opcionMail" :key="item">
						{{ item }}	
					  </li>
					</ul>
					</p>

					<p>
					Género: {{ genero }}
					</p>

					<p>
					Horario: {{ horario }}
					</p>
				</div>

			</div>
		</div>
	</div>
  </div>
</template>

<script>

export default {
  name: 'Formulario',
  data(){
    return{
      datosPersona: {
	nombre: '',
	email: ''	 
       },
	mensaje: 'Test mensaje',
        opcionMail: [],
        genero: 'M',
	horario: '',
	datosHorario: ['Mañana','Tarde','Noche']
   }
  }
}
</script>

<style>
</style>
				</div>

			</div>
		</div>
	</div>
  </div>
</template>

<script>

export default {
  name: 'Formulario',
  data(){
    return{
      datosPersona: {
	nombre: '',
	email: ''	 
       },
	mensaje: 'Test mensaje',
        opcionMail: [],
        genero: 'M',
	horario: 'Mañana',
	datosHorario: ['Mañana','Tarde','Noche'],
	enviado: false
   }
  },
  methods:{
      enviar(){
	this.enviado = true;
      }  
  }
}
</script>

<style>
</style>

