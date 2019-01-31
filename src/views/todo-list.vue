<template src="./todo-list.html">
</template>

<script>
import './todo-list.scss'
import Input from '../components/input/input'
import Button from '../components/button/button'
import List from '../components/list/list'
import { Query } from '../constant/query.js'

export default {
  name: 'HelloWorld',
  components: {
    'v-input': Input,
    'todo-button': Button,
    List
  },
  data: function () {
    return {
      msg: 'Welcome to Your Vue.js App',
      name: '',
      lists: [],
      data: [],
      loading: true
    }
  },
  apollo: {
    lists: {
      query: Query,
      update: ({ languages }) => {
        return languages
      },
      result ({ data: { languages }, loading }) {
        this.loading = loading
        this.lists = languages
      },
      loadingKey: 'loading'
    }
  },
  methods: {
    onChange: function (value) {
      if (value !== '') {
        this.name = value
      }
    },
    handleSubmit: function (evt) {
      evt.preventDefault()
      if (this.name !== '') {
        this.lists.push(this.name)
      }
      this.name = ''
    },
    handleDelete: function (data) {
      const newList = this.lists.filter((v) => v !== data)
      this.lists = newList
    }
  }
}

</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
