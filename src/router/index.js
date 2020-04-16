import Vue from "vue"
import VueRouter from "vue-router"
import EventCreate from "../views/EventCreate.vue"
import EventList from "../views/EventList"
import EventShow from "../views/EventShow"

Vue.use(VueRouter)

const mode = "history"

const routes = [
  {
    path: "/",
    name: "event-list",
    component: EventList
  },
  {
    path: "/event/:id",
    name: "event-show",
    component: EventShow,
    props: true
  },
  {
    path: "/event/create",
    name: "event-create",
    component: EventCreate
  }
]

const router = new VueRouter({
  routes,
  mode
})

export default router
