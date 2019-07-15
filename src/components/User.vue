<template>
  <div>
    <div v-if="userImg" class="user">
      <div class="panel">
        <div class="panel-head">
          <span class="panel-head-title push-home">主页</span>
          <span class="divider">/</span>
        </div>
        <div class="main-inner user-info">
          <div>
            <img :src="userImg" />
            <span class="user-name">{{$route.params.loginname}}</span>
          </div>
          <p>{{this.score}} 积分</p>
          <p v-if="collectTopics.length">{{collectTopics.length}}话题收藏</p>
          <p>注册时间 {{moment(createUser_at)}}</p>
        </div>
      </div>
      <div class="panel">
        <div class="panel-head">
          <span>最近创建的话题</span>
        </div>
        <div class="main-inner topics">
          <ul class="topics-list">
            <li v-for="item in recentTopics" :key="item.id">
              <router-link :to="`/user/${item.author.loginname}`" class="author-avatar">
                <img :src="item.author.avatar_url" />
              </router-link>
              <div class="reply-count"></div>
              <div class="topics-title-wrapper">
                <router-link
                  :to="`/topic/${item.id}`"
                  :title="item.title"
                  class="topic-title"
                >{{item.title}}</router-link>
              </div>
              <span class="last-reply">{{moment(item.last_reply_at)}}</span>
            </li>
          </ul>
        </div>
        <div class="panel-foot">
          <router-link :to="`/user/${$route.params.loginname}/topics`">查看更多»</router-link>
        </div>
      </div>
      <div class="panel">
        <div class="panel-head">
          <span>最近参与的话题</span>
        </div>
        <div class="main-inner topics">
          <ul class="topics-list">
            <li v-for="item in recentReplies" :key="item.id">
              <router-link :to="`/user/${item.author.loginname}`" class="author-avatar">
                <img :src="item.author.avatar_url" />
              </router-link>
              <div class="reply-count"></div>
              <div class="topics-title-wrapper">
                <router-link
                  :to="`/topic/${item.id}`"
                  :title="item.title"
                  class="topic-title"
                >{{item.title}}</router-link>
              </div>
              <span class="last-reply">{{moment(item.last_reply_at)}}</span>
            </li>
          </ul>
        </div>
        <div class="panel-foot">
          <router-link :to="`/user/${$route.params.loginname}/replies`">查看更多»</router-link>
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
import moment from "moment";
export default {
  name: "user",
  data() {
    return {
      userImg: null,
      score: null,
      collectTopics: null,
      createUser_at: null,
      recentTopics: null,
      recentReplies: null
    };
  },
  methods: {
    moment(time) {
      moment.locale("zh-cn");
      return moment(time).fromNow();
    }
  },
  watch: {
    "$route.fullPath": {
      immediate: true,
      handler() {
        axios
          .get(
            `https://www.vue-js.com/api/v1/user/${this.$route.params.loginname}`
          )
          .then(res => {
            console.log(res.data.data);
            this.userImg = res.data.data.avatar_url;
            this.score = res.data.data.score;
            this.collectTopics = res.data.data.collect_topics;
            this.createUser_at = res.data.data.create_at;
            this.recentTopics = res.data.data.recent_topics;
            this.recentReplies = res.data.data.recent_replies;
          });
      }
    }
  },
  created() {
    axios
      .get(`https://www.vue-js.com/api/v1/user/${this.$route.params.loginname}`)
      .then(res => {
        console.log(res.data.data);
        this.userImg = res.data.data.avatar_url;
        this.score = res.data.data.score;
        this.collectTopics = res.data.data.collect_topics;
        this.createUser_at = res.data.data.create_at;
        this.recentTopics = res.data.data.recent_topics;
        this.recentReplies = res.data.data.recent_replies;
      });
  }
};
</script>

<style>
.user .user-info {
  padding: 10px;
}
.user-info img {
  width: 40px;
  height: 40px;
  border-radius: 3px;
}
.user-info .user-name {
  margin-left: 10px;
}
</style>
