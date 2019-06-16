<template>
	<div class="login">
		<h3>Sign In</h3>
		<input type="text" v-model="email" placeholder="Email"><br>
		<input type="password" v-model="password" placeholder="Password"><br>
		<button @click="login">Connection</button>
		<p>You don't have an account? you can <router-link to="/sign-up">Create one</router-link></p>
	</div>
</template>

<script>
	import firebase from 'firebase';
	export default{
		name: 'login',
		data(){
			return {
				email: '',
				password: ''
			};
		},
		methods: {
			login: function(){
				//this.$router.replace('home');
				firebase.auth().signInWithEmailAndPassword(this.email, this.password).then(
					(user) => {
						this.$router.replace('home')
					},
					(err) => {
						alert('Oops. ' + err.message)
					}
				);
			}
		}
	}
</script>

<style scoped>
	.login{
		margin-top: 40px;
	}
	input{
		margin: 10px 0px;
		width: 20%;
		cursor: pointer;
		padding: 10px;
    	border: 1px solid #f1f1f1;
	}
	button{
		margin-top: 10px;
		padding: 10px;
		width: 10%;
		cursor: pointer;
	}
	p{
		margin-top: 40px;
		font-size: 13px;
	}
	p a{
		text-decoration: underline;
		cursor: pointer;
	}
</style>