import Vue from "vue";
import VueRouter from "vue-router";
import Home from "./components/Home.vue";
import Topic from "./components/Topic.vue";
import User from "./components/User.vue";
import UserRecentTopics from "./components/UserRecentTopics.vue";
import UserRecentReplies from "./components/UserRecentReplies.vue";
import Mymessages from "./components/Mymessages.vue";

import CreateTopic from "./components/CreateTopic.vue";
import PUBLICURL from "./publicvalue";
Vue.use(VueRouter);
const routes = [
  {
    component: Home,
    path: PUBLICURL + "/"
  },
  {
    component: CreateTopic,
    path: PUBLICURL + "/topic/create"
  },
  {
    component: Topic,
    path: PUBLICURL + "/topic/:id"
  },
  {
    component: User,
    path: PUBLICURL + "/user/:loginname"
  },
  {
    component: UserRecentTopics,
    path: PUBLICURL + "/user/:loginname/topics"
  },
  {
    component: UserRecentReplies,
    path: PUBLICURL + "/user/:loginname/replies"
  },
  {
    component: Mymessages,
    path: PUBLICURL + "/my/messages"
  }
];
const router = new VueRouter({
  mode: "history",
  routes
});
export default router;
