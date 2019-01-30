<template src="./input.html">
</template>

<script>
import './input.scss'

export default {
  name: 'todo-input',
  props: {
    id: String,
    name: String,
    label: String,
    placeholder: String,
    model: String,
    onChange: Function,
    value: String
  },
  data () {
    return {
      msg: 'My input'
    }
  },
  methods: {
    handleInput: function (value) {
      this.$emit('onChange', value)
    }
  }
}

</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
