<template>
  <div>
    <div v-if="aaa" class="mymessages">
      <div class="panel">
        <div class="panel-head">
          <router-link to="/">
            <span class="panel-head-title push-home">主页</span>
          </router-link>

          <span class="divider">/</span>
          <span class="new-messages">新消息</span>
        </div>
        <div class="main-inner new-messages">
          <ul v-if="hasNotReadMessages.length">
            <li v-for="item in hasNotReadMessages" :key="item.id" class="message">
              <div class="message-info">
                <router-link :to="`/user/${item.author.loginname}`">{{item.author.loginname}}</router-link>
                <span>{{item.type==='at'?' 在话题 ':' 回复了你的话题 '}}</span>
                <router-link :to="`/topic/${item.topic.id}`">{{item.topic.title}}</router-link>
                <span>{{item.type==='at'?" 中@了你":''}}</span>
              </div>
              <span class="unread">
                <img src="https://www.vue-js.com/public/images/checkmark_icon&16.png" />
              </span>
            </li>
          </ul>
          <div class="message" v-else>
            <p>无消息</p>
          </div>
        </div>
      </div>
      <div class="panel">
        <div class="panel-head">
          <span class="panel-head-title">过往信息</span>
        </div>
        <div class="main-inner old-messages">
          <ul v-if="hasReadMessages.length">
            <li v-for="item in hasReadMessages" :key="item.id" class="message">
              <div class="message-info">
                <router-link :to="`/user/${item.author.loginname}`">{{item.author.loginname}}</router-link>
                <span>{{item.type==='at'?' 在话题 ':' 回复了你的话题 '}}</span>
                <router-link :to="`/topic/${item.topic.id}`">{{item.topic.title}}</router-link>
                <span>{{item.type==='at'?" 中@了你":''}}</span>
              </div>
              <span class="marked-icon">
                <img src="https://www.vue-js.com/public/images/checkmark_icon&16.png" />
              </span>
            </li>
          </ul>
          <div class="message" v-else>
            <p>无消息</p>
          </div>
        </div>
      </div>
    </div>
    <div v-else>
      <img
        :style="{width:'100%'}"
        src="https://ss0.bdstatic.com/94oJfD_bAAcT8t7mm9GUKT-xh_/timg?image&quality=100&size=b4000_4000&sec=1562726230&di=f4f3d4096a5bd95bc892be2b29bcfd34&src=http://hbimg.b0.upaiyun.com/611bb3198c03cfefea188d170f33f27f1611c8e8a3ea-o8nm2q_fw658"
      />
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "mymessages",
  data() {
    return {
      aaa: true,
      hasReadMessages: [],
      hasNotReadMessages: []
    };
  },
  created() {
    axios
      .get("https://www.vue-js.com/api/v1/messages", {
        params: {
          accesstoken: localStorage.getItem("token")
        }
      })
      .then(res => {
        this.hasReadMessages = res.data.data.has_read_messages;
        this.hasNotReadMessages = res.data.data.hasnot_read_messages;
        console.log(res.data.data);
      });
  }
};
</script>

<style>
.message {
  display: flex;
  align-items: center;
  font-size: 14px;
  padding: 10px;
  background: #fff;
  border-top: 1px solid #f0f0f0;
}
.message .message-info {
  flex-grow: 1;
}
.message .marked-icon {
  flex-shrink: 0;
}
.message .unread {
  flex-shrink: 0;
  opacity: 0.1;
  cursor: pointer;
}
</style>
