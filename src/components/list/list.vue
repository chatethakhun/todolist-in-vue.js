<template src="./list.html">
</template>

<script>
import './list.scss'

export default {
  name: 'list',
  props: {
    datas: Array,
    loading: Boolean
  },
  methods: {
    handleDelete: function (data) {
      this.$emit('handleDelete', data)
    }
  }
}

</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
