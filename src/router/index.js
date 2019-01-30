import Vue from 'vue'
import Router from 'vue-router'
import TodoList from '@/views/todo-list'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'To do list',
      component: TodoList
    }
  ]
})
