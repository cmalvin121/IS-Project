<template>
  <div class="container">
    <div class="body">
      <h1 class="name">Alice</h1>
      <div class="chatbox border border-dark">
				<b-row>
					<!-- 顯示對話內容 -->
					<p v-for="(message, index) in list" :key="index">
						${ message }
					</p>
				</b-row>
			</div>
			<!-- 文字輸入框 -->
			<div class="">
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
import { mapState } from "vuex";

export default {
	name: "Chatroom",
	components: {
		
	},
	data() {
		return {
			list: [], // 對話紀錄
			form: {msg: ""},
			show: true,
		}
	},
	mounted() {
		// 初始化list
		this.$store
      .dispatch("XXXX/XXXXXXX", { release: this.release })
      .then(() => {
        this.initList();
      })
      .catch((err) => {
        console.log(err);
      });
	},
	computed: {
    ...mapState({
      msgList: (state) => state.XXX.XXXXX,
    }),
  },
	mehtods: {
		initPaginatedItems() {
      this.list = this.msgList;
    },
	}
}
</script>

<style scoped lang="scss">
@import "./styles/chatroomStyles";
</style>