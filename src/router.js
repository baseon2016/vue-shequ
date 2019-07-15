import Vue from "vue";
import VueRouter from "vue-router";
import Home from "./components/Home.vue";
import Topic from "./components/Topic.vue";
import User from "./components/User.vue";
import UserRecentTopics from "./components/UserRecentTopics.vue";
import UserRecentReplies from "./components/UserRecentReplies.vue";
import Mymessages from "./components/Mymessages.vue";

import CreateTopic from "./components/CreateTopic.vue";
Vue.use(VueRouter);
const routes = [
  {
    component: Home,
    path: "/"
  },
  {
    component: CreateTopic,
    path: "/topic/create"
  },
  {
    component: Topic,
    path: "/topic/:id"
  },
  {
    component: User,
    path: "/user/:loginname"
  },
  {
    component: UserRecentTopics,
    path: "/user/:loginname/topics"
  },
  {
    component: UserRecentReplies,
    path: "/user/:loginname/replies"
  },
  {
    component: Mymessages,
    path: "/my/messages"
  }
];
const router = new VueRouter({
  mode: "history",
  routes
});
export default router;
