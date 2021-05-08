<template>
  <div class="container">
    <div class="body">
      <h1 class="name">Alice</h1>
      <div class="chatbox border border-dark"></div>
			<div class="border border-dark">
				<b-form-group id="input-msg" label-for="input-sg">
					<div class="input-box">
						<b-form-input
							id="msg"
							v-model="form.msg"
							required
							autocomplete="off"
						></b-form-input>
					</div>
				</b-form-group>
			</div>
    </div>
  </div>
</template>

<script>

export default {
	name: "Chatroom",
	components: {
		
	},
	data() {
		return {
			form: {msg: ""},
			show: true,
		}
	},
	mehtods: {

	}
}
</script>