<template>
  <div id="login">
    <div @click="login()">登录</div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: "login",
  data(){
    return{

    }
  },
  methods:{
    login(){
      axios.get('http://localhost:3000/users/login').then(res=>{
        console.log(res);
      })
    }

  }
};
</script>

<style>
</style>
