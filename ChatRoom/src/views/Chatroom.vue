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


<script src="https://www.gstatic.com/firebasejs/8.5.0/firebase-app.js"></script>

<script>
import { mapState } from "vuex";
//import api from '../utils/request.js';
import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyA2QQEIj7kdjJgj0qNptnUG2Tl8ILC-LDU",
    authDomain: "testing-purposes-4aaca.firebaseapp.com",
    databaseURL: "https://testing-purposes-4aaca-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "testing-purposes-4aaca",
    storageBucket: "testing-purposes-4aaca.appspot.com",
    messagingSenderId: "469281703912",
    appId: "1:469281703912:web:84f72377d61d663ca4065d",
    measurementId: "G-01W01QKBNB"
  };


var FB =firebase.initializeApp(firebaseConfig);
console.log(FB);
var db = FB.database();
const fetcheddata = db.ref().child('Kiryu');
fetcheddata.on('value', snap =>console.log(snap.val()));

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
		Trypush(){
			var FB = startfirebase;
			console.log(FB);
			var db = FB.database();
			var ref = db.ref('scores');
			var data = {
				name: "Amane Kanata",
				message: "coco daisuki"
			}
			ref.push(data);
		}
	},

}
</script>

<style scoped lang="scss">
@import "./styles/chatroomStyles";
</style>
