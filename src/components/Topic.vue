<template>
  <div class="topic-wrapper">
    <div v-if="topic" class="main">
      <article class="topic panel">
        <div class="article-head">
          <div class="article-head-title">
            <div class="title-text">
              <span
                v-if="topic.good||topic.top"
                class="tab active"
              >{{topic.top?'置顶':topic.good?'精华':''}}</span>
              <span class="title">{{topic.title}}</span>
            </div>
            <span
              v-if="loggedin"
              @click="userCollect"
              :class="isCollected?'decollect collect':'collect'"
            >{{isCollected?'取消收藏':'加入收藏'}}</span>
          </div>
          <p class="changes">
            <span>
              <b>·</b>
              发布于{{moment(topic.creat_at)}}
            </span>
            <span>
              <b>·</b>
              作者{{topic.author.loginname}}
            </span>
            <span>
              <b>·</b>
              {{topic.visit_count}}次浏览
            </span>
            <span>
              <b>·</b>
              来自{{topic.tab}}
            </span>
          </p>
        </div>
        <div class="article-content" v-html="topic.content">{{topic.content}}</div>
      </article>
      <div class="topic-reply panel">
        <div class="panel-head">
          <span class="panel-head-title">{{topic.reply_count}} 回复</span>
        </div>
        <ul>
          <li
            v-for="(item,index) in topic.replies"
            :key="item.id"
            :class="{'reply-item':true,'reply-highlight':item.ups.length>=2}"
          >
            <div class="reply-author">
              <img :src="item.author.avatar_url" />
              <div class="user-info">
                <span class="reply-avatar">{{item.author.loginname}}</span>
                <span class="reply-date">{{(index+1)+'楼·'+moment(item.create_at)}}</span>
              </div>
              <div class="user-action">
                <span
                  @click="userUp(item)"
                  :class="{'iconfont':true,'icondianzan':true,'up-btn':true,'active':isUped(item)}"
                >{{item.ups.length?item.ups.length:''}}</span>
                <span v-if="loggedin" @click="showreply(item)" class="iconfont iconreply reply-btn"></span>
              </div>
            </div>
            <div class="reply-content" v-html="item.content">{{item.content}}</div>
            <div v-if="reReply.find(ele=>ele.index===item.id)" class="post-reply panel">
              <div class="panel-head">
                <span class="panel-head-title">回复他（她）</span>
              </div>
              <div class="postarea">
                <textarea
                  @keyup.enter="replytoReply(item,reReply.find(ele=>ele.index===item.id))"
                  cols="10"
                  rows="3"
                  v-model="reReply.find(ele=>ele.index===item.id).text"
                ></textarea>
                <button
                  class="submit"
                  @click="replytoReply(item,reReply.find(ele=>ele.index===item.id))"
                >回复</button>
              </div>
            </div>
          </li>
        </ul>
      </div>
      <div class="post-reply panel">
        <div class="panel-head">
          <span class="panel-head-title">添加回复</span>
        </div>
        <div class="postarea">
          <textarea @keyup.enter="postReply" cols="10" rows="3" v-model="postText"></textarea>
          <button class="submit" @click="postReply">回复</button>
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
  name: "topic",
  data() {
    return {
      topic: null,
      isCollected: false,
      postText: "",
      reReply: []
    };
  },
  computed: {
    loggedin() {
      return localStorage.getItem("token");
    }
  },
  methods: {
    isUped(item) {
      return item.ups.indexOf(localStorage.getItem("userId")) != -1;
    },
    findreReplyTxt(ele, item) {
      if (ele.index === item.id) {
        return ele.text;
      }
    },
    moment(time) {
      moment.locale("zh-cn");
      return moment(time).fromNow();
    },
    userCollect() {
      const obj = {
        accesstoken: localStorage.getItem("token"),
        topic_id: this.topic.id
      };
      if (this.isCollected) {
        axios
          .post("https://www.vue-js.com/api/v1/topic/de_collect", obj)
          .then(res => {
            this.isCollected = false;
          });
      } else {
        axios
          .post("https://www.vue-js.com/api/v1/topic/collect", obj)
          .then(res => {
            this.isCollected = true;
          });
      }
    },
    userUp(item) {
      if (localStorage.getItem("token")) {
        axios
          .post(`https://www.vue-js.com/api/v1/reply/${item.id}/ups`, {
            accesstoken: localStorage.getItem("token")
          })
          .then(res => {
            if (res.data.action === "up") {
              item.ups.push(localStorage.getItem("userId"));
            } else {
              item.ups = item.ups.filter(
                ele => ele != localStorage.getItem("userId")
              );
            }
          });
      }
    },
    showreply(item) {
      const newReply = {
        index: item.id,
        text: `@${item.author.loginname} `
      };
      this.reReply.push(newReply);
    },
    postReply() {
      if (this.postText.trim()) {
        axios
          .post(
            `https://www.vue-js.com/api/v1/topic/${this.topic.id}/replies`,
            {
              accesstoken: localStorage.getItem("token"),
              content: this.postText
            }
          )
          .then(res => {
            this.postText = "";
            axios
              .get(`https://www.vue-js.com/api/v1/topic/${this.topic.id}`)
              .then(res => {
                this.topic = res.data.data;
              });
          });
      } else {
        alert("填写内容不能为空");
      }
    },
    replytoReply(item, objReply) {
      if (objReply.text.trim()) {
        axios
          .post(
            `https://www.vue-js.com/api/v1/topic/${this.topic.id}/replies`,
            {
              accesstoken: localStorage.getItem("token"),
              content: objReply.text,
              reply_id: item.id
            }
          )
          .then(res => {
            this.reReply = this.reReply.filter(ele => ele.index != item.id);
            axios
              .get(`https://www.vue-js.com/api/v1/topic/${this.topic.id}`)
              .then(res => {
                this.topic = res.data.data;
              });
          });
      } else {
        alert("填写内容不能为空");
      }
    }
  },
  created() {
    axios
      .get(`https://www.vue-js.com/api/v1/topic/${this.$route.params.id}`)
      .then(res => {
        this.topic = res.data.data;
        console.log(res.data.data);
      });
  }
};
</script>

<style>
.topic .article-head {
  padding: 10px;
  border-bottom: 1px solid #e5e5e5;
}
.topic .article-head .article-head-title {
  display: flex;
  align-items: center;
}
.article-head-title .title-text {
  font-size: 22px;
  font-weight: 700;
  margin: 8px 0;
  line-height: 1.3;
  flex-grow: 1;
}

.article-head-title .collect {
  display: inline-block;
  padding: 3px 10px;
  border: 0;
  margin: 0;
  font-size: 14px;
  transition: all 0.2s ease-in-out;
  cursor: pointer;
  letter-spacing: 2px;
  box-shadow: none;
  border-radius: 3px;
  line-height: 2;
  color: #fff;
  background-color: #369219;
  flex-grow: 0;
}
.article-head-title .collect:hover {
  background-color: #6ba44e;
}
.article-head-title .decollect {
  background-color: #e5e5e5;
}
.article-head-title .decollect:hover {
  background-color: #909090;
  color: #fff;
}
.topic .article-head .changes {
  font-size: 12px;
  color: #838383;
  margin: 0;
}
.topic .article-content {
  padding: 10px;
  margin: 0 10px;
}

.topic-reply .reply-item {
  background: #fff;
  border-top: 1px solid #f0f0f0;
  overflow: hidden;
  position: relative;
  padding: 10px;
  font-size: 14px;
}
.topic-reply .reply-item.reply-highlight {
  background-color: #f4fcf0;
}
.topic-reply .reply-item:hover .up-btn {
  opacity: 0.4;
}
.topic-reply .reply-author {
  display: flex;
  align-items: flex-start;
}
.topic-reply .reply-author img {
  width: 30px;
  height: 30px;
  display: inline-block;
  flex-shrink: 0;
}
.topic-reply .reply-author .user-info {
  flex-shrink: 0;
  margin-left: 10px;
}
.user-info .reply-avatar {
  font-size: 12px;
  font-weight: 700;
  cursor: pointer;
}
.user-info .reply-avatar:hover {
  color: #385f8a;
}
.user-info .reply-date {
  margin-left: 10px;
  font-size: 11px;
  color: #08c;
  cursor: pointer;
}
.user-info .reply-date:hover {
  color: #005580;
  text-decoration: underline;
}
.topic-reply .reply-author .user-action {
  font-size: 15px;
  text-align: right;
  flex-grow: 1;
}
.user-action .reply-btn {
  opacity: 0.4;
  cursor: pointer;
}
.user-action .up-btn {
  opacity: 0;
  cursor: pointer;
}
.user-action .up-btn.active {
  opacity: 1;
}
.topic-reply .reply-item .reply-content {
  padding-left: 50px;
  color: #333;
}
.post-reply .postarea {
  position: relative;
}
.post-reply textarea {
  width: 100%;
  padding: 10px;
  border: 0;
  outline: 0;
  overflow: auto;
  font-size: 20px;
  line-height: 2;
  resize: none;
}
.submit {
  display: inline-block;
  padding: 3px 10px;
  border: 0;
  margin: 0;
  font-size: 14px;
  transition: all 0.2s ease-in-out;
  cursor: pointer;
  letter-spacing: 2px;
  box-shadow: none;
  border-radius: 3px;
  line-height: 2em;
  color: #fff;
  background-color: #3374de;
  position: absolute;
  left: 2%;
  bottom: 5%;
}
.submit:hover {
  color: #fff;
  background-color: #05c;
}
</style>
