<template>
  <div class="home">
    <FileUpload />

    <button @click="logout">Logout</button>
  </div>
</template>

<script>
  import FileUpload from '@/components/FileUpload.vue'
import firebase from 'firebase';
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'home',
  components: {
    HelloWorld,
    FileUpload
  },
  methods: {
  	logout: function(){
  		firebase.auth().signOut().then(() => {
  			this.$router.replace('login')
  		})
  	}
  }
}
</script>
