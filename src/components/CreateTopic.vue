<template>
  <div class="create-wrapper">
    <div class="create-topic panel">
      <div class="panel-head">
        <span class="panel-head-title push-home">主页</span>
        <span class="divider">/</span>
        <span class="subtext">发布话题</span>
      </div>
      <div class="create-topic-main">
        <div>
          <span>选择板块：</span>
          <select class="selector" v-model="tab">
            <option value>请选择</option>
            <option value="share">分享</option>
            <option value="ask">问答</option>
            <option value="job">招聘</option>
          </select>
        </div>
        <div>
          <input class="create-title" type="text" placeholder="标题字数10字以上" v-model="title" />
        </div>
        <div class="quillarea">
          <quill-editor
            v-model="content"
            ref="myQuillEditor"
            :options="editorOption"
            @blur="onEditorBlur($event)"
            @focus="onEditorFocus($event)"
            @ready="onEditorReady($event)"
          ></quill-editor>
          <button class="submit" @click="submit">提交</button>
        </div>
      </div>
    </div>
    <div class="aside">
      <div class="panel">
        <div class="panel-head">
          <span>Markdown 语法参考</span>
        </div>
        <div class="main-inner">
          <ul>
            <li>
              <span>### 单行的标题</span>
            </li>
            <li>
              <span>**粗体**</span>
            </li>
            <li>
              <span>`console.log('行内代码')`</span>
            </li>
            <li>
              <span>```js\n code \n``` 标记代码块</span>
            </li>
            <li>
              <span>[内容](链接)</span>
            </li>
            <li>
              <span>![文字说明](图片链接</span>
            </li>
          </ul>
          <a href="http://www.ituring.com.cn/article/775">Markdown 文档</a>
        </div>
      </div>
      <div class="panel">
        <div class="panel-head">
          <span>话题发布指南</span>
        </div>
        <div class="main-inner">
          <ul>
            <li>
              <span>尽量把话题要点浓缩到标题里</span>
            </li>
            <li>
              <span>代码含义和报错可在 SegmentFault 提问</span>
            </li>
            <li>
              <span>给话题选择合适的标签能增加浏览</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import "quill/dist/quill.core.css";
import "quill/dist/quill.snow.css";
import "quill/dist/quill.bubble.css";

import { quillEditor } from "vue-quill-editor";
export default {
  name: "createtopic",
  data() {
    return {
      tab: "",
      content: "",
      title: "",
      // 富文本編輯器的配置 添加刪除某些功能
      editorOption: {}
    };
  },
  components: {
    quillEditor
  },
  methods: {
    submit() {
      axios
        .post("https://www.vue-js.com/api/v1/topics", {
          tab: this.tab,
          title: this.title,
          content: this.content,
          accesstoken: localStorage.getItem("token")
        })
        .then(res => {
          this.tab = "";
          this.content = "";
          this.title = "";
          this.$router.push(`/topic/${res.data.topic_id}`);
          console.log(res.data);
        });
    },
    onEditorBlur(quill) {
      // console.log("editor blur!", quill);
    },
    onEditorFocus(quill) {
      // console.log("editor focus!", quill);
    },
    onEditorReady(quill) {
      // console.log("editor ready!", quill);
    },
    //當富文本編輯器輸入內容的話 同步修改 你自己的 data content
    onEditorChange({ quill, html, text }) {
      // console.log("editor change!", quill, html, text);
      this.content = html;
    }
  }
};
</script>

<style>
.create-wrapper {
  display: flex;
  justify-content: space-between;
}
.panel-head .push-home {
  cursor: pointer;
}
.panel-head .divider {
  padding: 0 5px;
}
.panel-head .subtext {
  color: #999;
}
.create-topic-main {
  padding: 10px;
  border-top: 1px solid #e5e5e5;
}
.create-topic-main .selector {
  width: 220px;
  background-color: #fff;
  border: 1px solid #ccc;
  height: 30px;
  /* *margin-top: 4px; */
  line-height: 30px;
}
.create-topic-main .create-title {
  width: 98%;
  margin-bottom: 1em;
  height: 30px;
  font-size: 14px;
  font-weight: 400;
  word-break: break-word;
  border: 1px solid rgb(204, 204, 204);
}
.create-topic-main .quillarea {
  width: 100%;
  height: 500px;
  position: relative;
}
.quillarea .quill-editor {
  height: 100%;
}
.quillarea .quill-editor .ql-container {
  border: 0;
}
.aside .panel {
  width: 23vw;
}
.aside .panel .main-inner {
  font-size: 13px;
  line-height: 2em;
  padding: 10px;
  background-color: #fff;
}
.aside .panel .main-inner ul {
  margin: 4px 0;
}
.aside .panel .main-inner a {
  color: #778087;
}
.panel .main-inner a:hover {
  text-decoration: underline;
}
</style>
