<template>
  <div class="header">
    <div class="container">
      <h1 class="logo">
        <router-link :to="$publicUrl+'/'" :style="{color:'#fff'}">
          <img src="https://www.vue-js.com/public/images/vue.png" />
          Vue.js
        </router-link>
      </h1>
      <div class="search">
        <input type="text" />
      </div>
      <ul class="navigation">
        <li>
          <router-link :to="$publicUrl+'/'" :style="{color:'#fff'}">Home</router-link>
        </li>
        <li>
          <router-link to="/" :style="{color:'#fff'}">微信公众号</router-link>
        </li>
        <li>
          <router-link to="/" :style="{color:'#fff'}">Vue2.0</router-link>
        </li>
        <li>
          <router-link to="/" :style="{color:'#fff'}">参考资料</router-link>
        </li>
        <li>
          <router-link to="/" :style="{color:'#fff'}">Api</router-link>
        </li>
        <li>
          <router-link to="/" :style="{color:'#fff'}">关于</router-link>
        </li>
        <li>
          <router-link to="/" :style="{color:'#fff'}">注册</router-link>
        </li>
      </ul>
      <router-link v-if="userinfo" :to="this.$publicUrl+'/my/messages'" class="mymessages">
        <span v-if="newMessages" class="message-count">{{newMessages}}</span> 未读消息
      </router-link>
      <router-link v-if="userinfo" :to="this.$publicUrl+'/topic/create'" class="postTitle">发布话题</router-link>
      <div v-if="!userinfo" class="login">
        <input type="text" v-model="usertoken" />
        <button @click="login">登录</button>
      </div>
      <div v-else class="logout">
        <img :src="userinfo.avatar_url" />
        <button @click="logout">退出</button>
      </div>
    </div>
  </div>
</template>

<script>
// 存储登录状态   一般使用浏览器本地存储功能  1.cookie    2.localStorage   3.sessionStorage
//local 和 session 的区别   local永久存储除非手动删除  session 关闭窗口及消失
// 用法 一般存储安全信息（不重要的，可以给别人拿到的）
//存储 localStorage.setItem('属性名','属性值')   sessionStorage.setItem('属性名','属性值')
// 获取 localStorage.getItem('属性名','属性值')   sessionStorage.getItem('属性名','属性值')
//清空 localStorage.removeItem('属性名')  localStorage.clear()全部清除   session 用法yizhi
// 存储的属性值不能是对象，一般存 boolean number string
// 存储的数据可以再开发者工具(f12) 下的application内查看

import axios from "axios";
export default {
  name: "headernav",
  data() {
    return {
      usertoken: "8f8bbbad-f0ff-4f15-8f5f-750f4d34aba0",
      userinfo: null,
      newMessages: null
    };
  },
  methods: {
    login() {
      this.$router.push(this.$publicUrl+"/");
      axios
        .post("https://www.vue-js.com/api/v1/accesstoken", {
          accesstoken: this.usertoken
        })
        .then(res => {
          console.log(res.data);
          this.userinfo = res.data;
          localStorage.setItem("token", this.usertoken);
          localStorage.setItem("userId", res.data.id);
          axios
            .get("https://www.vue-js.com/api/v1/message/count", {
              params: {
                accesstoken: localStorage.getItem("token")
              }
            })
            .then(res => {
              console.log(res.data);
              this.newMessages = res.data.data;
            });
        });
    },
    logout() {
      this.$router.push(this.$publicUrl+"/")
      this.userinfo = null;
      localStorage.removeItem("token");
    }
  },
  // computed: {
  //   loggedin() {
  //     return localStorage.getItem("token");
  //   }
  // },
  created() {
    if (localStorage.getItem("token")) {
      axios
        .post("https://www.vue-js.com/api/v1/accesstoken", {
          accesstoken: localStorage.getItem("token")
        })
        .then(res => {
          this.userinfo = res.data;
          axios
            .get("https://www.vue-js.com/api/v1/message/count", {
              params: {
                accesstoken: localStorage.getItem("token")
              }
            })
            .then(res => {
              console.log(res.data);
              this.newMessages = res.data.data;
            });
        });
    }
  }
};
</script>

<style>
.header {
  padding: 10px 0;
  background-color: #1c6132;
}
.header .container {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.header h1.logo {
  font-size: 20px;
  color: #fff;
  font-weight: 200;
  width: 120px;
  height: 45px;
}
.header h1.logo img {
  height: 45px;
  max-width: 100%;
  vertical-align: middle;
}
.header .search {
  position: relative;
}
.header .search input {
  width: 206px;
  height: 20px;
  background: #4f9639 url("https://www.vue-js.com/public/images/search.png")
    no-repeat 4px 0;
  padding: 3px 5px 3px 22px;
  color: #666;
  border: 0;
  outline: 0;
  /* margin-top: 2px; */
  transition: all 0.5s;
  /* margin-bottom: 0; */
  font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
  font-size: 13px;
  font-weight: 400;
  line-height: 1;
  -webkit-border-radius: 15px;
  -moz-border-radius: 15px;
  border-radius: 15px;
}
.header .search input:hover {
  background-color: #fff;
}
.header ul.navigation {
  display: flex;
  justify-content: space-around;
  align-items: center;
}
.header ul.navigation li {
  font-size: 13px;
  line-height: 2;
}
.header ul.navigation li > a {
  padding: 10px 15px;
  color: #eee;
}
.header .login,
.header .logout {
  display: flex;
  align-items: center;
}
.logout img,
.login input {
  width: 45px;
  margin-right: 5px;
}
.logout button,
.login button {
  align-self: flex-end;
}
.mymessages span.message-count {
  -webkit-border-radius: 8px;
  -moz-border-radius: 8px;
  -o-border-radius: 8px;
  border-radius: 8px;
  padding: 1px 5px;
  background-color: #369219;
  color: #fff;
  margin-right: 0.5em;
}
</style>
