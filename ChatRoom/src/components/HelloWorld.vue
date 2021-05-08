<template>
  <div class="chatroom">
    <b-container>
		<div class="chat-block">
			<h1>Alice</h1>
			<div class="msg-block">
				
			</div>
			<b-form-group id="input-msg" label-for="input-msg">
              <div class="input-box">
                <b-form-input
                  id="msg"
                  v-model="form.name"
                  required
                  autocomplete="off"
                ></b-form-input>
              </div>
            </b-form-group>
		</div>
	</b-container>
  </div>
</template>

<script>
import { db } from '../db'

export default {
  name: 'HelloWorld',
  data () {
    return {
			form: {name: ""},
      districts: [],
      msg: 'Welcome to Your Vue.js App'
    }
  },
  firestore () {
    return {
      districts: db.collection('districts').orderBy('name')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
