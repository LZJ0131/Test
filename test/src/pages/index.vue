<template>
  <div id="index" class="clearfix">
    <ul class="left_menu">
      <li>人员管理</li>
    </ul>
    <div class="right_menu">
      <div class="right_menu-userbox">
        <table cellpadding='0' cellspacing='0'>
          <thead>
            <tr>
              <th>用户id</th>
              <th>姓名</th>
              <th>用户名</th>
              <th>性别</th>
              <th>操作</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(item,index) in userarray" :key="index"> 
              <td>{{item.id}}</td>
              <td>{{item.user_name}}</td>
              <td>{{item.user_phone}}</td>
              <td>{{item.user_sex==1?'男':'女'}}</td>
              <td>
                <ul class="userbox_op">
                  <li @click="changeinfo(item.id)">修改</li>
                  <li @click="delinfo(item.id)">删除</li>
                </ul>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "index",
  data() {
    return{
      userarray:[]
    }
  },
  methods: {
    getuser(){
      var that=this;
      axios.get('/api/users/getuser').then(res=>{
        if(res.status==200){
          that.userarray=res.data.userarray
        }
      })
    },
    changeinfo(id){
      console.log(id)
    },
    delinfo(id){
      var that=this;
      axios.get('/api/users/changeuser',{params:{
        id:id
      }}).then(res=>{
        if(res.status==200){
          alert('修改成功');
          that.getuser()
        }
      })
    }
  },
  mounted(){
    var that=this;
    that.getuser()
  }
};
</script>

<style scoped>
.right_menu-userbox{
  width: 100%;
}
.right_menu-userbox table{
  width: 100%;
  border-collapse: collapse;
  border: 1px solid #e6e6e6;
}
.right_menu-userbox table th{
  border: 1px solid #e6e6e6;
  line-height: 40px;
  font-size: 14px;
}
.right_menu-userbox table td{
  border: 1px solid #e6e6e6;
  line-height: 40px;
  font-size: 14px;
}
.userbox_op li{
  float: left;
  margin-left: 10px;
}
</style>
