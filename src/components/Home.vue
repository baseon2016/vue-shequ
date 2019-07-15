<template>
  <div class="home panel">
    <div class="topic-main">
      <ul class="nav">
        <li>
          <router-link
            @click.native="total=857"
            :class="$route.fullPath==='/?tab=all'?'active':''||$route.fullPath==='/'?'active':''"
            to="/?tab=all"
          >全部</router-link>
        </li>
        <li>
          <router-link
            @click.native="total=15"
            :class="$route.fullPath==='/?tab=good'?'active':''"
            to="/?tab=good"
          >精华</router-link>
        </li>
        <li>
          <router-link
            @click.native="total=3"
            :class="$route.fullPath==='/?tab=weex'?'active':''"
            to="/?tab=weex"
          >weex</router-link>
        </li>
        <li>
          <router-link
            @click.native="total=246"
            :class="$route.fullPath==='/?tab=share'?'active':''"
            to="/?tab=share"
          >分享</router-link>
        </li>
        <li>
          <router-link
            @click.native="total=578"
            :class="$route.fullPath==='/?tab=ask'?'active':''"
            to="/?tab=ask"
          >问答</router-link>
        </li>
        <li>
          <router-link
            @click.native="total=30"
            :class="$route.fullPath==='/?tab=job'?'active':''"
            to="/?tab=job"
          >招聘</router-link>
        </li>
      </ul>
      <div class="topics">
        <ul class="topics-list" v-if="topics.length">
          <li v-for="item in topics" :key="item.id">
            <router-link :to="`/user/${item.author.loginname}`" class="author-avatar">
              <img :src="item.author.avatar_url" />
            </router-link>
            <div class="reply-count">
              <span class="count_of_replies">{{item.reply_count}}</span>
              <span class="count_seperator">/</span>
              <span class="count_of_visits">{{item.visit_count}}</span>
            </div>
            <div class="topics-title-wrapper">
              <span
                v-if="$route.fullPath==='/'||$route.fullPath==='/?tab=all'||item.top||item.good"
                :class="{tab:true,active:item.top||item.good}"
              >{{item.top?'置顶':item.good?'精华':item.tab==='share'?'分享':item.tab==='ask'?'问答':item.tab==='job'?'招聘':'weex'}}</span>
              <router-link
                :to="`/topic/${item.id}`"
                :title="item.title"
                class="topic-title"
              >{{item.title}}</router-link>
            </div>
            <span class="last-reply">{{moment(item.last_reply_at)}}</span>
          </li>
        </ul>
        <div v-else>
          <img
            :style="{width:'100%'}"
            src="https://ss0.bdstatic.com/94oJfD_bAAcT8t7mm9GUKT-xh_/timg?image&quality=100&size=b4000_4000&sec=1562726230&di=f4f3d4096a5bd95bc892be2b29bcfd34&src=http://hbimg.b0.upaiyun.com/611bb3198c03cfefea188d170f33f27f1611c8e8a3ea-o8nm2q_fw658"
          />
        </div>
        <el-pagination
          background
          layout="prev, pager, next"
          :page-size="20"
          :pager-count="5"
          :total="total"
          @current-change="changePage"
        ></el-pagination>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import moment from "moment";
export default {
  name: "home",
  data() {
    return {
      topics: [],
      total: 857
    };
  },
  methods: {
    moment(time) {
      moment.locale("zh-cn");
      return moment(time).fromNow();
    },
    changePage(currentPage) {
      const tab = this.$route.query.tab || "all";
      this.$router.push(`/?tab=${tab}&page=${currentPage}`);
    }
  },
  watch: {
    "$route.fullPath": {
      immediate: true,
      handler() {
        const tab = this.$route.query.tab || "all";
        const page = this.$route.query.page || 1;
        this.topics = [];
        axios
          .get(`https://www.vue-js.com/api/v1/topics/?tab=${tab}&page=${page}`)
          .then(res => {
            this.topics = res.data.data;
          });
      }
    }
  },
  created() {
    axios.get("https://www.vue-js.com/api/v1/topics").then(res => {
      console.log(res.data.data);

      this.topics = res.data.data;
    });
  }
};
</script>

<style>
.home .nav {
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 10px;
  background-color: #f6f6f6;
}
.topics ul.topics-list li {
  padding: 10px;
  border-top: 1px solid#f0f0f0;
  font-size: 14px;
  display: flex;
  align-items: center;
}
.topic-main .nav a {
  margin: 0 10px;
  color: #369219;
}
.topic-main .nav a.active {
  background-color: #369219;
  color: #fff;
  padding: 3px 4px;
  border-radius: 3px;
}
.tab {
  background-color: #e5e5e5;
  color: #999;
  padding: 2px 4px;
  border-radius: 3px;
  -webkit-border-radius: 3px;
  -moz-border-radius: 3px;
  -o-border-radius: 3px;
  font-size: 12px;
}
.tab.active {
  background: #369219;
  color: #fff;
}

.topics .author-avatar {
  flex-shrink: 0;
}
.topics .author-avatar img {
  width: 30px;
  height: 30px;
  border-radius: 3px;
}
.topics .reply-count {
  flex-shrink: 0;
  width: 70px;
  /* display: inline-block; */
  text-align: center;
}
.reply-count .count_of_replies {
  color: #9e78c0;
}
.reply-count .count_of_seperator {
  font-size: 10px;
}
.reply-count .count_of_visits {
  font-size: 10px;
  color: #b4b4b4;
}
.topics .topics-title-wrapper {
  flex-grow: 1;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
.topics-title-wrapper a.topic-title {
  color: #333;
}
.topics-title-wrapper a.topic-title:visited {
  color: #888;
}
.topics .last-reply {
  flex-shrink: 0;
}
</style>
